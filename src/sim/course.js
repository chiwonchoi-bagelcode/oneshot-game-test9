// The river: one fixed course from the launch dock to the beach.
// Physics runs in "river space": u = lateral offset from the centerline (+ = river-right),
// d = distance downstream. Rendering maps (u, d) onto a gently meandering centerline.
import { clamp, keyframes, mulberry32, smooth, lerp } from '../util/math.js';

export const D_MIN = -90;
export const D_MAX = 1420;
export const BEACH_D = 1252;
export const FINISH_LABEL_D = 1190;

export const halfWidth = keyframes([
  [-90, 17], [0, 15.5], [80, 14.5], [300, 14.5], [430, 15.8], [520, 15.8], [548, 12], [580, 9.6],
  [612, 9.3], [652, 3.62], [666, 3.62], [690, 9.6], [724, 13.2], [760, 14.2], [955, 13.6],
  [1172, 13.2], [1196, 17], [1224, 31], [1262, 44], [1420, 46],
]);

export const flowSpeed = keyframes([
  [-90, 3], [0, 3.2], [36, 6.2], [120, 7.2], [300, 7.6], [440, 7.1], [520, 7.6], [578, 9.6],
  [652, 11.2], [692, 10], [732, 8.6], [900, 9.1], [960, 9.6], [1160, 10.1], [1186, 8.2],
  [1215, 5.8], [1245, 4.2], [1300, 2], [1420, 1.5],
]);

export const cliffHeight = keyframes([
  [-90, 2.4], [520, 2.8], [556, 13], [592, 19], [700, 19], [738, 4.2], [1160, 3.2], [1196, 1.4],
  [1240, 0.9], [1420, 0.9],
]);

export const roughness = keyframes([
  [-90, 0], [70, 0], [110, 0.35], [330, 0.55], [440, 0.3], [530, 0.45], [580, 0.75], [700, 0.85],
  [740, 0.5], [940, 0.6], [972, 0.92], [1166, 0.92], [1196, 0.25], [1236, 0], [1420, 0],
]);

export const SECTIONS = [
  { d: -999, name: '출발 나루', icon: 'dock' },
  { d: 92, name: '첫 여울', icon: 'rapids' },
  { d: 342, name: '바위 정원', icon: 'rocks' },
  { d: 440, name: '소용돌이 굽이', icon: 'whirl' },
  { d: 548, name: '좁은 협곡', icon: 'canyon' },
  { d: 724, name: '둘째 여울', icon: 'rapids' },
  { d: 846, name: '소용돌이 굽이', icon: 'whirl' },
  { d: 952, name: '마지막 급류', icon: 'rapids' },
  { d: 1190, name: '기슭', icon: 'beach' },
];

export function sectionAt(d) {
  let s = SECTIONS[0];
  for (const sec of SECTIONS) if (d >= sec.d) s = sec;
  return s;
}

export const BOTTLENECK = { d0: 640, d1: 676, dNarrow: 659 };

// ---------- centerline ----------
const STEP = 0.5;
const N = Math.ceil((D_MAX - D_MIN) / STEP) + 2;
const cx = new Float32Array(N);
const cz = new Float32Array(N);
const th = new Float32Array(N);

function headingRaw(d) {
  const fade = 1 - smooth(1120, 1215, d);
  const lead = smooth(-40, 40, d);
  return (0.21 * Math.sin(d / 92 + 0.5) + 0.1 * Math.sin(d / 37 + 1.9) - 0.04) * fade * (0.6 + 0.4 * lead);
}

(function buildCenterline() {
  let x = 0;
  let z = 0;
  // integrate from D_MIN; then shift so that d=0 sits at the origin
  for (let i = 0; i < N; i++) {
    const d = D_MIN + i * STEP;
    const t = headingRaw(d);
    th[i] = t;
    cx[i] = x;
    cz[i] = z;
    x += Math.sin(t) * STEP;
    z -= Math.cos(t) * STEP;
  }
  const i0 = Math.round((0 - D_MIN) / STEP);
  const ox = cx[i0];
  const oz = cz[i0];
  for (let i = 0; i < N; i++) {
    cx[i] -= ox;
    cz[i] -= oz;
  }
})();

function sampleIdx(d) {
  const f = clamp((d - D_MIN) / STEP, 0, N - 1.0001);
  const i = Math.floor(f);
  return [i, f - i];
}

