// Rigid-body raft physics for the jointly-owned house, in river space (u, d).
// House-local frame: x = right, z = toward the stern (upstream). Bow points downstream (+d).
import { clamp, wrapAngle, noise1 } from '../util/math.js';
import { ROCKS, POOLS, halfWidth, flowAt, rocksInRange, roughness, flowSpeed } from './course.js';

export const PARTS = {
  core: { mass: 0.4, rect: [-1.6, 1.6, -2.4, 1.4], circles: [[0, -1.15, 1.45], [0, 0.3, 1.45]] },
  L: { mass: 0.2, rect: [-4.0, -1.6, -2.2, 1.2], circles: [[-2.8, -1.05, 1.2], [-2.8, 0.15, 1.2]] },
  R: { mass: 0.2, rect: [1.6, 4.0, -2.2, 1.2], circles: [[2.8, -1.05, 1.2], [2.8, 0.15, 1.2]] },
  C: { mass: 0.2, rect: [-1.8, 1.8, 1.4, 3.4], circles: [[-0.8, 2.4, 1.0], [0.8, 2.4, 1.0]] },
  door: { mass: 0.16, rect: [-0.55, 0.55, -1.05, 1.05], circles: [[0, -0.45, 0.62], [0, 0.45, 0.62]] },
};

export const TUNE = {
  drag: 1.12, // 1/s relaxation toward the current
  angDrag: 0.9,
  yawSpring: 1.0,
  scoop: 6.4, // m/s lateral kick on catching the paddle (full house)
  stroke: 2.4, // m/s per regular stroke
  strokeEvery: 0.66,
  restitution: 0.32,
  bankK: 70,
};

export function nimbleness(mass, door) {
  if (door) return 1.9;
  return Math.pow(1 / mass, 0.62);
}

export function createHouse() {
  return {
    u: 0,
    d: 0,
    vu: 0,
    vd: 0,
    psi: 0,
    omega: 0,
    roll: 0,
    rollV: 0,
    pitch: 0,
    pitchV: 0,
    heave: 0,
    heaveV: 0,
    sag: 0,
    parts: new Set(['core', 'L', 'R', 'C']),
    door: false,
    mass: 1,
    inertia: 1,
    circles: [], // {x, z, r, part, m}
    minU: 0,
    maxU: 0,
    accU: 0,
    accD: 0,
    invuln: 0,
    whirl: null,
    whirlCooldown: 0,
    scraping: 0,
    squeeze: 0,
    moored: true,
    pin: 0,
    pinSide: 0,
  };
}

export function rebuildBody(h) {
  h.circles.length = 0;
  let m = 0;
  for (const p of h.parts) {
    const def = PARTS[p];
    m += def.mass;
    for (const [x, z, r] of def.circles) h.circles.push({ x, z, r, part: p, m: def.mass / def.circles.length });
  }
  h.mass = m;
  let I = 0.15;
  for (const c of h.circles) I += c.m * (c.x * c.x + c.z * c.z + 0.5 * c.r * c.r);
  h.inertia = I;
}

// local (x, z) → river (u, d)
export function localToRiver(h, x, z, out) {
  const s = Math.sin(h.psi);
  const c = Math.cos(h.psi);
  const ld = -z;
  out.u = h.u + c * x + s * ld;
  out.d = h.d - s * x + c * ld;
  return out;
}

// river direction vector → local (x, z)
export function riverDirToLocal(h, du, dd, out) {
  const s = Math.sin(h.psi);
  const c = Math.cos(h.psi);
  // inverse rotation of [x, ld] -> [u, d]
  out.x = c * du - s * dd;
  out.z = -(s * du + c * dd);
  return out;
}

const _p = { u: 0, d: 0 };
const _f = { u: 0, d: 0 };
const _near = [];

export function updateExtents(h) {
  let mn = 1e9;
  let mx = -1e9;
  for (const c of h.circles) {
    localToRiver(h, c.x, c.z, _p);
    mn = Math.min(mn, _p.u - c.r);
    mx = Math.max(mx, _p.u + c.r);
  }
  h.minU = mn;
  h.maxU = mx;
}

// Apply an impulse (as velocity change in m/s for the full house) at a local point.
export function applyKick(h, du, dd, spin = 0) {
  h.vu += du;
  h.vd += dd;
  h.omega += spin;
}

