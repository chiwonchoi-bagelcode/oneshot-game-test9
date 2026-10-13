// Static scenery: toon cliffs and meadows, trees, rocks, sky, launch dock and the beach village.
import * as THREE from 'three';
import {
  D_MIN, D_MAX, BEACH_D, halfWidth, toWorld, heading, cliffHeight, ROCKS, beachLine,
} from '../sim/course.js';
import { mulberry32, noise1, clamp, smooth } from '../util/math.js';
import { toon, toonVC, addOutline, G, mesh, outlineMaterial, bakeGroup } from './toon.js';

const C = (hex) => new THREE.Color(hex);

export function createLights(scene) {
  const hemi = new THREE.HemisphereLight('#d8eeff', '#7a8f5a', 1.25);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#fff3dc', 2.3);
  sun.position.set(-40, 80, 30);
  scene.add(sun);
  scene.add(sun.target);
  const fill = new THREE.DirectionalLight('#bcd8ff', 0.45);
  fill.position.set(30, 20, -40);
  scene.add(fill);
  return { hemi, sun, fill };
}

export function createSky(scene) {
  const geo = new THREE.SphereGeometry(700, 24, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      uTop: { value: C('#3d8fe6') },
      uHorizon: { value: C('#c4e9ff') },
      uBottom: { value: C('#d9f1ff') },
    },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; }`,
    fragmentShader: `uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uBottom; varying vec3 vDir;
      void main(){ float h = vDir.y; vec3 c = h > 0.0 ? mix(uHorizon, uTop, smoothstep(0.0, 0.45, h)) : mix(uHorizon, uBottom, smoothstep(0.0, -0.2, h));
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(geo, mat);
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  scene.add(sky);
  // puffy Wind Waker clouds ringing the horizon
  const clouds = new THREE.Group();
  const rng = mulberry32(7);
  const cloudMat = toon('#ffffff', { steps: 2 });
  for (let i = 0; i < 16; i++) {
    const g = new THREE.Group();
    const n = 3 + Math.floor(rng() * 4);
    for (let k = 0; k < n; k++) {
      const s = 10 + rng() * 14;
      const m = new THREE.Mesh(G.sph(1, 10, 8), cloudMat);
      m.scale.set(s * 1.4, s * 0.8, s);
      m.position.set((k - n / 2) * 14 + rng() * 6, rng() * 5, rng() * 8);
      g.add(m);
    }
    const a = (i / 16) * Math.PI * 2 + rng() * 0.3;
    g.position.set(Math.cos(a) * 460, 70 + rng() * 60, Math.sin(a) * 460);
    g.lookAt(0, g.position.y, 0);
    clouds.add(g);
  }
  scene.add(clouds);
  bakeGroup(clouds);
  return {
    update(cam) {
      sky.position.copy(cam.position);
      clouds.position.set(cam.position.x, 0, cam.position.z);
    },
  };
}

function bandColors(H) {
  const sandy = H < 1.7;
  return {
    under: C(sandy ? '#d9c28a' : '#4b4036'),
    wet: C(sandy ? '#e9d49b' : '#5e4f40'),
    cliffA: C(sandy ? '#f1dca5' : '#c48d57'),
    cliffB: C(sandy ? '#ead29a' : '#a7713f'),
    cliffC: C(sandy ? '#e2c88c' : '#d9a76a'),
    soil: C(sandy ? '#9ccf5c' : '#8b5b32'),
    grassLip: C('#84cc4f'),
    grass: C('#6db944'),
    grassFar: C('#58a63b'),
  };
}

