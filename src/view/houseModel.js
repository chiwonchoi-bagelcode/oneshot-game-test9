// Geometry for the jointly-owned houseboat. House-local frame: x right, y up (water = 0), z toward the stern.
import * as THREE from 'three';
import { toon, G, mesh, StaticBatch, trs, bakeGroup } from './toon.js';
import { PARTS } from '../sim/house.js';

export const Y0 = 0.62; // deck top

export const PALETTE = {
  plankA: '#cf9c60',
  plankB: '#c08b52',
  slab: '#8d5f36',
  log: '#7f522c',
  cream: '#f6ead0',
  post: '#86542b',
  roof: '#d6573b',
  roofDark: '#b8442d',
  brick: '#a8452f',
  door: '#2f8f83',
  shutter: '#3d6fb6',
  glass: '#a9dcf5',
  L: { main: '#e8483b', rug: '#e05544', wall: '#f7d6c6', dark: '#a8291f' },
  R: { main: '#3a7ee6', rug: '#4a86e0', wall: '#d3e5f8', dark: '#1f4fa0' },
  C: { main: '#f2b62c', rug: '#9ccc3a', wall: '#eef3c9', dark: '#6f9a1c' },
};

// A piece that can wobble, fall off or be thrown overboard when the house takes a hit.
export class Piece {
  constructor(obj, part, kind, opts = {}) {
    this.obj = obj;
    this.part = part;
    this.kind = kind; // wall | roof | chimney | rail | deco | gable
    this.state = 0; // 0 intact, 1 leaning, 2 fallen/gone
    this.fallDir = opts.fallDir || 1; // rotation sign about local x
    this.inward = !!opts.inward;
    this.center = opts.center || new THREE.Vector3().copy(obj.position);
    this.weight = opts.weight ?? 1;
    this.anim = null;
    this.baseRot = obj.rotation.clone();
    this.keaton = opts.keaton || null; // owner id whose window lands around them
  }
}

function wallWithHole(w, h, t, hole, color, opts = {}) {
  // Built along local x, from y=0 up; origin at bottom centre.
  const g = new THREE.Group();
  const add = (x0, x1, y0, y1) => {
    if (x1 - x0 < 0.01 || y1 - y0 < 0.01) return;
    mesh(G.box(x1 - x0, y1 - y0, t), color, g, [(x0 + x1) / 2, (y0 + y1) / 2, 0], [0, 0, 0], 0.025);
  };
  const x0 = -w / 2;
  const x1 = w / 2;
  if (!hole) add(x0, x1, 0, h);
  else {
    add(x0, hole.x0, 0, h);
    add(hole.x1, x1, 0, h);
    add(hole.x0, hole.x1, 0, hole.y0);
    add(hole.x0, hole.x1, hole.y1, h);
    const fc = opts.frame || PALETTE.shutter;
    const ft = 0.07;
    const hw = hole.x1 - hole.x0;
    const hh = hole.y1 - hole.y0;
    const cx = (hole.x0 + hole.x1) / 2;
    const cy = (hole.y0 + hole.y1) / 2;
    const fz = t / 2 + 0.02;
    for (const s of [-1, 1]) {
      mesh(G.box(hw + ft * 2, ft, 0.06), fc, g, [cx, cy + s * (hh / 2 + ft / 2), fz], [0, 0, 0], 0.015);
      mesh(G.box(ft, hh, 0.06), fc, g, [cx + s * (hw / 2 + ft / 2), cy, fz], [0, 0, 0], 0.015);
    }
    if (opts.door) {
      // nothing in the hole: the door is a separate piece
    } else if (opts.shutters) {
      for (const s of [-1, 1]) {
        const sh = mesh(G.box(hw / 2, hh, 0.05), fc, g, [cx + s * (hw * 0.75 + ft), cy, fz + 0.02], [0, 0, 0], 0.015);
        for (let k = -1; k <= 1; k++) mesh(G.box(hw / 2 - 0.06, 0.025, 0.02), '#2c5592', sh, [0, k * hh * 0.25, 0.03], [0, 0, 0], 0);
      }
    }
  }
  // posts at the ends + top trim
  if (opts.posts !== false) {
    for (const s of [-1, 1]) mesh(G.box(0.14, h + 0.02, t + 0.06), PALETTE.post, g, [s * (w / 2 - 0.07), h / 2, 0], [0, 0, 0], 0.025);
    mesh(G.box(w, 0.1, t + 0.06), PALETTE.post, g, [0, h - 0.05, 0], [0, 0, 0], 0.02);
  }
  return g;
}

