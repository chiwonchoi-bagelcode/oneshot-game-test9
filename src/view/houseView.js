// The house on screen: follows the raft physics, wobbles, sheds walls in slapstick fashion,
// lets its furniture slide about, loses whole rooms to saws, and in the end may be just a door.
import * as THREE from 'three';
import { buildHouse, buildDoorRaft, buildProp, foamSkirt, Y0 } from './houseModel.js';
import { PARTS } from '../sim/house.js';
import { toWorld, heading, flowSpeed } from '../sim/course.js';
import { poolDepthAt } from './water.js';
import { OwnerView } from './ownerView.js';
import { OWNER_IDS } from '../sim/game.js';
import { clamp, lerp } from '../util/math.js';
import { toon, G, mesh } from './toon.js';

const PROP_LAYOUT = [
  ['table', 'core', 0.0, 0.45],
  ['chair', 'core', -0.85, 0.55],
  ['chair', 'core', 0.85, 0.85],
  ['barrel', 'core', -1.15, 1.05],
  ['pot', 'core', 0.55, -0.2],
  ['kettle', 'core', -0.6, -0.25],
  ['cat', 'core', 0.4, 1.15],
  ['stool', 'L', -2.4, -1.6],
  ['bucket', 'L', -2.1, 0.0],
  ['pot', 'R', 2.3, -1.6],
  ['books', 'R', 2.2, 0.1],
  ['stool', 'C', 0.9, 1.9],
];

const OBSTACLES = [
  { part: 'core', r: [-1.42, 1.42, -2.42, -0.58] },
  { part: 'core', r: [0.86, 1.44, -0.54, -0.06] },
  { part: 'L', r: [-3.97, -3.08, -0.02, 1.14] },
  { part: 'R', r: [3.08, 3.97, -0.02, 1.14] },
  { part: 'L', r: [-2.42, -1.98, 0.7, 1.1] },
  { part: 'R', r: [1.98, 2.42, 0.7, 1.1] },
  { part: 'C', r: [-1.74, -0.23, 2.48, 3.32] },
  { part: 'C', r: [1.03, 1.67, 1.5, 2.0] },
];

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _q = new THREE.Quaternion();
const tmpW = { x: 0, z: 0 };

export class HouseView {
  constructor(scene, fx, audio, ui) {
    this.scene = scene;
    this.fx = fx;
    this.audio = audio;
    this.ui = ui;
    this.build();
  }

  build() {
    const m = buildHouse();
    this.root = m.root;
    this.tilt = m.tilt;
    this.tilt.rotation.order = 'YXZ';
    this.parts = m.parts;
    this.pieces = m.pieces;
    this.extras = m.extras;
    for (const p of this.pieces) p.obj.rotation.order = 'YXZ';
    this.scene.add(this.root);
    this.side = 0;
    this.rollNow = 0;
    this.pitchNow = 0;
    this.present = new Set(['core', 'L', 'R', 'C']);
    this.skirts = {};
    for (const id of ['core', 'L', 'R', 'C']) {
      const s = foamSkirt(PARTS[id].rect);
      this.root.add(s);
      this.skirts[id] = s;
    }
    // props
    this.props = PROP_LAYOUT.map(([kind, part, x, z]) => {
      const p = buildProp(kind);
      this.tilt.add(p.obj);
      p.obj.position.set(x, Y0, z);
      return { kind, obj: p.obj, r: p.r, mass: p.mass, x, z, vx: 0, vz: 0, y: 0, vy: 0, rot: Math.random() * 6, spin: 0, part, alive: true, lean: 0 };
    });
    // owners
    this.views = {};
    for (const id of OWNER_IDS) this.views[id] = new OwnerView(id, this, { fx: this.fx, audio: this.audio });
    // cut lines (절취선) — dashes along each room's seam
    this.cuts = {};
    for (const id of ['L', 'R', 'C']) this.cuts[id] = this.buildCutLine(id);
    // smoke from the chimney
    this.smokeT = 0;
    this.floaterViews = new Map();
    this.debris = [];
    this.doorRaft = null;
    this.mooring = null;
    this.critical = 0;
    this.trembleT = 0;
  }