export function heading(d) {
  const [i, f] = sampleIdx(d);
  return lerp(th[i], th[i + 1], f);
}

// World position (x, z) for river coordinates. Writes into out = {x, z}.
export function toWorld(u, d, out = { x: 0, z: 0 }) {
  const [i, f] = sampleIdx(d);
  const x = lerp(cx[i], cx[i + 1], f);
  const z = lerp(cz[i], cz[i + 1], f);
  const t = lerp(th[i], th[i + 1], f);
  out.x = x + Math.cos(t) * u;
  out.z = z + Math.sin(t) * u;
  return out;
}

// Approximate inverse for points near the river (used for debris & camera picking).
export function beachLine(u) {
  return BEACH_D + 0.0042 * u * u;
}

// ---------- obstacles ----------
// Rows of rocks: either explicit rocks [u, r] or a single navigable gap [center, width].
const ROWS = [
  { d: 104, rocks: [[0.4, 2.7]] },
  { d: 142, gap: [5, 13.1] },
  { d: 174, gap: [-4.5, 12.9] },
  { d: 207, rocks: [[0.6, 2.3], [-13.4, 1.5], [13.6, 1.5]] },
  { d: 240, gap: [6, 12.5] },
  { d: 272, gap: [-5.5, 12.5] },
  { d: 302, gap: [0.5, 12.1] },
  { d: 332, gap: [6.5, 12.1] },
  { d: 358, gap: [-2.5, 11.9] },
  { d: 382, gap: [4.5, 11.7] },
  { d: 406, gap: [-4.5, 11.7] },
  { d: 430, gap: [1.5, 12.1] },
  { d: 459, rocks: [[-14.6, 1.7], [12.9, 2.1]] },
  { d: 507, gap: [-9.8, 11.8] },
  { d: 538, gap: [-2.5, 12.1] },
  { d: 592, rocks: [[-4.6, 1.5]] },
  { d: 619, rocks: [[4.1, 1.45]] },
  { d: 708, rocks: [[0.4, 2.0]] },
  { d: 742, gap: [6, 12.2] },
  { d: 772, gap: [-3, 11.8] },
  { d: 801, gap: [5, 11.8] },
  { d: 830, gap: [-4, 11.8] },
  { d: 862, rocks: [[-12.8, 2.0], [13.6, 1.4]] },
  { d: 911, gap: [8.6, 11.8] },
  { d: 941, gap: [1.5, 11.8] },
  { d: 968, gap: [-4.5, 11.4] },
  { d: 994, gap: [1, 11.4] },
  { d: 1020, gap: [6, 11.4] },
  { d: 1046, gap: [0.5, 11.4] },
  { d: 1072, gap: [-5.5, 11.4] },
  { d: 1098, gap: [-0.5, 11.4] },
  { d: 1124, gap: [5, 11.4] },
  { d: 1150, gap: [-0.5, 11.2] },
  { d: 1176, rocks: [[-8.8, 2.7], [8.8, 2.7]] },
];

export const POOLS = [
  // dir: +1 = counter-clockwise seen from above (flings to river-right), -1 = clockwise (flings left)
  { u: -1.0, d: 474, R: 7.2, capture: 4.7, dir: -1 },
  { u: 1.6, d: 879, R: 7.2, capture: 4.7, dir: 1 },
];