function railing(len, n, color = PALETTE.post) {
  const g = new THREE.Group();
  const h = 0.55;
  for (let i = 0; i < n; i++) {
    const x = -len / 2 + (len * (i + 0.5)) / n;
    mesh(G.box(0.08, h, 0.08), color, g, [x, h / 2, 0], [0, 0, 0], 0.02);
  }
  mesh(G.box(len, 0.08, 0.12), color, g, [0, h, 0], [0, 0, 0], 0.02);
  return g;
}

function plankFloor(batch, rect, seed) {
  const [x0, x1, z0, z1] = rect;
  batch.add(G.box(x1 - x0, 0.2, z1 - z0), PALETTE.slab, trs((x0 + x1) / 2, Y0 - 0.12, (z0 + z1) / 2), 0.03);
  const n = Math.max(2, Math.round((z1 - z0) / 0.42));
  const pw = (z1 - z0) / n;
  for (let i = 0; i < n; i++) {
    const z = z0 + pw * (i + 0.5);
    const c = (i + seed) % 2 ? PALETTE.plankA : PALETTE.plankB;
    batch.add(G.box(x1 - x0 - 0.04, 0.05, pw - 0.035), c, trs((x0 + x1) / 2, Y0 - 0.02, z), 0);
  }
  // floats under the deck
  const logs = Math.max(2, Math.round((z1 - z0) / 0.9));
  for (let i = 0; i < logs; i++) {
    const z = z0 + ((z1 - z0) * (i + 0.5)) / logs;
    batch.add(G.cyl(0.26, 0.26, x1 - x0 - 0.1, 10), PALETTE.log, trs((x0 + x1) / 2, 0.24, z, 0, 0, Math.PI / 2), 0.03);
  }
}

function rugArrow(batch, cx, cz, w, d, color, kind) {
  batch.add(G.box(w, 0.025, d), color, trs(cx, Y0 + 0.012, cz), 0);
  batch.add(G.box(w - 0.16, 0.03, d - 0.16), '#ffffff', trs(cx, Y0 + 0.016, cz, 0, 0, 0, 1, 1, 1), 0);
  batch.add(G.box(w - 0.26, 0.035, d - 0.26), color, trs(cx, Y0 + 0.02, cz), 0);
  const white = '#fff8ea';
  if (kind === 'L' || kind === 'R') {
    const s = kind === 'L' ? -1 : 1;
    batch.add(G.box(w * 0.42, 0.04, 0.16), white, trs(cx - s * 0.05, Y0 + 0.03, cz), 0);
    const head = G.cone(0.24, 0.34, 3);
    batch.add(head, white, trs(cx + s * w * 0.24, Y0 + 0.03, cz, 0, 0, -s * Math.PI / 2, 1, 1, 0.12), 0);
  } else {
    // bullseye: the centre-keeper
    batch.add(G.cyl(0.42, 0.42, 0.04, 20), white, trs(cx, Y0 + 0.028, cz), 0);
    batch.add(G.cyl(0.3, 0.3, 0.045, 20), color, trs(cx, Y0 + 0.03, cz), 0);
    batch.add(G.cyl(0.16, 0.16, 0.05, 16), white, trs(cx, Y0 + 0.033, cz), 0);
  }
}

