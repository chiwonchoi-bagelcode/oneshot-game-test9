// Cel-shading helpers: stepped toon materials and inverted-hull outlines.
import * as THREE from 'three';
import { mergeVertices, mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

let gradient3 = null;
let gradient2 = null;

export function gradientMap(steps = 3) {
  if (steps === 2) {
    if (!gradient2) gradient2 = makeGradient([110, 255]);
    return gradient2;
  }
  if (!gradient3) gradient3 = makeGradient([95, 175, 255]);
  return gradient3;
}

function makeGradient(values) {
  const tex = new THREE.DataTexture(new Uint8Array(values), values.length, 1, THREE.RedFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

const matCache = new Map();
export function toon(color, opts = {}) {
  const key = `${color}|${opts.steps || 3}|${opts.emissive || ''}|${opts.transparent ? 1 : 0}|${opts.side || 0}`;
  let m = matCache.get(key);
  if (!m) {
    m = new THREE.MeshToonMaterial({
      color: new THREE.Color(color),
      gradientMap: gradientMap(opts.steps || 3),
      transparent: !!opts.transparent,
      side: opts.side || THREE.FrontSide,
    });
    if (opts.emissive) m.emissive = new THREE.Color(opts.emissive);
    matCache.set(key, m);
  }
  return m;
}

// A unique (non-cached) toon material, for things whose colour animates (blushing faces).
export function toonUnique(color, opts = {}) {
  return new THREE.MeshToonMaterial({
    color: new THREE.Color(color),
    gradientMap: gradientMap(opts.steps || 3),
    transparent: !!opts.transparent,
  });
}

let vcMat = null;
export function toonVC() {
  if (!vcMat) vcMat = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: gradientMap(3) });
  return vcMat;
}

const outlineMats = new Map();
export function outlineMaterial(thickness = 0.035, color = '#1b1410') {
  const key = `${thickness}|${color}`;
  let m = outlineMats.get(key);
  if (!m) {
    m = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.fog,
        { uThick: { value: thickness }, uColor: { value: new THREE.Color(color) } },
      ]),
      vertexShader: /* glsl */ `
        #include <common>
        #include <fog_pars_vertex>
        uniform float uThick;
        void main() {
          vec4 mvPosition = vec4(position + normal * uThick, 1.0);
          #ifdef USE_INSTANCING
            mvPosition = instanceMatrix * mvPosition;
          #endif
          mvPosition = modelViewMatrix * mvPosition;
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,
      fragmentShader: /* glsl */ `
        #include <common>
        #include <fog_pars_fragment>
        uniform vec3 uColor;
        void main() {
          gl_FragColor = vec4(uColor, 1.0);
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,
      side: THREE.BackSide,
      fog: true,
    });
    outlineMats.set(key, m);
  }
  return m;
}

const smoothCache = new WeakMap();
// Geometry with welded, averaged normals so the hull does not split at hard edges.
export function smoothNormalGeometry(geom) {
  let g = smoothCache.get(geom);
  if (g) return g;
  g = new THREE.BufferGeometry();
  g.setAttribute('position', geom.getAttribute('position').clone());
  if (geom.index) g.setIndex(geom.index.clone());
  g = mergeVertices(g, 1e-3);
  g.computeVertexNormals();
  smoothCache.set(geom, g);
  return g;
}

export function addOutline(mesh, thickness = 0.035, color) {
  const og = smoothNormalGeometry(mesh.geometry);
  const o = mesh.isInstancedMesh
    ? new THREE.InstancedMesh(og, outlineMaterial(thickness, color), mesh.count)
    : new THREE.Mesh(og, outlineMaterial(thickness, color));
  if (mesh.isInstancedMesh) o.instanceMatrix = mesh.instanceMatrix;
  o.castShadow = false;
  o.renderOrder = mesh.renderOrder;
  o.userData.isOutline = true;
  o.frustumCulled = mesh.frustumCulled;
  mesh.add(o);
  return o;
}