function buildRocks() {
  const rng = mulberry32(90210);
  const rocks = [];
  const add = (u, d, r) => {
    rocks.push({ u, d, r, h: r * (0.75 + rng() * 0.6), rot: rng() * Math.PI * 2, kind: Math.floor(rng() * 4) });
  };
  for (const row of ROWS) {
    const hw = halfWidth(row.d);
    if (row.rocks) {
      for (const [u, r] of row.rocks) add(u, row.d + (rng() - 0.5) * 1.5, r);
      continue;
    }
    const [c, w] = row.gap;
    const gl = c - w / 2;
    const gr = c + w / 2;
    // left blocked region [-hw-1, gl]
    let edge = gl;
    while (edge > -hw - 0.6) {
      const r = 1.45 + rng() * 1.25;
      const u = edge - r;
      add(u, row.d + (rng() - 0.5) * 4.5, r);
      edge = u - r - (0.6 + rng() * 2.4);
    }
    edge = gr;
    while (edge < hw + 0.6) {
      const r = 1.45 + rng() * 1.25;
      const u = edge + r;
      add(u, row.d + (rng() - 0.5) * 4.5, r);
      edge = u + r + (0.6 + rng() * 2.4);
    }
  }
  // Pebbles hugging the banks for texture (never in the sailing line).
  for (let d = 120; d < 1170; d += 9 + rng() * 14) {
    if (d > 560 && d < 700) continue;
    const hw = halfWidth(d);
    const side = rng() < 0.5 ? -1 : 1;
    const r = 0.5 + rng() * 0.6;
    add(side * (hw - r * 0.4), d, r);
  }
  // Decorative rocks in the lagoon edges.
  for (let i = 0; i < 6; i++) {
    const d = 1200 + i * 8;
    const side = i % 2 ? -1 : 1;
    const hw = halfWidth(d);
    add(side * (hw - 2 - rng() * 2), d, 0.7 + rng() * 0.8);
  }
  rocks.sort((a, b) => a.d - b.d);
  return rocks;
}

export const ROCKS = buildRocks();

// Indices of rocks whose d lies within [d0, d1].
export function rocksInRange(d0, d1, out) {
  out.length = 0;
  let lo = 0;
  let hi = ROCKS.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (ROCKS[mid].d < d0) lo = mid + 1;
    else hi = mid;
  }
  for (let i = lo; i < ROCKS.length && ROCKS[i].d <= d1; i++) out.push(i);
  return out;
}

// ---------- flow field ----------
const _near = [];
export function flowAt(u, d, out = { u: 0, d: 0 }) {
  const hw = halfWidth(d);
  const s = flowSpeed(d);
  const x = clamp(u / hw, -1.3, 1.3);
  let fd = s * (1 - 0.28 * x * x);
  let fu = 0;
  // banks push back toward the middle
  const bd = hw - Math.abs(u);
  if (bd < 3.2) fu -= Math.sign(u) * (3.2 - bd) * 0.55;
  // rocks: scaled potential flow around a cylinder
  rocksInRange(d - 14, d + 14, _near);
  for (let k = 0; k < _near.length; k++) {
    const rk = ROCKS[_near[k]];
    const ds = d - rk.d;
    const dt = u - rk.u;
    const R = rk.r + 0.4;
    const r2 = ds * ds + dt * dt;
    if (r2 > 9 * R * R || r2 < 1e-4) continue;
    const r4 = r2 * r2;
    const fall = 1 - smooth(4 * R * R, 9 * R * R, r2);
    const R2 = R * R;
    const k2 = 0.45 * s * fall;
    fd += k2 * (-R2 * (ds * ds - dt * dt) / r4);
    fu += k2 * (-2 * R2 * ds * dt / r4);
  }
  // whirlpools
  for (const p of POOLS) {
    const du = u - p.u;
    const dd = d - p.d;
    const r = Math.hypot(du, dd);
    const reach = p.R * 1.5;
    if (r > reach || r < 1e-3) continue;
    const rc = p.R * 0.45;
    const vt = (r < rc ? r / rc : rc / r) * 7.5 * (1 - smooth(p.R, reach, r));
    // tangent for CCW (math orientation in u,d): (-dd, du)/r
    const tu = (-dd / r) * p.dir;
    const td = (du / r) * p.dir;
    const pull = 1.6 * (1 - smooth(p.R * 0.3, reach, r));
    const calm = smooth(p.R * 0.5, reach, r);
    fd = fd * (0.15 + 0.85 * calm) + td * vt - (dd / r) * pull;
    fu = fu * (0.15 + 0.85 * calm) + tu * vt - (du / r) * pull;
  }
  out.u = fu;
  out.d = fd;
  return out;
}

// Precomputed "water travel time" along the river so foam streak patterns advect at the local speed.
export function buildTravelTime(step = 1) {
  const n = Math.ceil((D_MAX - D_MIN) / step) + 1;
  const tau = new Float32Array(n);
  let acc = 0;
  for (let i = 0; i < n; i++) {
    tau[i] = acc;
    const d = D_MIN + i * step;
    acc += step / Math.max(0.6, flowSpeed(d));
  }
  return { tau, step, n };
}