function bed(batch, x0, x1, z0, z1, blanket, horizontal) {
  const cx = (x0 + x1) / 2;
  const cz = (z0 + z1) / 2;
  const w = x1 - x0;
  const d = z1 - z0;
  batch.add(G.box(w, 0.28, d), '#9c6a3c', trs(cx, Y0 + 0.14, cz), 0.03);
  batch.add(G.box(w - 0.08, 0.14, d - 0.08), '#fdfaf2', trs(cx, Y0 + 0.34, cz), 0.02);
  if (horizontal) {
    batch.add(G.box(w * 0.68, 0.08, d - 0.04), blanket, trs(cx + w * 0.15, Y0 + 0.43, cz), 0.02);
    batch.add(G.box(0.26, 0.12, d * 0.6), '#ffffff', trs(x0 + 0.2, Y0 + 0.46, cz), 0.02);
    batch.add(G.box(0.1, 0.62, d), '#9c6a3c', trs(x0 + 0.05, Y0 + 0.31, cz), 0.02);
  } else {
    batch.add(G.box(w - 0.04, 0.08, d * 0.68), blanket, trs(cx, Y0 + 0.43, cz + d * 0.15), 0.02);
    batch.add(G.box(w * 0.6, 0.12, 0.26), '#ffffff', trs(cx, Y0 + 0.46, z0 + 0.2), 0.02);
    batch.add(G.box(w, 0.62, 0.1), '#9c6a3c', trs(cx, Y0 + 0.31, z0 + 0.05), 0.02);
  }
}

export function flowerPot(kind) {
  const g = new THREE.Group();
  mesh(G.cyl(0.2, 0.15, 0.32, 12), '#c8643a', g, [0, 0.16, 0], [0, 0, 0], 0.02);
  mesh(G.cyl(0.21, 0.21, 0.06, 12), '#a94f2c', g, [0, 0.31, 0], [0, 0, 0], 0.015);
  if (kind === 'cactus') {
    mesh(G.cap(0.11, 0.35, 4), '#4f9e3a', g, [0, 0.58, 0], [0, 0, 0], 0.02);
    mesh(G.cap(0.06, 0.12, 4), '#4f9e3a', g, [0.13, 0.62, 0], [0, 0, -0.9], 0.015);
    mesh(G.sph(0.06), '#ff6fa8', g, [0, 0.85, 0], [0, 0, 0], 0.015);
  } else {
    mesh(G.cyl(0.02, 0.02, 0.5, 5), '#3f8a2c', g, [0, 0.55, 0], [0, 0, 0], 0);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      mesh(G.sph(0.09, 8, 6), '#56a83e', g, [Math.cos(a) * 0.12, 0.45 + i * 0.04, Math.sin(a) * 0.12], [0, 0, 0], 0.015).scale.set(1, 0.5, 1.6);
    }
    const petal = kind === 'sunflower' ? '#ffd23a' : '#ff5a5a';
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      mesh(G.sph(0.06, 8, 6), petal, g, [Math.cos(a) * 0.09, 0.82, Math.sin(a) * 0.09 + 0.02], [0, 0, 0], 0.012);
    }
    mesh(G.sph(0.06, 8, 6), kind === 'sunflower' ? '#7a4a1c' : '#ffe27a', g, [0, 0.82, 0.04], [0, 0, 0], 0.012);
  }
  return g;
}