// Combines many small static meshes into one vertex-coloured mesh (+ one outline mesh) per group.
export class StaticBatch {
  constructor() {
    this.parts = [];
    this.outlines = [];
  }
  add(geometry, color, matrix, outline = 0.03) {
    const g = geometry.index ? geometry.toNonIndexed() : geometry.clone();
    if (g.getAttribute('uv')) g.deleteAttribute('uv');
    g.applyMatrix4(matrix);
    const c = color && color.isColor ? color.clone() : new THREE.Color(color);
    const n = g.getAttribute('position').count;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    this.parts.push(g);
    if (outline) {
      const og = smoothNormalGeometry(geometry).clone();
      // push along normals now so one shared outline material works for the whole batch
      const pos = og.getAttribute('position');
      const nor = og.getAttribute('normal');
      for (let i = 0; i < pos.count; i++) {
        pos.setXYZ(i, pos.getX(i) + nor.getX(i) * outline, pos.getY(i) + nor.getY(i) * outline, pos.getZ(i) + nor.getZ(i) * outline);
      }
      og.applyMatrix4(matrix);
      og.deleteAttribute('normal');
      const ng = og.index ? og.toNonIndexed() : og;
      ng.computeVertexNormals();
      this.outlines.push(ng);
    }
  }
  build() {
    const group = new THREE.Group();
    if (this.parts.length) {
      const g = mergeGeometries(this.parts, false);
      const mesh = new THREE.Mesh(g, toonVC());
      group.add(mesh);
    }
    if (this.outlines.length) {
      const og = mergeGeometries(this.outlines.map((o) => {
        const x = new THREE.BufferGeometry();
        x.setAttribute('position', o.getAttribute('position'));
        x.setAttribute('normal', o.getAttribute('normal'));
        return x;
      }), false);
      const om = new THREE.Mesh(og, outlineMaterial(0));
      om.userData.isOutline = true;
      group.add(om);
    }
    return group;
  }
}

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();
export function trs(x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  _e.set(rx, ry, rz);
  _q.setFromEuler(_e);
  _p.set(x, y, z);
  _s.set(sx, sy, sz);
  return _m.clone().compose(_p, _q, _s);
}

// Small mesh factory used by models: toon-shaded mesh with optional outline.
export function mesh(geometry, color, parent, pos = [0, 0, 0], rot = [0, 0, 0], outline = 0.03) {
  const m = new THREE.Mesh(geometry, typeof color === 'string' ? toon(color) : color);
  m.position.set(pos[0], pos[1], pos[2]);
  m.rotation.set(rot[0], rot[1], rot[2]);
  if (outline) addOutline(m, outline);
  if (parent) parent.add(m);
  return m;
}

export const G = {
  box: (w, h, d) => new THREE.BoxGeometry(w, h, d),
  cyl: (rt, rb, h, seg = 12) => new THREE.CylinderGeometry(rt, rb, h, seg),
  sph: (r, ws = 14, hs = 10) => new THREE.SphereGeometry(r, ws, hs),
  cap: (r, l, seg = 6) => new THREE.CapsuleGeometry(r, l, seg, 12),
  ico: (r, det = 0) => new THREE.IcosahedronGeometry(r, det),
  torus: (r, t, rs = 8, ts = 16, arc = Math.PI * 2) => new THREE.TorusGeometry(r, t, rs, ts, arc),
  cone: (r, h, seg = 12) => new THREE.ConeGeometry(r, h, seg),
};

// Collapse all static toon meshes under `group` into one vertex-coloured mesh + one outline mesh.
// Meshes flagged userData.keep, or inside an excluded subtree, are left alone (they animate).
export function bakeGroup(group, exclude = []) {
  group.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert();
  const batch = new StaticBatch();
  const victims = [];
  const skip = new Set(exclude);
  const visit = (o) => {
    if (skip.has(o) || o.userData.keep) return;
    if (o.isMesh && !o.isInstancedMesh && !o.userData.isOutline && o !== group) {
      const mat = o.material;
      const ok = mat && !Array.isArray(mat) && mat.isMeshToonMaterial && !mat.map && !mat.transparent && !mat.vertexColors && o.visible;
      if (ok) {
        const m = new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld);
        const ol = o.children.find((c) => c.userData.isOutline);
        const thick = ol ? ol.material.uniforms.uThick.value : 0;
        batch.add(o.geometry, mat.color, m, thick);
        victims.push(o);
      }
    }
    for (const c of o.children) visit(c);
  };
  visit(group);
  if (!victims.length) return null;
  for (const v of victims) {
    // keep any non-baked children (e.g. a held item) by re-parenting them to the group
    for (const c of [...v.children]) if (!c.userData.isOutline) group.attach(c);
    v.parent.remove(v);
  }
  const baked = batch.build();
  baked.userData.baked = true;
  group.add(baked);
  return baked;
}