export function createBanks(scene) {
  const group = new THREE.Group();
  const rng = mulberry32(31337);
  const step = 2;
  const CH = 80;
  const tmp = { x: 0, z: 0 };
  for (const side of [-1, 1]) {
    for (let d0 = D_MIN; d0 < D_MAX; d0 += CH) {
      const d1 = Math.min(D_MAX, d0 + CH);
      const rows = [];
      for (let d = d0; d <= d1 + 0.01; d += step) {
        const H = cliffHeight(d) * (1 + 0.12 * noise1(d * 0.07 + side * 13));
        const hw = halfWidth(d);
        const n = noise1(d * 0.21 + side * 5);
        const prof = [
          [-1.6, -1.2],
          [0.05 + 0.15 * n, 0.12],
          [0.2 + 0.05 * H + 0.2 * n, 0.4 * H],
          [0.35 + 0.08 * H + 0.25 * noise1(d * 0.4 + side), 0.75 * H],
          [0.55 + 0.11 * H, H],
          [1.4 + 0.11 * H, H + 0.22],
          [10 + 0.12 * H, H + 0.7 + 0.5 * noise1(d * 0.05 + side * 3)],
          [46, H + 2.8 + 2.5 * noise1(d * 0.02 + side * 9)],
        ];
        const pts = prof.map(([o, y]) => {
          toWorld(side * (hw + o), d, tmp);
          return [tmp.x, y, tmp.z];
        });
        rows.push({ pts, H, d });
      }
      const pos = [];
      const col = [];
      const push = (p, c) => {
        pos.push(p[0], p[1], p[2]);
        col.push(c.r, c.g, c.b);
      };
      for (let r = 0; r < rows.length - 1; r++) {
        const A = rows[r];
        const B = rows[r + 1];
        const bc = bandColors(A.H);
        const strata = [bc.under, bc.wet, (Math.floor(A.d / 6) % 2 ? bc.cliffA : bc.cliffB), bc.cliffC, bc.soil, bc.grassLip, bc.grass];
        if (A.H > 6) strata[3] = Math.floor(A.d / 9) % 2 ? bc.cliffC : bc.cliffA;
        for (let k = 0; k < A.pts.length - 1; k++) {
          const c = k === 6 ? bc.grassFar : strata[k];
          const a0 = A.pts[k];
          const a1 = A.pts[k + 1];
          const b0 = B.pts[k];
          const b1 = B.pts[k + 1];
          // winding so the faces look toward the river/sky
          if (side < 0) {
            push(a0, c); push(b0, c); push(a1, c);
            push(a1, c); push(b0, c); push(b1, c);
          } else {
            push(a0, c); push(a1, c); push(b0, c);
            push(a1, c); push(b1, c); push(b0, c);
          }
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
      g.computeVertexNormals();
      const m = new THREE.Mesh(g, toonVC());
      group.add(m);
    }
  }
  scene.add(group);

  // trees & bushes on the plateaus
  const trunkGeo = G.cyl(0.22, 0.32, 2.2, 6);
  trunkGeo.translate(0, 1.1, 0);
  const crownGeo = G.ico(1, 1);
  const trees = [];
  for (let d = D_MIN + 4; d < D_MAX - 10; d += 3 + rng() * 5) {
    for (const side of [-1, 1]) {
      if (rng() < 0.35) continue;
      const H = cliffHeight(d);
      if (d > BEACH_D - 30) continue;
      const o = 0.12 * H + 2.5 + rng() * 26;
      const y = H + 0.22 + clamp((o - 1.4 - 0.11 * H) / 9, 0, 1) * 0.5;
      const u = side * (halfWidth(d) + o);
      toWorld(u, d, tmp);
      trees.push({ x: tmp.x, y, z: tmp.z, s: 0.8 + rng() * 0.9, tint: rng() });
    }
  }
  const trunks = new THREE.InstancedMesh(trunkGeo, toon('#8a5a32'), trees.length);
  const crownsA = new THREE.InstancedMesh(crownGeo, toon('#4fa83a'), trees.length);
  const crownsB = new THREE.InstancedMesh(crownGeo, toon('#79c44a'), trees.length);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  let na = 0;
  let nb = 0;
  trees.forEach((t, i) => {
    m4.compose(new THREE.Vector3(t.x, t.y, t.z), q.identity(), new THREE.Vector3(t.s, t.s, t.s));
    trunks.setMatrixAt(i, m4);
    e.set(rng(), rng() * 6, rng());
    q.setFromEuler(e);
    const cs = t.s * (1.5 + rng() * 0.6);
    m4.compose(new THREE.Vector3(t.x, t.y + 2.4 * t.s + cs * 0.55, t.z), q, new THREE.Vector3(cs, cs * 1.05, cs));
    if (t.tint < 0.55) crownsA.setMatrixAt(na++, m4);
    else crownsB.setMatrixAt(nb++, m4);
  });
  crownsA.count = na;
  crownsB.count = nb;
  for (const im of [trunks, crownsA, crownsB]) {
    im.instanceMatrix.needsUpdate = true;
    im.computeBoundingSphere();
    addOutline(im, 0.05);
    scene.add(im);
  }
  return group;
}

function rockGeometry(seed) {
  const rng = mulberry32(seed);
  const g = new THREE.IcosahedronGeometry(1, 1);
  const pos = g.getAttribute('position');
  const key = (x, y, z) => `${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`;
  const jit = new Map();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const k = key(x, y, z);
    if (!jit.has(k)) jit.set(k, 0.78 + rng() * 0.4);
    const s = jit.get(k);
    let ny = y * s;
    ny = ny < -0.35 ? -0.35 : ny;
    if (ny > 0.55) ny = 0.55 + (ny - 0.55) * 0.4;
    pos.setXYZ(i, x * s, ny, z * s);
  }
  g.computeVertexNormals();
  // flat per-face toon colours: mossy tops, grey flanks
  const nor = g.getAttribute('normal');
  const col = new Float32Array(pos.count * 3);
  const top = C('#a9b46a');
  const moss = C('#7fae4a');
  const side = C('#9a9284');
  const dark = C('#6f685d');
  for (let f = 0; f < pos.count; f += 3) {
    const ny = (nor.getY(f) + nor.getY(f + 1) + nor.getY(f + 2)) / 3;
    const c = ny > 0.72 ? (rng() < 0.6 ? moss : top) : ny > 0.1 ? side : dark;
    for (let k = 0; k < 3; k++) {
      col[(f + k) * 3] = c.r;
      col[(f + k) * 3 + 1] = c.g;
      col[(f + k) * 3 + 2] = c.b;
    }
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

export function createRocks(scene) {
  const variants = [11, 23, 37, 51].map(rockGeometry);
  const buckets = variants.map(() => []);
  ROCKS.forEach((r, i) => buckets[r.kind].push(i));
  const tmp = { x: 0, z: 0 };
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const meshes = [];
  buckets.forEach((list, k) => {
    const im = new THREE.InstancedMesh(variants[k], toonVC(), list.length);
    list.forEach((ri, j) => {
      const r = ROCKS[ri];
      toWorld(r.u, r.d, tmp);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r.rot - heading(r.d));
      const vis = r.r * 1.02;
      m4.compose(new THREE.Vector3(tmp.x, r.h * 0.18, tmp.z), q, new THREE.Vector3(vis, r.h * 1.15, vis));
      im.setMatrixAt(j, m4);
    });
    im.instanceMatrix.needsUpdate = true;
    im.computeBoundingSphere();
    addOutline(im, 0.035);
    scene.add(im);
    meshes.push(im);
  });
  return meshes;
}

// ---------- text helpers ----------
export function textTexture(lines, opts = {}) {
  const w = opts.w || 512;
  const h = opts.h || 256;
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = opts.bg || '#e9c48a';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = opts.border || '#7a4a22';
  ctx.lineWidth = 14;
  ctx.strokeRect(7, 7, w - 14, h - 14);
  ctx.fillStyle = opts.color || '#4a2a10';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const size = opts.size || 72;
  lines.forEach((t, i) => {
    ctx.font = `${i === 0 ? size : size * 0.6}px Jua, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif`;
    ctx.fillText(t, w / 2, h / 2 + (i - (lines.length - 1) / 2) * size * 0.95);
  });
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function signBoard(lines, w = 3.2, h = 1.6, opts = {}) {
  const g = new THREE.Group();
  const tex = textTexture(lines, opts);
  const board = new THREE.Mesh(G.box(w, h, 0.12), [
    toon('#8a5a32'), toon('#8a5a32'), toon('#8a5a32'), toon('#8a5a32'),
    new THREE.MeshToonMaterial({ map: tex, gradientMap: toon('#fff').gradientMap }),
    toon('#8a5a32'),
  ]);
  board.position.y = h / 2 + 1.0;
  addOutline(board, 0.04);
  g.add(board);
  for (const sx of [-1, 1]) mesh(G.box(0.16, 1.2 + h / 2, 0.16), '#6d4424', g, [sx * (w / 2 - 0.25), (1.2 + h / 2) / 2, -0.05]);
  return g;
}

// ---------- launch dock ----------
export function createDock(scene) {
  const g = new THREE.Group();
  const tmp = { x: 0, z: 0 };
  const hw = halfWidth(-4);
  // planks running from the left bank toward the house
  const plankMat = '#c89a5e';
  for (let i = 0; i < 9; i++) {
    const u = -hw + 0.6 + i * 0.75;
    toWorld(u, -3.2, tmp);
    const p = mesh(G.box(0.7, 0.14, 3.2), i % 2 ? plankMat : '#b9884f', g, [tmp.x, 0.75, tmp.z], [0, -heading(-3), 0], 0.02);
    p.rotation.order = 'YXZ';
  }
  for (const [u, d] of [[-hw + 0.5, -4.6], [-hw + 0.5, -1.8], [-hw + 6.7, -4.6], [-hw + 6.7, -1.8]]) {
    toWorld(u, d, tmp);
    mesh(G.cyl(0.18, 0.2, 2.2, 8), '#7a4c27', g, [tmp.x, 0.1, tmp.z]);
  }
  // mooring bollard at the dock tip
  toWorld(-hw + 7.0, -1.2, tmp);
  const bollard = mesh(G.cyl(0.22, 0.26, 0.6, 10), '#5b3a1e', g, [tmp.x, 1.1, tmp.z]);
  const sign = signBoard(['출발 나루', '공동명의 급류타기'], 3.4, 1.7);
  toWorld(-hw - 3.5, -9, tmp);
  sign.position.set(tmp.x, cliffHeight(-9) + 0.1, tmp.z);
  sign.rotation.y = -heading(-9) + 0.5;
  g.add(sign);
  scene.add(g);
  bollard.userData.keep = true;
  bakeGroup(g, [bollard]);
  return { group: g, bollard };
}

// ---------- the beach at the end of the river ----------
export function createBeach(scene) {
  const g = new THREE.Group();
  const tmp = { x: 0, z: 0 };
  const sand = C('#f3dfa6');
  const sandWet = C('#e2c68a');
  const grass = C('#79c44a');
  const grassFar = C('#5eae3e');
  const U0 = -80;
  const U1 = 80;
  const D0 = BEACH_D - 16;
  const D1 = BEACH_D + 110;
  const NU = 64;
  const ND = 60;
  const hAt = (u, d) => {
    const s = d - beachLine(u);
    let y = -0.6 + smooth(-14, 8, s) * 1.15;
    y += smooth(14, 30, s) * 0.8 + smooth(30, 90, s) * 2.5;
    y += 0.15 * noise1(u * 0.2 + d * 0.13);
    return y;
  };
  const pos = [];
  const col = [];
  for (let j = 0; j < ND; j++) {
    for (let i = 0; i < NU; i++) {
      const quad = [[i, j], [i + 1, j], [i, j + 1], [i + 1, j], [i + 1, j + 1], [i, j + 1]];
      const uc = U0 + ((i + 0.5) / NU) * (U1 - U0);
      const dc = D0 + ((j + 0.5) / ND) * (D1 - D0);
      const s = dc - beachLine(uc);
      const c = s < -1 ? sandWet : s < 16 + 3 * noise1(uc * 0.1) ? sand : s < 40 ? grass : grassFar;
      for (const [a, b] of quad) {
        const u = U0 + (a / NU) * (U1 - U0);
        const d = D0 + (b / ND) * (D1 - D0);
        toWorld(u, d, tmp);
        pos.push(tmp.x, hAt(u, d), tmp.z);
        col.push(c.r, c.g, c.b);
      }
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.computeVertexNormals();
  g.add(new THREE.Mesh(geo, toonVC()));

  const place = (obj, u, d, yOff = 0, rot = 0) => {
    toWorld(u, d, tmp);
    obj.position.set(tmp.x, hAt(u, d) + yOff, tmp.z);
    obj.rotation.y = -heading(d) + rot;
    g.add(obj);
    return obj;
  };

  // village cottages
  const roofs = ['#d2553a', '#3e78c9', '#e0a43a', '#3c9a5c', '#c4458f'];
  const spots = [[-22, 42], [-9, 50], [7, 46], [21, 40], [34, 54], [-34, 52]];
  spots.forEach(([u, dd], i) => {
    const c = cottage(roofs[i % roofs.length]);
    place(c, u, BEACH_D + dd, -0.05, (i % 2 ? 0.15 : -0.12) - u * 0.01);
  });
  // finish banner between two poles
  const banner = new THREE.Group();
  const tex = textTexture(['도착!'], { w: 512, h: 160, bg: '#fff6dc', border: '#d2553a', color: '#d2553a', size: 96 });
  for (const back of [0, 1]) {
    const cloth = new THREE.Mesh(new THREE.PlaneGeometry(9, 2.4), new THREE.MeshBasicMaterial({ map: tex }));
    cloth.position.set(0, 5.4, back ? -0.02 : 0.02);
    cloth.rotation.y = back ? Math.PI : 0;
    banner.add(cloth);
  }
  for (const sx of [-1, 1]) {
    mesh(G.cyl(0.14, 0.16, 6.6, 8), '#8a5a32', banner, [sx * 4.8, 3.3, 0]);
    mesh(G.sph(0.28), '#f2b62c', banner, [sx * 4.8, 6.7, 0]);
  }
  place(banner, 0, BEACH_D + 24);
  // bunting
  const flagCols = ['#e8483b', '#f2b62c', '#3a7ee6', '#4fbf6a', '#f08ad0'];
  for (let k = -6; k <= 6; k++) {
    if (k === 0) continue;
    const f = mesh(G.cone(0.32, 0.7, 3), flagCols[(k + 12) % flagCols.length], banner, [k * 0.68, 6.45 - 0.25 * Math.cos((k / 6) * 1.5), 0], [Math.PI, 0, 0], 0.015);
    f.scale.z = 0.25;
  }
  // pier on the right
  for (let i = 0; i < 12; i++) {
    const p = new THREE.Group();
    mesh(G.box(3.0, 0.14, 0.8), i % 2 ? '#c89a5e' : '#b9884f', p, [0, 0.9, 0], [0, 0, 0], 0.02);
    place(p, 16, BEACH_D - 14 + i * 0.85, 0);
    p.position.y = 0;
  }
  for (let i = 0; i < 4; i++) {
    for (const s of [-1, 1]) {
      const post = mesh(G.cyl(0.14, 0.16, 2.2, 8), '#7a4c27');
      place(post, 16 + s * 1.3, BEACH_D - 13.5 + i * 3, 0);
      post.position.y = 0.2;
    }
  }
  // palms / round trees around the village
  const rng = mulberry32(5);
  for (let i = 0; i < 26; i++) {
    const u = -60 + rng() * 120;
    const dd = 30 + rng() * 70;
    if (Math.abs(u) < 12 && dd < 45) continue;
    const t = new THREE.Group();
    const s = 0.9 + rng() * 0.8;
    mesh(G.cyl(0.25 * s, 0.35 * s, 2.6 * s, 6), '#8a5a32', t, [0, 1.3 * s, 0]);
    mesh(G.ico(1.7 * s, 1), rng() < 0.5 ? '#4fa83a' : '#79c44a', t, [0, 3.4 * s, 0], [rng(), rng(), 0], 0.05);
    place(t, u, BEACH_D + dd);
  }
  const sign = signBoard(['기슭 마을', '어서 오세요!'], 3.6, 1.8);
  place(sign, -9, BEACH_D + 17, 0, 0.25);

  scene.add(g);
  bakeGroup(g);
  return { group: g, heightAt: hAt };
}

function cottage(roofColor) {
  const g = new THREE.Group();
  const w = 4.2;
  const d = 3.6;
  mesh(G.box(w, 2.6, d), '#f7ecd2', g, [0, 1.3, 0], [0, 0, 0], 0.05);
  const roofL = mesh(G.box(w + 0.6, 0.25, d * 0.62), roofColor, g, [0, 3.25, -d * 0.24], [0.62, 0, 0], 0.05);
  const roofR = mesh(G.box(w + 0.6, 0.25, d * 0.62), roofColor, g, [0, 3.25, d * 0.24], [-0.62, 0, 0], 0.05);
  roofL.position.y = 3.15;
  roofR.position.y = 3.15;
  const gableGeo = new THREE.BufferGeometry();
  const gv = new Float32Array([-d / 2, 0, 0, d / 2, 0, 0, 0, 1.15, 0]);
  gableGeo.setAttribute('position', new THREE.BufferAttribute(gv, 3));
  gableGeo.setIndex([0, 1, 2]);
  gableGeo.computeVertexNormals();
  for (const sx of [-1, 1]) {
    const gm = new THREE.Mesh(gableGeo, toon('#f7ecd2', { side: THREE.DoubleSide }));
    gm.position.set(sx * w / 2, 2.6, 0);
    gm.rotation.y = Math.PI / 2;
    g.add(gm);
  }
  mesh(G.box(0.9, 1.6, 0.1), '#3e6fb6', g, [0.6, 0.8, d / 2 + 0.03]);
  mesh(G.box(0.8, 0.7, 0.1), '#9fd6f2', g, [-1.1, 1.5, d / 2 + 0.03], [0, 0, 0], 0.03);
  mesh(G.box(0.5, 1.2, 0.5), '#a8452f', g, [1.2, 3.6, -0.6]);
  return g;
}

export { outlineMaterial };