// One fixed physics step. Returns nothing; pushes contact info to `contacts`.
export function stepHouse(h, dt, time, contacts) {
  const prevVu = h.vu;
  const prevVd = h.vd;
  h.invuln = Math.max(0, h.invuln - dt);
  h.whirlCooldown = Math.max(0, h.whirlCooldown - dt);

  if (h.moored) {
    h.vu *= 0.9;
    h.vd = 0;
    h.omega *= 0.9;
  } else if (h.whirl) {
    stepWhirl(h, dt);
  } else {
    let Fu = 0;
    let Fd = 0;
    let T = 0;
    const sPsi = Math.sin(h.psi);
    const cPsi = Math.cos(h.psi);
    for (const c of h.circles) {
      const ax = cPsi * c.x + sPsi * -c.z; // arm in river space (u)
      const ad = -sPsi * c.x + cPsi * -c.z; // arm (d)
      const pu = h.u + ax;
      const pd = h.d + ad;
      flowAt(pu, pd, _f);
      // velocity of point: v + omega x arm  (omega clockwise-positive)
      const vpu = h.vu + h.omega * ad;
      const vpd = h.vd - h.omega * ax;
      const k = (h.door ? 2.6 : TUNE.drag) * c.m;
      const fu = k * (_f.u - vpu);
      const fd = k * (_f.d - vpd);
      Fu += fu;
      Fd += fd;
      T += ad * fu - ax * fd;
    }
    h.vu += (Fu / h.mass) * dt;
    h.vd += (Fd / h.mass) * dt;
    h.omega += (T / h.inertia) * dt;
    h.omega -= h.omega * TUNE.angDrag * dt;
    if (!h.door) h.omega -= wrapAngle(h.psi) * TUNE.yawSpring * dt;
    // rapids jostle
    const rough = roughness(h.d);
    if (rough > 0.01) {
      h.vu += noise1(time * 1.7 + h.d * 0.05) * rough * 1.4 * dt;
      h.omega += noise1(time * 1.3 + 40) * rough * 0.5 * dt;
    }
    tryCapture(h);
  }

  h.u += h.vu * dt;
  h.d += h.vd * dt;
  h.psi += h.omega * dt;

  const nBefore = contacts.length;
  collide(h, dt, contacts);
  unpin(h, dt, contacts, nBefore);

  // body-frame accelerations for sliding props
  h.accU = (h.vu - prevVu) / dt;
  h.accD = (h.vd - prevVd) / dt;
  updateExtents(h);
  stepWobble(h, dt, time);
}

// A wide raft jammed square onto a rock would sit there forever; the current makes it pivot off instead,
// always toward the nearest stretch of open water.
function unpin(h, dt, contacts, from) {
  let touching = false;
  for (let i = from; i < contacts.length; i++) if (contacts[i].type === 'rock') touching = true;
  if (touching) {
    h.pin = Math.min(1.5, h.pin + dt);
    h.pinCheck = (h.pinCheck || 0) - dt;
    if ((!h.pinSide && h.pin > 0.08) || (h.pinSide && h.pinCheck <= 0)) {
      h.pinSide = openSide(h);
      h.pinCheck = 0.5;
    }
  } else {
    h.pin = Math.max(0, h.pin - dt * 0.6);
    if (h.pin === 0) h.pinSide = 0;
  }
  // stalled against rocks for a while: glide decisively toward open water
  if (h.vd < 1.5 && !h.whirl && h.pinSide) h.stall = (h.stall || 0) + dt;
  else h.stall = Math.max(0, (h.stall || 0) - dt * 2);
  if (h.pin > 0.08 && h.pinSide) {
    const k = Math.min(1, (h.pin - 0.08) * 4) + Math.min(1.5, h.stall * 0.6);
    h.vu += h.pinSide * 11 * k * dt;
    h.omega += h.pinSide * 1.2 * Math.min(1, k) * dt;
  }
}

const _rowNear = [];
function openSide(h) {
  const halfL = h.u - h.minU + 0.4;
  const halfR = h.maxU - h.u + 0.4;
  rocksInRange(h.d - 3, h.d + 7, _rowNear);
  const blocked = [];
  for (const i of _rowNear) {
    const rk = ROCKS[i];
    blocked.push([rk.u - rk.r - halfR, rk.u + rk.r + halfL]);
  }
  const hw = halfWidth(h.d + 3);
  const lo = -hw + halfL;
  const hi = hw - halfR;
  const free = (u) => u >= lo && u <= hi && !blocked.some(([a, b]) => u > a && u < b);
  for (let s = 0.25; s < 30; s += 0.25) {
    const l = free(h.u - s);
    const r = free(h.u + s);
    if (l && !r) return -1;
    if (r && !l) return 1;
    if (l && r) return h.u > 0 ? -1 : 1;
  }
  return h.u > 0 ? -1 : 1;
}