// ---------- props that slide around the deck ----------
export function buildProp(kind) {
  const g = new THREE.Group();
  let r = 0.25;
  let mass = 1;
  switch (kind) {
    case 'chair': {
      mesh(G.box(0.46, 0.06, 0.46), '#c98a4a', g, [0, 0.45, 0]);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) mesh(G.box(0.06, 0.45, 0.06), '#8d5a2b', g, [sx * 0.19, 0.22, sz * 0.19], [0, 0, 0], 0.015);
      mesh(G.box(0.46, 0.5, 0.06), '#c98a4a', g, [0, 0.72, -0.2]);
      r = 0.28;
      mass = 1;
      break;
    }
    case 'table': {
      mesh(G.cyl(0.5, 0.5, 0.07, 20), '#d9a066', g, [0, 0.72, 0]);
      mesh(G.cyl(0.07, 0.1, 0.7, 8), '#8d5a2b', g, [0, 0.36, 0]);
      mesh(G.cyl(0.3, 0.32, 0.05, 12), '#8d5a2b', g, [0, 0.03, 0]);
      // a teapot that rides along
      mesh(G.sph(0.11, 10, 8), '#ffffff', g, [0.15, 0.85, 0.05], [0, 0, 0], 0.015);
      mesh(G.cyl(0.08, 0.06, 0.04, 8), '#3a7ee6', g, [-0.18, 0.78, -0.1], [0, 0, 0], 0.012);
      r = 0.5;
      mass = 3;
      break;
    }
    case 'pot': {
      mesh(G.cyl(0.2, 0.18, 0.22, 14), '#c9ccd4', g, [0, 0.11, 0]);
      mesh(G.cyl(0.21, 0.21, 0.03, 14), '#aeb3bd', g, [0, 0.24, 0], [0, 0, 0], 0.015);
      mesh(G.sph(0.035, 8, 6), '#3b3b3b', g, [0, 0.28, 0], [0, 0, 0], 0.01);
      for (const s of [-1, 1]) mesh(G.box(0.1, 0.03, 0.05), '#3b3b3b', g, [s * 0.25, 0.18, 0], [0, 0, 0], 0.01);
      r = 0.22;
      mass = 0.6;
      break;
    }
    case 'kettle': {
      mesh(G.sph(0.16, 12, 10), '#e0483b', g, [0, 0.15, 0]).scale.set(1, 0.85, 1);
      mesh(G.cone(0.05, 0.22, 8), '#e0483b', g, [0.18, 0.2, 0], [0, 0, -1.0], 0.012);
      mesh(G.torus(0.1, 0.018, 6, 12, Math.PI), '#3b3b3b', g, [0, 0.27, 0], [0, 0, 0], 0);
      r = 0.17;
      mass = 0.4;
      break;
    }
    case 'barrel': {
      mesh(G.cyl(0.3, 0.3, 0.75, 14), '#b07a45', g, [0, 0.375, 0]);
      for (const y of [0.15, 0.6]) mesh(G.torus(0.305, 0.025, 6, 18), '#5b5b5b', g, [0, y, 0], [Math.PI / 2, 0, 0], 0);
      r = 0.31;
      mass = 2.2;
      break;
    }
    case 'bucket': {
      mesh(G.cyl(0.18, 0.14, 0.3, 12), '#8fa7c0', g, [0, 0.15, 0]);
      mesh(G.torus(0.17, 0.012, 5, 12, Math.PI), '#5b5b5b', g, [0, 0.3, 0], [0, 0, 0], 0);
      r = 0.18;
      mass = 0.5;
      break;
    }
    case 'stool': {
      mesh(G.cyl(0.2, 0.2, 0.06, 12), '#d39b5c', g, [0, 0.42, 0]);
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2;
        mesh(G.box(0.05, 0.42, 0.05), '#8d5a2b', g, [Math.cos(a) * 0.12, 0.21, Math.sin(a) * 0.12], [0, 0, 0], 0.012);
      }
      r = 0.2;
      mass = 0.6;
      break;
    }
    case 'books': {
      const cols = ['#e8483b', '#3a7ee6', '#f2b62c'];
      cols.forEach((c, i) => mesh(G.box(0.34, 0.08, 0.26), c, g, [0.02 * i, 0.04 + i * 0.08, 0], [0, i * 0.3, 0], 0.012));
      r = 0.2;
      mass = 0.4;
      break;
    }
    case 'cat': {
      const body = mesh(G.cap(0.12, 0.2, 4), '#f0953a', g, [0, 0.16, 0], [0, 0, Math.PI / 2]);
      body.name = 'body';
      const head = mesh(G.sph(0.12, 12, 10), '#f0953a', g, [0.22, 0.28, 0]);
      head.name = 'head';
      for (const s of [-1, 1]) mesh(G.cone(0.05, 0.1, 4), '#f0953a', head, [0.0, 0.12, s * 0.06], [0, 0, 0], 0.01);
      for (const s of [-1, 1]) mesh(G.sph(0.022, 6, 5), '#1b1410', head, [0.1, 0.03, s * 0.05], [0, 0, 0], 0);
      const tail = mesh(G.cyl(0.03, 0.025, 0.32, 6), '#f0953a', g, [-0.26, 0.3, 0], [0, 0, 0.6], 0.012);
      tail.name = 'tail';
      r = 0.2;
      mass = 0.5;
      break;
    }
    default:
      break;
  }
  for (const c of g.children) if (c.name) c.userData.keep = true;
  bakeGroup(g);
  return { obj: g, r, mass };
}