  buildCutLine(id) {
    const n = 16;
    const dashGeo = G.box(0.16, 0.02, 0.05);
    const white = new THREE.InstancedMesh(dashGeo, new THREE.MeshBasicMaterial({ color: '#ffffff' }), n);
    const black = new THREE.InstancedMesh(G.box(0.2, 0.03, 0.09), new THREE.MeshBasicMaterial({ color: '#2a1a10' }), n);
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const pts = [];
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n;
      let x;
      let z;
      let rotY;
      if (id === 'C') {
        x = lerp(-1.8, 1.8, t);
        z = 1.4;
        rotY = 0;
      } else {
        x = id === 'L' ? -1.6 : 1.6;
        z = lerp(-2.2, 1.2, t);
        rotY = Math.PI / 2;
      }
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rotY);
      m4.compose(new THREE.Vector3(x, Y0 + 0.012, z), q, new THREE.Vector3(1, 1, 1));
      white.setMatrixAt(i, m4);
      black.setMatrixAt(i, m4);
      pts.push(new THREE.Vector3(x, Y0, z));
    }
    white.count = 0;
    black.count = 0;
    this.tilt.add(white);
    this.tilt.add(black);
    // scissors marker: a little red pennant at the start of the line
    const marker = new THREE.Group();
    mesh(G.cyl(0.02, 0.02, 0.5, 5), '#333', marker, [0, 0.25, 0], [0, 0, 0], 0);
    const flag = mesh(G.box(0.24, 0.16, 0.02), '#ff3b3b', marker, [0.12, 0.42, 0], [0, 0, 0], 0.01);
    void flag;
    marker.position.copy(pts[0]);
    marker.visible = false;
    this.tilt.add(marker);
    return { white, black, n, pts, marker, shown: 0 };
  }

  // ---------- frame update ----------
  update(dt, game, ctx) {
    const h = game.house;
    // root transform from the raft
    toWorld(h.u, h.d, tmpW);
    const pool = poolDepthAt(h.u, h.d);
    this.root.position.set(tmpW.x, pool * 0.85, tmpW.z);
    this.root.rotation.y = -(heading(h.d) + h.psi);
    // damaged houses list a little and tremble
    const hp = game.hp;
    this.critical = h.door ? 0 : clamp((0.35 - hp) / 0.35, 0, 1);
    this.trembleT += dt;
    const tremble = this.critical * 0.012 * Math.sin(this.trembleT * 37);
    const sagRoll = (1 - Math.max(0, hp)) * 0.05 * (h.door ? 0 : 1);
    this.rollNow = h.roll + sagRoll + tremble;
    this.pitchNow = h.pitch + (1 - Math.max(0, hp)) * 0.02;
    this.tilt.rotation.x = -this.pitchNow;
    this.tilt.rotation.z = -this.rollNow;
    this.tilt.position.y = h.heave + (h.door ? -0.25 : 0);
    this.side = Math.sign(h.u);
    for (const id in this.skirts) {
      const s = this.skirts[id];
      if (!s.visible) continue;
      const k = 1 + 0.02 * Math.sin(game.time * 5 + id.length);
      s.scale.set(k, 1, k);
      s.material.opacity = 0.75 + 0.2 * Math.sin(game.time * 3.3);
      s.position.y = 0.04 - pool * 0.15;
    }
    // chimney smoke while the house still has one
    this.smokeT -= dt;
    if (this.smokeT <= 0 && this.extras.chimney && this.extras.chimney.parent === this.parts.core && !h.door) {
      this.smokeT = 0.45;
      this.extras.chimney.updateWorldMatrix(true, false);
      _v.set(0, 1.25, 0).applyMatrix4(this.extras.chimney.matrixWorld);
      this.fx.smoke(_v);
    }
    // owners
    for (const id of OWNER_IDS) this.views[id].update(dt, game, ctx);
    this.updateCutLines(game);
    this.updateProps(dt, game);
    this.updatePieces(dt, game);
    this.updateFloaters(dt, game);
    this.updateDebris(dt, game);
    if (this.mooring) this.updateMooring(dt, game);
  }

  updateCutLines(game) {
    for (const id of ['L', 'R', 'C']) {
      const c = this.cuts[id];
      const o = game.owners[id];
      if (o.state !== 'aboard') {
        c.white.count = 0;
        c.black.count = 0;
        c.marker.visible = false;
        continue;
      }
      const show = o.stage >= 3 || o.cut > 0;
      c.white.count = show ? c.n : 0;
      c.marker.visible = show && !o.sawing;
      c.black.count = Math.floor(clamp(o.cut, 0, 1) * c.n);
      if (c.marker.visible) c.marker.rotation.y = Math.sin(game.time * 6) * 0.3;
    }
  }

  // ---------- props sliding on the deck (Moving Out chaos) ----------
  updateProps(dt, game) {
    const h = game.house;
    if (h.door) return;
    const s = Math.sin(h.psi);
    const c = Math.cos(h.psi);
    // house acceleration in house-local axes
    const ax = c * h.accU - s * h.accD;
    const az = -(s * h.accU + c * h.accD);
    const inX = clamp(-ax * 0.5, -22, 22);
    const inZ = clamp(-az * 0.5, -22, 22);
    const om2 = h.omega * h.omega * 0.45;
    const gx = 9.8 * Math.sin(this.rollNow) * 1.1;
    const gz = -9.8 * Math.sin(this.pitchNow) * 1.1;
    const live = this.props.filter((p) => p.alive && p.obj.parent === this.tilt);
    for (const p of live) {
      let fx = gx + inX + p.x * om2;
      let fz = gz + inZ + p.z * om2;
      const sp = Math.hypot(p.vx, p.vz);
      const fmag = Math.hypot(fx, fz);
      const muS = 1.2;
      if (sp < 0.05 && fmag < muS && p.y <= 0) {
        p.vx = 0;
        p.vz = 0;
      } else {
        if (p.y <= 0 && sp > 0) {
          const fr = Math.min(sp / dt, 1.4);
          fx -= (p.vx / sp) * fr;
          fz -= (p.vz / sp) * fr;
        }
        p.vx += fx * dt;
        p.vz += fz * dt;
      }
      p.x += p.vx * dt;
      p.z += p.vz * dt;
      // vertical hop
      if (p.y > 0 || p.vy > 0) {
        p.vy -= 18 * dt;
        p.y += p.vy * dt;
        if (p.y <= 0) {
          p.y = 0;
          if (p.vy < -2.5) this.audio?.clatter(p.kind, Math.min(1, -p.vy / 8));
          p.vy = 0;
          p.spin *= 0.4;
        }
      }
      p.rot += p.spin * dt;
      p.spin *= Math.exp(-dt * 1.5);
      // obstacles
      for (const ob of OBSTACLES) {
        if (!this.present.has(ob.part)) continue;
        this.pushOutRect(p, ob.r);
      }
      for (const id of OWNER_IDS) {
        const v = this.views[id];
        if (game.owners[id].state !== 'aboard') continue;
        this.pushOutCircle(p, v.pos.x, v.pos.y, 0.3, game, id);
      }
      // deck edges
      this.keepOnDeck(p, game);
    }
    // prop-prop
    for (let i = 0; i < live.length; i++) {
      for (let j = i + 1; j < live.length; j++) {
        const a = live[i];
        const b = live[j];
        const dx = b.x - a.x;
        const dz = b.z - a.z;
        const rr = a.r + b.r;
        const d2 = dx * dx + dz * dz;
        if (d2 >= rr * rr || d2 < 1e-6) continue;
        const d = Math.sqrt(d2);
        const nx = dx / d;
        const nz = dz / d;
        const pen = rr - d;
        const ia = 1 / a.mass;
        const ib = 1 / b.mass;
        a.x -= nx * pen * (ia / (ia + ib));
        a.z -= nz * pen * (ia / (ia + ib));
        b.x += nx * pen * (ib / (ia + ib));
        b.z += nz * pen * (ib / (ia + ib));
        const rv = (b.vx - a.vx) * nx + (b.vz - a.vz) * nz;
        if (rv < 0) {
          const j2 = (-1.4 * rv) / (ia + ib);
          a.vx -= j2 * nx * ia;
          a.vz -= j2 * nz * ia;
          b.vx += j2 * nx * ib;
          b.vz += j2 * nz * ib;
          if (-rv > 1.4) {
            this.audio?.clatter(a.kind, Math.min(1, -rv / 5));
            a.spin += (Math.random() - 0.5) * 4;
            b.spin += (Math.random() - 0.5) * 4;
          }
        }
      }
    }
    for (const p of live) {
      p.obj.position.set(p.x, Y0 + p.y, p.z);
      p.obj.rotation.y = p.rot;
      const sp = Math.hypot(p.vx, p.vz);
      p.lean = lerp(p.lean, clamp(sp * 0.12, 0, 0.35), 0.2);
      p.obj.rotation.z = p.lean * Math.sin(p.rot * 3);
      p.obj.rotation.x = p.y > 0 ? p.rot * 0.5 : p.lean * 0.4;
      if (p.kind === 'cat') {
        const tail = p.obj.getObjectByName('tail');
        if (tail) tail.rotation.z = 0.6 + Math.sin(game.time * (sp > 0.5 ? 18 : 3)) * 0.4;
        if (sp > 2.2 && Math.random() < 0.02) this.audio?.meow();
      }
    }
  }

  pushOutRect(p, r) {
    const [x0, x1, z0, z1] = r;
    const cx = clamp(p.x, x0, x1);
    const cz = clamp(p.z, z0, z1);
    const dx = p.x - cx;
    const dz = p.z - cz;
    const d2 = dx * dx + dz * dz;
    if (d2 > p.r * p.r) return;
    if (d2 > 1e-6) {
      const d = Math.sqrt(d2);
      const nx = dx / d;
      const nz = dz / d;
      p.x = cx + nx * p.r;
      p.z = cz + nz * p.r;
      const vn = p.vx * nx + p.vz * nz;
      if (vn < 0) {
        p.vx -= 1.35 * vn * nx;
        p.vz -= 1.35 * vn * nz;
        if (-vn > 1.6) this.audio?.clatter(p.kind, Math.min(1, -vn / 6));
      }
    } else {
      // inside: push out along the shallowest axis
      const opts = [[p.x - x0, -1, 0], [x1 - p.x, 1, 0], [p.z - z0, 0, -1], [z1 - p.z, 0, 1]];
      opts.sort((a, b) => a[0] - b[0]);
      const [d, nx, nz] = opts[0];
      p.x += nx * (d + p.r);
      p.z += nz * (d + p.r);
    }
  }

  pushOutCircle(p, x, z, r, game, ownerId) {
    const dx = p.x - x;
    const dz = p.z - z;
    const rr = p.r + r;
    const d2 = dx * dx + dz * dz;
    if (d2 >= rr * rr || d2 < 1e-6) return;
    const d = Math.sqrt(d2);
    const nx = dx / d;
    const nz = dz / d;
    p.x = x + nx * rr;
    p.z = z + nz * rr;
    const vn = p.vx * nx + p.vz * nz;
    if (vn < 0) {
      p.vx -= 1.5 * vn * nx;
      p.vz -= 1.5 * vn * nz;
      if (-vn > 2.4 && this.ui) this.ui.say(ownerId, 'ouch');
    }
  }

  insideDeck(x, z) {
    for (const id of this.present) {
      const [x0, x1, z0, z1] = PARTS[id].rect;
      if (x >= x0 && x <= x1 && z >= z0 && z <= z1) return id;
    }
    return null;
  }

  keepOnDeck(p, game) {
    const part = this.insideDeck(p.x, p.z);
    if (part) {
      p.part = part;
      return;
    }
    // left the deck: bounce off the rail of the part it came from, unless it is going fast or the rail is gone
    const [x0, x1, z0, z1] = PARTS[p.part]?.rect || PARTS.core.rect;
    const sp = Math.hypot(p.vx, p.vz);
    const railGone = this.railBroken(p.part, p.x, p.z);
    if (this.present.has(p.part) && sp < 5.5 && !railGone) {
      const nx = clamp(p.x, x0 + p.r * 0.5, x1 - p.r * 0.5);
      const nz = clamp(p.z, z0 + p.r * 0.5, z1 - p.r * 0.5);
      if (nx !== p.x) p.vx *= -0.35;
      if (nz !== p.z) p.vz *= -0.35;
      p.x = nx;
      p.z = nz;
      if (sp > 2) this.audio?.clatter(p.kind, Math.min(1, sp / 6));
      return;
    }
    this.throwOverboard(p, game);
  }

  railBroken(part, x, z) {
    for (const pc of this.pieces) {
      if (pc.part !== part || pc.kind !== 'rail') continue;
      if (Math.hypot(pc.center.x - x, pc.center.z - z) < 1.2) return pc.state === 2;
    }
    return part === 'core';
  }

  throwOverboard(p, game, kick = 1) {
    p.alive = false;
    this.scene.attach(p.obj);
    this.addDebris(p.obj, { vx: p.vx * kick, vy: 2.5 + Math.random() * 2, vz: p.vz * kick, local: true, spin: 3, game });
    if (p.kind === 'cat') this.audio?.meow(true);
  }

  // ---------- breaking bits ----------
  onHit(e, game) {
    const strength = e.strength || 0.5;
    const hp = game.hp;
    let n = strength > 0.7 ? 2 : 1;
    if (hp < 0.4) n++;
    if (e.kind === 'bank' && strength < 0.5) n = Math.random() < 0.5 ? 1 : 0;
    const cands = this.pieces.filter((p) => p.state < 2 && this.present.has(p.part) && p.obj.parent);
    const lx = e.lx ?? 0;
    const lz = e.lz ?? 0;
    cands.forEach((p) => {
      const d = Math.hypot(p.center.x - lx, p.center.z - lz);
      p._score = (1 / (0.6 + d)) * p.weight * (0.6 + Math.random() * 0.8) * (p.state === 1 ? 1.6 : 1);
    });
    cands.sort((a, b) => b._score - a._score);
    for (let i = 0; i < Math.min(n, cands.length); i++) this.breakPiece(cands[i], strength, game);
    // furniture jumps
    for (const p of this.props) {
      if (!p.alive || p.obj.parent !== this.tilt) continue;
      p.vy = Math.max(p.vy, (2 + Math.random() * 3) * strength);
      p.y = Math.max(p.y, 0.01);
      p.spin += (Math.random() - 0.5) * 10 * strength;
      p.vx += (Math.random() - 0.5) * 3 * strength;
      p.vz += -2.5 * strength * Math.random();
    }
    // splinters & dust at the contact point
    _v.set(lx, Y0 + 0.4, lz);
    this.tilt.localToWorld(_v);
    this.fx.splinters(_v, 10 + strength * 16);
    this.fx.splash(_v, 1 + strength);
  }

  onScrape(e, game) {
    if (Math.random() < 0.35 * e.intensity) {
      const cands = this.pieces.filter((p) => p.state < 2 && this.present.has(p.part) && (p.kind === 'rail' || p.kind === 'deco' || p.kind === 'wall'));
      if (cands.length) this.breakPiece(cands[Math.floor(Math.random() * cands.length)], 0.4, game);
    }
    for (const sx of [-1, 1]) {
      _v.set(sx * 4.1, Y0, -1 + Math.random() * 2);
      this.tilt.localToWorld(_v);
      this.fx.splinters(_v, 4);
    }
  }

  breakPiece(p, strength, game) {
    if (p.anim) return;
    if (p.state === 0 && (p.kind === 'wall' || p.kind === 'gable' || p.kind === 'roof') && strength < 0.85) {
      // 기우뚱: lean and wobble first
      p.state = 1;
      p.anim = { type: 'lean', t: 0, amp: 0.22 + strength * 0.12 };
      this.audio?.creak(0.9);
      return;
    }
    p.state = 2;
    if (p.kind === 'wall' || p.kind === 'gable') p.anim = { type: 'fall', t: 0, w: 0, a: p.obj.rotation.x };
    else if (p.kind === 'roof') p.anim = { type: 'slide', t: 0 };
    else p.anim = { type: 'fly', t: 0 };
    this.audio?.crack(strength);
    void game;
  }

  updatePieces(dt, game) {
    for (const p of this.pieces) {
      const a = p.anim;
      if (!a) continue;
      a.t += dt;
      const o = p.obj;
      if (a.type === 'lean') {
        const target = p.fallDir * a.amp;
        o.rotation.x = p.baseRot.x + target + Math.sin(a.t * 9) * 0.18 * Math.exp(-a.t * 2.2);
        if (a.t > 2) p.anim = null;
      } else if (a.type === 'fall') {
        // gravity-driven topple about the base edge, with a slapstick bounce on landing
        let ang = Math.abs(o.rotation.x - p.baseRot.x);
        a.w += (7 * Math.sin(ang) + 1.4) * dt;
        ang += a.w * dt;
        if (ang >= Math.PI / 2) {
          ang = Math.PI / 2;
          if (!a.landed) {
            this.onWallLanded(p, game);
            a.landed = true;
            a.w = -a.w * 0.22;
          } else a.w = Math.min(0, a.w) * 0.2;
        }
        if (ang < 0) ang = 0;
        o.rotation.x = p.baseRot.x + p.fallDir * ang;
        if (a.landed && a.t > 1.6) {
          p.anim = null;
          o.rotation.x = p.baseRot.x + p.fallDir * Math.PI / 2;
          if (p.kind === 'gable' || !this.wallStaysOnDeck(p)) this.dropOverboard(p, game, { vy: 0.5, out: 1.5 });
        }
      } else if (a.type === 'slide') {
        o.rotation.x += p.fallDir * dt * 1.4;
        o.position.y -= dt * (1 + a.t * 4);
        o.position.z += p.fallDir * dt * (1.5 + a.t * 3);
        if (a.t > 0.45) {
          p.anim = null;
          this.dropOverboard(p, game, { vy: 1, out: 3 });
        }
      } else if (a.type === 'fly') {
        p.anim = null;
        this.dropOverboard(p, game, { vy: 3 + Math.random() * 2, out: 3.5 });
      }
    }
  }

  wallStaysOnDeck(p) {
    // inward-falling room walls and the cabin back wall lie on the floor; others tumble into the river
    return p.inward || (p.kind === 'wall' && p.center.z > -1 && p.fallDir > 0 && Math.abs(p.center.x) < 1);
  }

  onWallLanded(p, game) {
    this.audio?.thud(0.8);
    _v.copy(p.center);
    _v.y = Y0 + 0.2;
    this.tilt.localToWorld(_v);
    this.fx.dust(_v, 1.2);
    this.ui?.popup('쿵!', _v, 'thud');
    // Keaton: the window lands neatly around whoever is standing there
    if (p.keaton) {
      const v = this.views[p.keaton];
      const o = game.owners[p.keaton];
      if (o.state === 'aboard' && !o.sawing) {
        const spot = Math.hypot(v.pos.x - v.def.x, v.pos.y - v.def.z);
        if (spot < 0.45) {
          v.onKeaton();
          this.ui?.say(p.keaton, '……');
          this.ui?.popup('휴…', _v, 'small');
          game.stats.keaton = (game.stats.keaton || 0) + 1;
        } else v.onBonk();
      }
    } else if (p.kind === 'wall') {
      // cabin side walls fall onto the side rooms
      for (const id of ['L', 'R']) {
        const v = this.views[id];
        if (game.owners[id].state !== 'aboard') continue;
        if (Math.sign(v.pos.x) === Math.sign(p.center.x) && Math.abs(p.center.x) > 1 && Math.abs(v.pos.x) < 3.6 && v.pos.y < -0.4) v.onBonk();
      }
    }
  }

  dropOverboard(p, game, opts = {}) {
    const o = p.obj;
    if (!o.parent) return;
    this.scene.attach(o);
    _v.copy(p.center);
    this.tilt.localToWorld(_v);
    _v2.copy(this.root.position);
    const out = new THREE.Vector3().subVectors(_v, _v2).setY(0).normalize().multiplyScalar(opts.out ?? 2);
    this.addDebris(o, { vx: out.x, vy: opts.vy ?? 1.5, vz: out.z, spin: 2, game });
    p.state = 2;
  }

  // world-space flotsam drifting off downstream
  addDebris(obj, { vx = 0, vy = 0, vz = 0, spin = 1, local = false, game } = {}) {
    if (local) {
      // velocities given in house-local axes
      _v.set(vx, 0, vz).applyQuaternion(this.tilt.getWorldQuaternion(_q));
      vx = _v.x;
      vz = _v.z;
    }
    const h = game?.house;
    this.debris.push({ obj, vx, vy, vz, sx: (Math.random() - 0.5) * spin, sz: (Math.random() - 0.5) * spin, t: 0, floating: false, d: h ? h.d : 0 });
  }

  updateDebris(dt, game) {
    const h = game.house;
    for (let i = this.debris.length - 1; i >= 0; i--) {
      const b = this.debris[i];
      b.t += dt;
      const o = b.obj;
      if (!b.floating) {
        b.vy -= 14 * dt;
        o.position.x += b.vx * dt;
        o.position.y += b.vy * dt;
        o.position.z += b.vz * dt;
        o.rotation.x += b.sx * dt;
        o.rotation.z += b.sz * dt;
        if (o.position.y < 0.05 && b.vy < 0) {
          b.floating = true;
          this.fx.splash(o.position, 0.8);
          this.audio?.plop(0.6);
        }
      } else {
        // drift with the current, slower than the house so it falls behind
        const th = heading(b.d);
        const sp = flowSpeed(b.d) * 0.55;
        b.d += sp * dt;
        b.vx *= Math.exp(-dt * 1.5);
        b.vz *= Math.exp(-dt * 1.5);
        o.position.x += (Math.sin(th) * sp + b.vx) * dt;
        o.position.z += (-Math.cos(th) * sp + b.vz) * dt;
        o.position.y = lerp(o.position.y, -0.15 + Math.sin(b.t * 2.5 + i) * 0.08, 0.1);
        o.rotation.x = lerp(o.rotation.x, Math.round(o.rotation.x / Math.PI) * Math.PI + Math.sin(b.t * 2) * 0.1, 0.05);
        o.rotation.y += b.sx * 0.2 * dt;
      }
      if (b.t > 22 || (h && b.d < h.d - 80)) {
        o.parent?.remove(o);
        this.debris.splice(i, 1);
      }
    }
  }

  // ---------- rooms sawn off ----------
  onDetach(e, game) {
    const id = e.id;
    const part = e.part;
    const g = this.parts[part];
    this.present.delete(part);
    this.skirts[part].visible = false;
    // props riding on that room go with it
    const [x0, x1, z0, z1] = PARTS[part].rect;
    for (const p of this.props) {
      if (p.alive && p.obj.parent === this.tilt && p.x >= x0 - 0.05 && p.x <= x1 + 0.05 && p.z >= z0 - 0.05 && p.z <= z1 + 0.05) {
        g.add(p.obj);
        p.alive = false;
      }
    }
    // pieces of that part leave too
    for (const pc of this.pieces) if (pc.part === part) pc.anim = null;
    const cx = (x0 + x1) / 2;
    const cz = (z0 + z1) / 2;
    const container = new THREE.Group();
    container.rotation.order = 'YXZ';
    this.scene.add(container);
    // place the container at the part centre, matching the current world transform
    this.root.updateWorldMatrix(true, true);
    _v.set(cx, 0, cz);
    this.tilt.localToWorld(_v);
    container.position.copy(_v);
    container.rotation.y = this.root.rotation.y;
    container.updateWorldMatrix(true, false);
    container.attach(g);
    const sk = foamSkirt([x0 - cx, x1 - cx, z0 - cz, z1 - cz]);
    container.add(sk);
    // the cut lines go too
    const cut = this.cuts[id];
    cut.white.count = 0;
    cut.black.count = 0;
    cut.marker.visible = false;
    const fv = { container, inner: g, kind: 'room', id, t: 0, drop: 0, skirt: sk, lx: cx, lz: cz };
    this.floaterViews.set(`room-${id}`, fv);
    this.views[id].forced = null;
    this.fx.splash(container.position, 2.2);
    this.fx.ring(container.position, 3);
  }

  updateFloaters(dt, game) {
    for (const f of game.floaters) {
      const key = f.kind === 'room' ? `room-${f.id}` : `swim-${f.id}`;
      const fv = this.floaterViews.get(key);
      if (!fv || fv.parked) continue;
      fv.t += dt;
      toWorld(f.u, f.d, tmpW);
      const pool = poolDepthAt(f.u, f.d);
      // the Looney Tunes drop: plunge, then bob back up
      let drop = 0;
      if (fv.kind === 'room') drop = fv.t < 0.5 ? -Math.sin((fv.t / 0.5) * Math.PI) * 0.55 : Math.sin(fv.t * 2.2) * 0.06;
      else drop = -0.35 + Math.sin(fv.t * 2.6) * 0.08;
      fv.container.position.set(tmpW.x, pool + drop, tmpW.z);
      fv.container.rotation.y = -(heading(f.d) + f.psi);
      fv.container.rotation.z = Math.sin(fv.t * 1.7) * 0.05;
      fv.container.rotation.x = Math.sin(fv.t * 1.3) * 0.04;
      fv.container.visible = f.visible !== false || fv.keep;
    }
  }

  // ---------- the house is smashed: only the front door survives ----------
  onShatter(e, game) {
    const rider = e.rider;
    // everything flies apart
    for (const id of ['core', 'L', 'R', 'C']) {
      const g = this.parts[id];
      if (!g.parent || g.parent !== this.tilt) continue;
      this.skirts[id].visible = false;
      const pieces = [...g.children];
      for (const c of pieces) {
        if (c === this.views[rider].root) continue;
        if (OWNER_IDS.some((oid) => this.views[oid].root === c)) continue;
        if (c === this.extras.door) continue;
        this.scene.attach(c);
        const dir = new THREE.Vector3().subVectors(c.getWorldPosition(_v), this.root.position).setY(0);
        if (dir.lengthSq() < 0.01) dir.set(Math.random() - 0.5, 0, Math.random() - 0.5);
        dir.normalize().multiplyScalar(3 + Math.random() * 4);
        this.addDebris(c, { vx: dir.x, vy: 3 + Math.random() * 5, vz: dir.z, spin: 6, game });
      }
      this.present.delete(id);
    }
    for (const p of this.props) {
      if (p.alive && p.obj.parent === this.tilt) {
        p.vx = (Math.random() - 0.5) * 8;
        p.vz = (Math.random() - 0.5) * 8;
        this.throwOverboard(p, game, 1);
      }
    }
    for (const id of ['L', 'R', 'C']) {
      const c = this.cuts[id];
      c.white.count = 0;
      c.black.count = 0;
      c.marker.visible = false;
    }
    if (this.extras.door) this.extras.door.parent?.remove(this.extras.door);
    // the door raft
    const raft = buildDoorRaft();
    this.tilt.add(raft);
    this.doorRaft = raft;
    const sk = foamSkirt(PARTS.door.rect, 0.3);
    this.root.add(sk);
    this.skirts.door = sk;
    const rv = this.views[rider];
    raft.attach(rv.root);
    rv.root.position.set(0, 0.25, 0.25);
    rv.def = { ...rv.def, x: 0, z: 0.25 };
    rv.pos.set(0, 0.25);
    rv.ch.root.scale.setScalar(0.9);
    // the others end up clinging to flotsam
    for (const id of e.overboard) {
      const v = this.views[id];
      const container = new THREE.Group();
      container.rotation.order = 'YXZ';
      this.scene.add(container);
      container.position.copy(v.root.getWorldPosition(_v));
      const plank = mesh(G.box(1.6, 0.14, 0.7), '#c89a5e', container, [0, 0.0, 0], [0, 0, 0], 0.03);
      void plank;
      container.attach(v.root);
      v.root.position.set(0, -0.2, 0);
      v.root.rotation.set(0, 0, 0);
      v.pos.set(0, 0);
      this.floaterViews.set(`swim-${id}`, { container, kind: 'swim', id, t: 0 });
    }
    this.fx.burst(this.root.position, 3);
    this.fx.splash(this.root.position, 3);
  }

  // ---------- mooring rope at the start ----------
  attachMooring(bollardWorld) {
    const geo = G.cyl(0.03, 0.03, 1, 5);
    geo.translate(0, 0.5, 0);
    const rope = new THREE.Mesh(geo, toon('#d9c28a'));
    this.scene.add(rope);
    this.mooring = { rope, anchor: bollardWorld.clone(), snapped: false, t: 0 };
  }

  snapMooring() {
    if (!this.mooring || this.mooring.snapped) return;
    this.mooring.snapped = true;
    this.audio?.snap();
    this.ui?.popup('툭!', this.mooring.anchor, 'small');
  }

  updateMooring(dt, game) {
    const m = this.mooring;
    _v.set(-3.9, Y0 - 0.1, -2.0);
    this.tilt.localToWorld(_v);
    if (m.snapped) {
      m.t += dt;
      m.rope.scale.y = Math.max(0.01, m.rope.scale.y * Math.exp(-dt * 6));
      if (m.t > 1) {
        m.rope.parent?.remove(m.rope);
        this.mooring = null;
      }
      return;
    }
    const d = _v2.subVectors(_v, m.anchor);
    const len = d.length();
    m.rope.position.copy(m.anchor);
    m.rope.scale.set(1, len, 1);
    m.rope.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    void game;
  }

  // world position helpers for UI
  ownerScreenAnchor(id, out) {
    return this.views[id].chestWorld(out);
  }

  toPartLocal(room, p, out) {
    return out.copy(p);
  }

  dispose() {
    this.root.parent?.remove(this.root);
    for (const fv of this.floaterViews.values()) fv.container.parent?.remove(fv.container);
    for (const b of this.debris) b.obj.parent?.remove(b.obj);
    this.mooring?.rope.parent?.remove(this.mooring.rope);
  }
}