function stepWobble(h, dt, time) {
  const nim = h.door ? 2.2 : 1 / Math.max(0.4, h.mass);
  // Lateral acceleration in house frame leans the deck; heavy, slow and overshooting.
  const s = Math.sin(h.psi);
  const c = Math.cos(h.psi);
  const aLatLocal = c * h.accU - s * h.accD;
  const aFwdLocal = s * h.accU + c * h.accD;
  const rough = roughness(h.d);
  const w0 = h.door ? 5.5 : 3.1 + (1 - h.mass) * 1.6;
  const zeta = 0.22;
  const waveRoll = rough * 0.05 * Math.sin(time * 2.1 + h.d * 0.2) + rough * 0.03 * noise1(time * 3.1);
  const wavePitch = rough * 0.06 * Math.sin(time * 2.7 + h.d * 0.31) + 0.012 * Math.sin(time * 1.1);
  const rollTarget = clamp(aLatLocal * 0.012 * nim, -0.25, 0.25) + waveRoll + h.sag * 0.6;
  const pitchTarget = clamp(-aFwdLocal * 0.01 * nim, -0.2, 0.2) + wavePitch - h.sag * 0.4;
  h.rollV += (-(w0 * w0) * (h.roll - rollTarget) - 2 * zeta * w0 * h.rollV) * dt;
  h.roll += h.rollV * dt;
  h.pitchV += (-(w0 * w0) * (h.pitch - pitchTarget) - 2 * zeta * w0 * h.pitchV) * dt;
  h.pitch += h.pitchV * dt;
  h.roll = clamp(h.roll, -0.45, 0.45);
  h.pitch = clamp(h.pitch, -0.35, 0.35);
  const heaveTarget = rough * 0.14 * Math.sin(time * 2.4 + h.d * 0.42) + 0.03 * Math.sin(time * 1.3);
  const hw0 = 4.0;
  h.heaveV += (-(hw0 * hw0) * (h.heave - heaveTarget) - 2 * 0.3 * hw0 * h.heaveV) * dt;
  h.heave += h.heaveV * dt;
}

// Lean impulse used by strokes/hits. side: -1 = left side dips, +1 = right dips (house frame).
export function leanKick(h, rollRate, pitchRate = 0) {
  const nim = h.door ? 1.6 : 1 / Math.max(0.45, h.mass);
  h.rollV += rollRate * Math.min(nim, 2.2);
  h.pitchV += pitchRate * Math.min(nim, 2.2);
}

function tryCapture(h) {
  if (h.whirlCooldown > 0) return;
  for (const p of POOLS) {
    const du = h.u - p.u;
    const dd = h.d - p.d;
    const r = Math.hypot(du, dd);
    if (r < p.capture) {
      const a = Math.atan2(dd, du);
      // release angle: one full turn plus 45° into the fling quadrant
      h.whirl = {
        pool: p,
        angle: a,
        travelled: 0,
        radius: r,
        speed: 0,
        target: releaseTravel(a, p.dir),
        t: 0,
        early: false,
      };
      return;
    }
  }
}

function releaseTravel(a, dir) {
  const diff = angleToRelease(a, dir);
  return diff < Math.PI * 0.75 ? diff + Math.PI * 2 : diff;
}