// ---------- the whole house ----------
export function buildHouse() {
  const root = new THREE.Group(); // yaw + position (at water level)
  const tilt = new THREE.Group(); // roll/pitch/heave
  root.add(tilt);
  const parts = {};
  const pieces = [];
  const extras = {};
  for (const id of ['core', 'L', 'R', 'C']) {
    const g = new THREE.Group();
    g.name = id;
    tilt.add(g);
    parts[id] = g;
  }

  // ----- floors -----
  for (const id of ['core', 'L', 'R', 'C']) {
    const b = new StaticBatch();
    plankFloor(b, PARTS[id].rect, id === 'core' ? 0 : 1);
    parts[id].add(b.build());
  }

  // ----- core: cabin + kitchen deck -----
  const core = parts.core;
  const cab = { x0: -1.4, x1: 1.4, z0: -2.4, z1: -0.6, h: 2.1 };
  const cw = cab.x1 - cab.x0;
  const cd = cab.z1 - cab.z0;
  // front wall (faces downstream) — round window, falls forward into the river
  {
    const w = wallWithHole(cw, cab.h, 0.12, { x0: -0.35, x1: 0.35, y0: 0.95, y1: 1.6 }, PALETTE.cream, { shutters: true });
    w.position.set(0, Y0, cab.z0 + 0.06);
    core.add(w);
    pieces.push(new Piece(w, 'core', 'wall', { fallDir: -1, center: new THREE.Vector3(0, Y0 + 1, cab.z0), weight: 1.4 }));
  }
  // back wall with the front door (faces the kitchen deck/camera)
  {
    const w = wallWithHole(cw, cab.h, 0.12, { x0: -0.48, x1: 0.42, y0: 0, y1: 1.72 }, PALETTE.cream, { door: true, frame: '#7a4a22' });
    // a window with a flower box on the right of the door
    w.position.set(0, Y0, cab.z1 - 0.06);
    core.add(w);
    const win = new THREE.Group();
    mesh(G.box(0.55, 0.5, 0.06), PALETTE.glass, win, [0, 0, 0], [0, 0, 0], 0.02);
    mesh(G.box(0.62, 0.06, 0.08), PALETTE.shutter, win, [0, 0.28, 0.02], [0, 0, 0], 0.012);
    mesh(G.box(0.62, 0.06, 0.08), PALETTE.shutter, win, [0, -0.28, 0.02], [0, 0, 0], 0.012);
    mesh(G.box(0.62, 0.16, 0.18), '#8d5a2b', win, [0, -0.38, 0.1], [0, 0, 0], 0.015);
    for (let i = 0; i < 4; i++) mesh(G.sph(0.06, 8, 6), i % 2 ? '#ff5a5a' : '#ffd23a', win, [-0.21 + i * 0.14, -0.27, 0.12], [0, 0, 0], 0.01);
    win.position.set(0.88, 1.25, 0.06);
    w.add(win);
    pieces.push(new Piece(w, 'core', 'wall', { fallDir: 1, center: new THREE.Vector3(0, Y0 + 1, cab.z1), weight: 0.7 }));
    // the door itself (문짝) — hangs in the opening; it is what survives a total wreck
    const door = new THREE.Group();
    const dw = 0.88;
    const dh = 1.7;
    mesh(G.box(dw, dh, 0.08), PALETTE.door, door, [dw / 2, dh / 2, 0], [0, 0, 0], 0.025);
    for (const y of [0.4, 1.25]) mesh(G.box(dw - 0.18, 0.04, 0.03), '#23706a', door, [dw / 2, y, 0.05], [0, 0, 0], 0);
    mesh(G.box(0.3, 0.3, 0.04), PALETTE.glass, door, [dw / 2, 1.3, 0.05], [0, 0, 0], 0.012);
    mesh(G.sph(0.05, 8, 6), '#f2c53d', door, [dw - 0.12, 0.85, 0.07], [0, 0, 0], 0.01);
    door.position.set(-0.47, Y0, cab.z1 - 0.02);
    core.add(door);
    extras.door = door;
  }
  // side walls
  for (const s of [-1, 1]) {
    const w = wallWithHole(cd, cab.h, 0.12, { x0: -0.3, x1: 0.3, y0: 0.95, y1: 1.5 }, PALETTE.cream, { shutters: false, frame: PALETTE.shutter });
    w.rotation.y = s * Math.PI / 2;
    w.position.set(s * (cab.x1 - 0.06), Y0, (cab.z0 + cab.z1) / 2);
    core.add(w);
    // a pane of glass in the window
    mesh(G.box(0.6, 0.55, 0.03), PALETTE.glass, w, [0, 1.22, 0], [0, 0, 0], 0);
    pieces.push(new Piece(w, 'core', 'wall', { fallDir: 1, center: new THREE.Vector3(s * cab.x1, Y0 + 1, -1.5), weight: 1 }));
  }
  // cabin floor inside (dark) so a missing wall shows an interior
  mesh(G.box(cw - 0.2, 0.03, cd - 0.2), '#a36f3f', core, [0, Y0 + 0.01, (cab.z0 + cab.z1) / 2], [0, 0, 0], 0);
  // interior: a little cupboard and a portrait of the three owners arguing
  mesh(G.box(0.9, 1.1, 0.4), '#b07a45', core, [-0.7, Y0 + 0.55, cab.z0 + 0.35]);
  mesh(G.box(0.6, 0.45, 0.04), '#f7e3b0', core, [0.6, Y0 + 1.4, cab.z0 + 0.15], [0, 0, 0], 0.02);
  // roof slopes
  const ridgeY = Y0 + cab.h + 1.0;
  const run = cd / 2 + 0.32;
  const rise = 1.0;
  const ang = Math.atan2(rise, run);
  const slopeLen = Math.hypot(run, rise) + 0.05;
  for (const s of [-1, 1]) {
    const slope = new THREE.Group();
    const roofW = cw + 0.55;
    mesh(G.box(roofW, 0.12, slopeLen), PALETTE.roof, slope, [0, 0, s * slopeLen / 2], [0, 0, 0], 0.035);
    const rows = 4;
    for (let i = 0; i < rows; i++) {
      mesh(G.box(roofW + 0.02, 0.05, 0.05), PALETTE.roofDark, slope, [0, 0.07, s * (slopeLen * (i + 0.6)) / rows], [0, 0, 0], 0);
    }
    slope.position.set(0, ridgeY, (cab.z0 + cab.z1) / 2);
    slope.rotation.x = s * ang;
    core.add(slope);
    pieces.push(new Piece(slope, 'core', 'roof', { fallDir: s, center: new THREE.Vector3(0, ridgeY - 0.5, (cab.z0 + cab.z1) / 2 + s * 0.6), weight: 1.2 }));
  }
  // gables
  const gableGeo = new THREE.BufferGeometry();
  gableGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-cd / 2, 0, 0, cd / 2, 0, 0, 0, rise, 0, cd / 2, 0, 0, -cd / 2, 0, 0, 0, rise, 0]), 3));
  gableGeo.computeVertexNormals();
  for (const s of [-1, 1]) {
    const gm = new THREE.Mesh(gableGeo, toon(PALETTE.cream));
    gm.position.set(s * (cab.x1 - 0.06), Y0 + cab.h, (cab.z0 + cab.z1) / 2);
    gm.rotation.y = Math.PI / 2;
    core.add(gm);
    pieces.push(new Piece(gm, 'core', 'gable', { fallDir: s, center: new THREE.Vector3(s * cab.x1, Y0 + cab.h + 0.4, -1.5), weight: 0.6 }));
  }
  // chimney
  {
    const ch = new THREE.Group();
    mesh(G.box(0.42, 1.05, 0.42), PALETTE.brick, ch, [0, 0.52, 0]);
    mesh(G.box(0.52, 0.12, 0.52), '#7c2f1f', ch, [0, 1.08, 0], [0, 0, 0], 0.02);
    ch.position.set(0.82, Y0 + cab.h + 0.35, -1.2);
    core.add(ch);
    extras.chimney = ch;
    pieces.push(new Piece(ch, 'core', 'chimney', { center: new THREE.Vector3(0.82, ridgeY, -1.2), weight: 1 }));
  }
  // kitchen deck: a little stove (static) and a laundry pole
  {
    const stove = new THREE.Group();
    mesh(G.box(0.55, 0.7, 0.45), '#4b4f58', stove, [0, 0.35, 0]);
    mesh(G.box(0.6, 0.05, 0.5), '#2c2f36', stove, [0, 0.72, 0], [0, 0, 0], 0.015);
    mesh(G.cyl(0.06, 0.06, 1.3, 8), '#2c2f36', stove, [0.15, 1.3, -0.1], [0, 0, 0], 0.015);
    stove.position.set(1.15, Y0, -0.3);
    core.add(stove);
    pieces.push(new Piece(stove, 'core', 'deco', { center: new THREE.Vector3(1.15, Y0, -0.3), weight: 0.5 }));
    extras.stove = stove;
  }

  // ----- owner rooms -----
  const room = (id) => {
    const g = parts[id];
    const pal = PALETTE[id];
    const rect = PARTS[id].rect;
    const b = new StaticBatch();
    if (id === 'C') {
      rugArrow(b, 0.25, 2.3, 2.2, 1.3, pal.rug, 'C');
      bed(b, -1.72, -0.25, 2.5, 3.3, '#f2b62c', true);
    } else {
      const s = id === 'L' ? -1 : 1;
      rugArrow(b, s * 2.75, -0.7, 1.9, 1.5, pal.rug, id);
      bed(b, s > 0 ? 3.1 : -3.95, s > 0 ? 3.95 : -3.1, 0.0, 1.12, pal.main, false);
      // nightstand
      b.add(G.box(0.4, 0.42, 0.36), '#b07a45', trs(s * 2.2, Y0 + 0.21, 0.9), 0.02);
      b.add(G.cyl(0.12, 0.16, 0.22, 10), id === 'L' ? '#ffd27a' : '#bfe3ff', trs(s * 2.2, Y0 + 0.56, 0.9), 0.015);
    }
    g.add(b.build());
    // flower pot
    const pot = flowerPot(id === 'L' ? 'rose' : id === 'R' ? 'sunflower' : 'cactus');
    if (id === 'C') pot.position.set(1.45, Y0, 3.05);
    else pot.position.set((id === 'L' ? -1 : 1) * 3.68, Y0, -1.82);
    g.add(pot);
    extras[`pot${id}`] = pot;
    // walls & railings
    if (id !== 'C') {
      const s = id === 'L' ? -1 : 1;
      const w = rect[1] - rect[0];
      const ownerX = s * 3.15;
      const cx = (rect[0] + rect[1]) / 2;
      const hole = { x0: ownerX - cx - 0.45, x1: ownerX - cx + 0.45, y0: 0.85, y1: 1.75 };
      const wall = wallWithHole(w, 2.0, 0.12, hole, pal.wall, { shutters: false, frame: pal.main });
      // a framed picture & a clock on the inner face
      if (id === 'L') {
        mesh(G.box(0.42, 0.34, 0.04), '#7a4a22', wall, [0.55, 1.25, 0.08], [0, 0, 0], 0.012);
        mesh(G.box(0.32, 0.24, 0.02), '#f7e3b0', wall, [0.55, 1.25, 0.1], [0, 0, 0], 0);
        mesh(G.box(0.12, 0.12, 0.02), pal.main, wall, [0.55, 1.25, 0.11], [0, 0, 0], 0);
      } else {
        mesh(G.cyl(0.18, 0.18, 0.05, 16), '#ffffff', wall, [-0.55, 1.35, 0.08], [Math.PI / 2, 0, 0], 0.015);
        mesh(G.box(0.02, 0.12, 0.02), '#222', wall, [-0.55, 1.4, 0.11], [0, 0, 0], 0);
        mesh(G.box(0.09, 0.02, 0.02), '#222', wall, [-0.52, 1.35, 0.11], [0, 0, 0], 0);
      }
      wall.position.set(cx, Y0, rect[2] + 0.06);
      g.add(wall);
      pieces.push(new Piece(wall, id, 'wall', { fallDir: 1, inward: true, keaton: id, center: new THREE.Vector3(cx, Y0 + 1, rect[2]), weight: 1.3 }));
      // outer railing in two segments
      for (const half of [0, 1]) {
        const z0 = rect[2] + 0.25 + half * 1.55;
        const rl = railing(1.45, 3);
        rl.rotation.y = Math.PI / 2;
        rl.position.set(s * (Math.abs(rect[0]) > Math.abs(rect[1]) ? Math.abs(rect[0]) : Math.abs(rect[1])) - s * 0.06, Y0, z0 + 0.72);
        g.add(rl);
        pieces.push(new Piece(rl, id, 'rail', { fallDir: -s, center: new THREE.Vector3(s * 3.9, Y0, z0 + 0.7), weight: 0.6 }));
      }
    } else {
      for (const xs of [-0.9, 0.9]) {
        const rl = railing(1.7, 3);
        rl.position.set(xs, Y0, rect[3] - 0.06);
        g.add(rl);
        pieces.push(new Piece(rl, 'C', 'rail', { fallDir: 1, center: new THREE.Vector3(xs, Y0, 3.3), weight: 0.6 }));
      }
      for (const s of [-1, 1]) {
        const rl = railing(1.6, 3);
        rl.rotation.y = Math.PI / 2;
        rl.position.set(s * 1.74, Y0, 2.4);
        g.add(rl);
        pieces.push(new Piece(rl, 'C', 'rail', { fallDir: -s, center: new THREE.Vector3(s * 1.8, Y0, 2.4), weight: 0.5 }));
      }
      // a little wardrobe at the stern corner
      const wd = new THREE.Group();
      mesh(G.box(0.6, 1.3, 0.45), '#9ccc3a', wd, [0, 0.65, 0]);
      mesh(G.box(0.02, 1.1, 0.02), '#4d6e13', wd, [0, 0.65, 0.235], [0, 0, 0], 0);
      wd.position.set(1.35, Y0, 1.75);
      g.add(wd);
      pieces.push(new Piece(wd, 'C', 'deco', { center: new THREE.Vector3(1.35, Y0, 1.75), weight: 0.7 }));
    }
  };
  room('L');
  room('R');
  room('C');

  // merge static sub-meshes to keep draw calls low on phones
  const special = new Set([...pieces.map((p) => p.obj), ...Object.values(extras)]);
  for (const p of pieces) bakeGroup(p.obj);
  for (const k in extras) bakeGroup(extras[k]);
  for (const id in parts) bakeGroup(parts[id], [...special]);

  return { root, tilt, parts, pieces, extras };
}

// A flat door used as a raft after the house is smashed.
export function buildDoorRaft() {
  const g = new THREE.Group();
  const dw = 1.1;
  const dl = 2.1;
  mesh(G.box(dw, 0.1, dl), PALETTE.door, g, [0, 0.2, 0], [0, 0, 0], 0.03);
  for (const z of [-0.5, 0.5]) mesh(G.box(dw - 0.2, 0.03, 0.05), '#23706a', g, [0, 0.27, z], [0, 0, 0], 0);
  mesh(G.box(0.36, 0.03, 0.36), PALETTE.glass, g, [0, 0.27, -0.6], [0, 0, 0], 0.012);
  mesh(G.sph(0.06, 8, 6), '#f2c53d', g, [0.38, 0.29, 0.1], [0, 0, 0], 0.01);
  return g;
}

export function foamSkirt(rect, pad = 0.38) {
  const [x0, x1, z0, z1] = rect;
  const shape = new THREE.Shape();
  const r = 0.5;
  const X0 = x0 - pad;
  const X1 = x1 + pad;
  const Z0 = z0 - pad;
  const Z1 = z1 + pad;
  shape.moveTo(X0 + r, Z0);
  shape.lineTo(X1 - r, Z0);
  shape.quadraticCurveTo(X1, Z0, X1, Z0 + r);
  shape.lineTo(X1, Z1 - r);
  shape.quadraticCurveTo(X1, Z1, X1 - r, Z1);
  shape.lineTo(X0 + r, Z1);
  shape.quadraticCurveTo(X0, Z1, X0, Z1 - r);
  shape.lineTo(X0, Z0 + r);
  shape.quadraticCurveTo(X0, Z0, X0 + r, Z0);
  const hole = new THREE.Path();
  hole.moveTo(x0 + 0.05, z0 + 0.05);
  hole.lineTo(x0 + 0.05, z1 - 0.05);
  hole.lineTo(x1 - 0.05, z1 - 0.05);
  hole.lineTo(x1 - 0.05, z0 + 0.05);
  hole.lineTo(x0 + 0.05, z0 + 0.05);
  shape.holes.push(hole);
  const geo = new THREE.ShapeGeometry(shape, 6);
  geo.rotateX(Math.PI / 2);
  const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: '#f4fbff', transparent: true, opacity: 0.92, side: THREE.DoubleSide, depthWrite: false }));
  m.position.y = 0.04;
  m.renderOrder = 1;
  return m;
}