function angleToRelease(a, dir) {
  // desired release angle: -45° for CCW (fling right), -135° for CW (fling left)
  const rel = dir > 0 ? -Math.PI / 4 : (-3 * Math.PI) / 4;
  let diff = (rel - a) * dir; // positive travel along spin direction
  diff = ((diff % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  return diff;
}

function stepWhirl(h, dt) {
  const w = h.whirl;
  const p = w.pool;
  w.t += dt;
  w.speed = Math.min(2.9, w.speed + dt * 5.5); // rad/s
  const step = w.speed * dt;
  w.angle += step * p.dir;
  w.travelled += step;
  w.radius += (p.capture * 0.62 - w.radius) * Math.min(1, dt * 2.2);
  const nu = p.u + Math.cos(w.angle) * w.radius;
  const nd = p.d + Math.sin(w.angle) * w.radius;
  h.vu = (nu - h.u) / dt;
  h.vd = (nd - h.d) / dt;
  h.u = nu - h.vu * dt; // integration below re-adds velocity
  h.d = nd - h.vd * dt;
  h.omega = -p.dir * w.speed * 1.35; // spin the deck with the water (clockwise-positive)
  if (w.travelled >= w.target) releaseWhirl(h, 0, 0);
}

export function releaseWhirl(h, kickU, kickD) {
  const w = h.whirl;
  if (!w) return;
  const p = w.pool;
  const tu = -Math.sin(w.angle) * p.dir;
  const td = Math.cos(w.angle) * p.dir;
  const sp = 8.6;
  h.vu = tu * sp + kickU;
  h.vd = Math.max(1.5, td * sp) + kickD;
  h.omega *= 0.45;
  h.whirl = null;
  h.whirlCooldown = 2.6;
  h.released = { t: 0, early: w.travelled < w.target - 0.05 };
}

function collide(h, dt, contacts) {
  const sPsi = Math.sin(h.psi);
  const cPsi = Math.cos(h.psi);
  rocksInRange(h.d - 10, h.d + 10, _near);
  let squeezeL = 0;
  let squeezeR = 0;
  h.scraping = Math.max(0, h.scraping - dt * 3);
  for (const c of h.circles) {
    const ax = cPsi * c.x + sPsi * -c.z;
    const ad = -sPsi * c.x + cPsi * -c.z;
    let pu = h.u + ax;
    let pd = h.d + ad;
    for (let k = 0; k < _near.length; k++) {
      const rk = ROCKS[_near[k]];
      const du = pu - rk.u;
      const dd = pd - rk.d;
      const minD = c.r + rk.r * 0.92;
      const d2 = du * du + dd * dd;
      if (d2 >= minD * minD) continue;
      const dist = Math.sqrt(d2) || 0.001;
      const nu = du / dist;
      const nd = dd / dist;
      const pen = minD - dist;
      // push out
      h.u += nu * pen;
      h.d += nd * pen;
      pu += nu * pen;
      pd += nd * pen;
      const vpu = h.vu + h.omega * ad;
      const vpd = h.vd - h.omega * ax;
      const vn = vpu * nu + vpd * nd;
      if (vn < 0) {
        const armXn = ax * nd - ad * nu; // 2D cross (CCW-positive)
        const denom = 1 / h.mass + (armXn * armXn) / h.inertia;
        const j = (-(1 + TUNE.restitution) * vn) / denom;
        h.vu += (j * nu) / h.mass;
        h.vd += (j * nd) / h.mass;
        h.omega += (-j * armXn) / h.inertia;
        // tangential scrape friction spins the house
        const tu = -nd;
        const td = nu;
        const vt = vpu * tu + vpd * td;
        const jt = clamp(-vt * 0.25 * h.mass, -j * 0.4, j * 0.4);
        h.vu += (jt * tu) / h.mass;
        h.vd += (jt * td) / h.mass;
        h.omega += (-jt * (ax * td - ad * tu)) / h.inertia;
        contacts.push({ type: 'rock', rock: _near[k], speed: -vn, part: c.part, lx: c.x, lz: c.z, nu, nd });
      }
    }
    // banks / canyon walls (soft, so an over-wide house can be squeezed through)
    const hw = halfWidth(pd);
    const over = Math.abs(pu) + c.r - hw;
    if (over > 0) {
      const side = Math.sign(pu);
      if (side < 0) squeezeL = Math.max(squeezeL, over);
      else squeezeR = Math.max(squeezeR, over);
      const vpu = h.vu + h.omega * ad;
      const into = vpu * side;
      h.vu -= side * TUNE.bankK * over * dt;
      if (into > 0) {
        h.vu -= side * into * 0.5;
        if (into > 1.6) contacts.push({ type: 'bank', speed: into, part: c.part, lx: c.x, lz: c.z, nu: -side, nd: 0 });
      }
      h.vd -= h.vd * 0.6 * dt * Math.min(1, over * 2);
      h.omega += -side * ad * 0.08 * dt * over * 10;
      h.scraping = Math.min(1, h.scraping + dt * 6 * Math.min(1, over * 3));
      if (over > 0.95) h.u -= side * (over - 0.95);
    }
  }
  h.squeeze = Math.min(squeezeL, squeezeR);
}

// Clearance between a rock and the house's hull circles (negative = touching).
export function rockClearance(h, rk) {
  let best = 1e9;
  for (const c of h.circles) {
    localToRiver(h, c.x, c.z, _p);
    const d = Math.hypot(_p.u - rk.u, _p.d - rk.d) - c.r - rk.r * 0.92;
    if (d < best) best = d;
  }
  return best;
}

export function flowAhead(h) {
  return flowSpeed(h.d);
}
