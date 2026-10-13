// Toon river: a deep-blue band drawn with white foam lines that advect at the local current speed,
// rock collars and V-wakes, standing waves in rapids, swirling whirlpools and bank foam.
import * as THREE from 'three';
import {
  D_MIN, D_MAX, halfWidth, toWorld, roughness, flowSpeed, ROCKS, POOLS, rocksInRange, buildTravelTime,
} from '../sim/course.js';
import { clamp } from '../util/math.js';

const FIELD_W = 128;
const FIELD_H = 2048;
const MARGIN = 3.5; // river mesh extends this far under the banks

export function poolDepthAt(u, d) {
  let y = 0;
  for (const p of POOLS) {
    const r = Math.hypot(u - p.u, d - p.d);
    if (r < p.R) {
      const k = 1 - r / p.R;
      y -= 1.25 * k * k;
    }
  }
  return y;
}

function buildField() {
  const data = new Uint8Array(FIELD_W * FIELD_H * 4);
  const near = [];
  for (let j = 0; j < FIELD_H; j++) {
    const d = D_MIN + ((j + 0.5) / FIELD_H) * (D_MAX - D_MIN);
    const hw = halfWidth(d) + MARGIN;
    rocksInRange(d - 22, d + 8, near);
    for (let i = 0; i < FIELD_W; i++) {
      const u = (((i + 0.5) / FIELD_W) * 2 - 1) * hw;
      let dist = 9;
      let wake = 0;
      let turb = 0;
      for (const k of near) {
        const rk = ROCKS[k];
        const du = u - rk.u;
        const dd = d - rk.d;
        const s = Math.hypot(du, dd) - rk.r * 0.95;
        if (s < dist) dist = s;
        // V wake downstream of the rock
        if (dd > 0 && dd < 22) {
          const spread = rk.r * 0.85 + dd * 0.3;
          const fall = 1 - dd / 22;
          const line = 1 - clamp(Math.abs(Math.abs(du) - spread) / 0.55, 0, 1);
          wake = Math.max(wake, line * fall * Math.min(1, rk.r / 1.2));
          if (Math.abs(du) < spread * 0.75) turb = Math.max(turb, (1 - dd / 14) * Math.min(1, rk.r / 1.4));
        }
        // pillow of white water just upstream
        if (dd < 0 && dd > -rk.r * 1.8 && Math.abs(du) < rk.r * 1.1) turb = Math.max(turb, 0.8 * (1 + dd / (rk.r * 1.8)));
      }
      const o = (j * FIELD_W + i) * 4;
      data[o] = Math.round(clamp(dist / 9, 0, 1) * 255);
      data[o + 1] = Math.round(clamp(wake, 0, 1) * 255);
      data[o + 2] = Math.round(clamp(turb, 0, 1) * 255);
      data[o + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(data, FIELD_W, FIELD_H, THREE.RGBAFormat);
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

const vert = /* glsl */ `
  #include <common>
  #include <fog_pars_vertex>
  attribute vec2 aUD;
  attribute float aTau;
  attribute float aHW;
  attribute float aRough;
  attribute float aSpeed;
  uniform float uTime;
  uniform vec4 uPools[2];
  varying vec2 vUD;
  varying float vTau;
  varying float vHW;
  varying float vRough;
  varying float vSpeed;
  varying vec3 vWorld;
  void main() {
    vUD = aUD;
    vTau = aTau;
    vHW = aHW;
    vRough = aRough;
    vSpeed = aSpeed;
    vec3 p = position;
    // choppy rapids
    p.y += aRough * 0.16 * sin(aUD.y * 0.9 + uTime * 2.3 + aUD.x * 0.35) * smoothstep(aHW, aHW - 2.5, abs(aUD.x));
    for (int i = 0; i < 2; i++) {
      vec4 pl = uPools[i];
      float r = length(aUD - pl.xy);
      float k = clamp(1.0 - r / pl.z, 0.0, 1.0);
      p.y -= 1.25 * k * k;
    }
    vWorld = p;
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`;

const frag = /* glsl */ `
  #include <common>
  #include <fog_pars_fragment>
  uniform float uTime;
  uniform sampler2D uField;
  uniform vec2 uFieldRange; // dMin, dMax
  uniform vec4 uPools[2];
  uniform vec3 uDeep;
  uniform vec3 uMid;
  uniform vec3 uShallow;
  uniform vec3 uFoam;
  uniform vec3 uDark;
  uniform vec4 uHouse; // u, d, radius, active
  varying vec2 vUD;
  varying float vTau;
  varying float vHW;
  varying float vRough;
  varying float vSpeed;
  varying vec3 vWorld;

  float hash1(float n) { return fract(sin(n * 91.345) * 47453.5453); }
  float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash2(i), hash2(i + vec2(1.0, 0.0)), u.x), mix(hash2(i + vec2(0.0, 1.0)), hash2(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  // Foam streak lines that travel with the water (tau = water travel time along the river).
  float streaks(vec2 ud, float tau, float density, float laneW, float seed) {
    float wig = sin(ud.y * 0.23 + floor(ud.x / laneW) * 1.7 + seed) * 0.22;
    float x = ud.x / laneW + wig;
    float lane = floor(x);
    float h1 = hash1(lane * 1.31 + seed);
    float h2 = hash1(lane * 2.17 + seed * 3.1);
    float h3 = hash1(lane * 0.73 + seed * 7.7);
    float laneOn = step(h3, density);
    float across = abs(fract(x) - 0.5 - (h1 - 0.5) * 0.4);
    float prof = 1.0 - 0.28 * pow(clamp(ud.x / max(vHW, 1.0), -1.2, 1.2), 2.0);
    float s = tau / prof * (0.85 + 0.3 * h2) - uTime;
    float seg = fract(s * (0.42 + 0.3 * h1) + h2);
    float duty = mix(0.22, 0.5, h3) * (0.6 + 0.7 * density);
    float taper = smoothstep(0.0, 0.25, seg / duty) * smoothstep(0.0, 0.25, 1.0 - seg / duty);
    float w = (0.06 + 0.045 * density) * taper;
    return laneOn * step(seg, duty) * step(across, w);
  }

  void main() {
    vec2 ud = vUD;
    float hw = vHW;
    float bank = hw - abs(ud.x);
    if (bank < -0.8) discard;
    vec2 fuv = vec2(clamp(ud.x / (hw + ${MARGIN.toFixed(1)}) * 0.5 + 0.5, 0.0, 1.0), (ud.y - uFieldRange.x) / (uFieldRange.y - uFieldRange.x));
    vec4 field = texture2D(uField, fuv);
    float rockDist = field.r * 9.0;
    float wake = field.g;
    float turb = field.b;

    // ----- base colour: big soft toon patches -----
    float n1 = vnoise(vec2(ud.x * 0.16, vTau * 0.55 - uTime * 0.55));
    float n2 = vnoise(vec2(ud.x * 0.5, vTau * 1.7 - uTime * 1.7) + 3.0);
    vec3 col = mix(uDeep, uMid, step(0.62, n1 * 0.65 + n2 * 0.35));
    float shallow = 1.0 - smoothstep(0.0, 3.2, bank);
    col = mix(col, uShallow, step(0.5, shallow + (n2 - 0.5) * 0.4));
    col = mix(col, uMid, smoothstep(2.5, 0.6, rockDist) * 0.6);

    // ----- whirlpools -----
    float poolMask = 0.0;
    for (int i = 0; i < 2; i++) {
      vec4 pl = uPools[i];
      vec2 p = ud - pl.xy;
      float r = length(p);
      if (r < pl.z) {
        float a = atan(p.y, p.x);
        float k = 1.0 - r / pl.z;
        poolMask = max(poolMask, smoothstep(0.0, 0.25, k));
        col = mix(col, uDark, smoothstep(0.35, 1.0, k) * 0.85);
        float spiral = fract(a / 6.2831853 * 3.0 - pl.w * (log(r + 0.6) * 1.6) + uTime * 0.55 * pl.w);
        float arm = step(spiral, 0.1 + 0.08 * k) * step(0.08, k) * step(0.9, r);
        float rim = step(abs(r - pl.z * (0.86 + 0.04 * sin(a * 5.0 + uTime * 3.0 * pl.w))), 0.18);
        col = mix(col, uFoam, max(arm, rim * 0.9));
      }
    }

    // ----- foam -----
    float speedK = clamp((vSpeed - 3.0) / 8.0, 0.0, 1.0);
    float density = clamp(0.12 + 0.35 * speedK + 0.4 * vRough + 0.5 * turb, 0.0, 0.92) * (1.0 - poolMask);
    float foam = streaks(ud, vTau, density, 1.05, 1.0);
    foam = max(foam, streaks(ud + vec2(0.52, 0.0), vTau * 1.07, density * 0.6, 1.6, 7.0));
    // V-wakes behind rocks
    float wakeLine = step(0.55, wake) * step(0.35, fract((vTau - uTime) * 1.3 + ud.x * 0.05));
    foam = max(foam, wakeLine * (1.0 - poolMask));
    // standing waves in rapids (they stay put while the water rushes through)
    float crest = fract(ud.y / 5.2 + 0.25 * sin(ud.x * 0.33 + floor(ud.y / 5.2) * 2.1));
    float wave = step(crest, 0.05 + 0.04 * vRough) * step(0.45, vRough) * step(0.35, vnoise(vec2(ud.x * 0.5, floor(ud.y / 5.2))) + vRough * 0.3);
    foam = max(foam, wave * (1.0 - poolMask));
    // rock collars and ripple rings
    float wob = vnoise(ud * 1.6 + vec2(0.0, -uTime * 2.2));
    float collar = step(rockDist, 0.28 + 0.38 * wob);
    float ring = step(abs(rockDist - (0.75 + 0.35 * sin(uTime * 3.0 + ud.y))), 0.07) * step(0.4, wob);
    foam = max(foam, max(collar, ring));
    // bank lace
    float lace = step(bank, 0.35 + 0.45 * vnoise(vec2(ud.y * 0.6 - uTime * 0.8, ud.x)));
    float laceLine = step(abs(bank - 1.25 - 0.3 * sin(ud.y * 0.5 - uTime * 1.5)), 0.06) * step(0.5, vnoise(vec2(ud.y * 0.3, 1.0)));
    foam = max(foam, max(lace, laceLine) * step(-0.5, bank));
    // glitter
    float glint = step(0.992, vnoise(ud * vec2(2.3, 0.9) + vec2(uTime * 0.7, -uTime * 2.0))) * (1.0 - foam);
    col = mix(col, uFoam, foam);
    col += glint * 0.35;

    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;

export function createRiver(scene) {
  const field = buildField();
  const travel = buildTravelTime(1);
  const tauAt = (d) => {
    const f = clamp((d - D_MIN) / travel.step, 0, travel.n - 1.001);
    const i = Math.floor(f);
    return travel.tau[i] + (travel.tau[i + 1] - travel.tau[i]) * (f - i);
  };
  const uniforms = THREE.UniformsUtils.merge([
    THREE.UniformsLib.fog,
    {
      uTime: { value: 0 },
      uField: { value: null },
      uFieldRange: { value: new THREE.Vector2(D_MIN, D_MAX) },
      uPools: { value: POOLS.map((p) => new THREE.Vector4(p.u, p.d, p.R, p.dir)) },
      uDeep: { value: new THREE.Color('#1557b8') },
      uMid: { value: new THREE.Color('#2370cc') },
      uShallow: { value: new THREE.Color('#3fb6cf') },
      uFoam: { value: new THREE.Color('#f4fbff') },
      uDark: { value: new THREE.Color('#0b2f6e') },
      uHouse: { value: new THREE.Vector4(0, 0, 4, 0) },
    },
  ]);
  uniforms.uField.value = field;
  const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: vert, fragmentShader: frag, fog: true });

  const group = new THREE.Group();
  const CH = 60; // metres per chunk
  const LAT = 30;
  const tmp = { x: 0, z: 0 };
  for (let d0 = D_MIN; d0 < D_MAX; d0 += CH) {
    const d1 = Math.min(D_MAX, d0 + CH);
    const rows = Math.ceil(d1 - d0) + 1;
    const pos = [];
    const ud = [];
    const tau = [];
    const hwA = [];
    const rough = [];
    const speed = [];
    for (let r = 0; r < rows; r++) {
      const d = d0 + ((d1 - d0) * r) / (rows - 1);
      const hw = halfWidth(d);
      const W = hw + MARGIN;
      const tu = tauAt(d);
      for (let c = 0; c <= LAT; c++) {
        const u = -W + (2 * W * c) / LAT;
        toWorld(u, d, tmp);
        pos.push(tmp.x, 0, tmp.z);
        ud.push(u, d);
        tau.push(tu);
        hwA.push(hw);
        rough.push(roughness(d));
        speed.push(flowSpeed(d));
      }
    }
    const idx = [];
    for (let r = 0; r < rows - 1; r++) {
      for (let c = 0; c < LAT; c++) {
        const a = r * (LAT + 1) + c;
        const b = a + LAT + 1;
        idx.push(a, a + 1, b, a + 1, b + 1, b);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('aUD', new THREE.Float32BufferAttribute(ud, 2));
    g.setAttribute('aTau', new THREE.Float32BufferAttribute(tau, 1));
    g.setAttribute('aHW', new THREE.Float32BufferAttribute(hwA, 1));
    g.setAttribute('aRough', new THREE.Float32BufferAttribute(rough, 1));
    g.setAttribute('aSpeed', new THREE.Float32BufferAttribute(speed, 1));
    g.setIndex(idx);
    g.computeBoundingSphere();
    g.boundingSphere.radius += 2;
    const m = new THREE.Mesh(g, mat);
    m.renderOrder = -1;
    group.add(m);
  }
  scene.add(group);
  return {
    group,
    material: mat,
    update(time, house) {
      uniforms.uTime.value = time;
      if (house) uniforms.uHouse.value.set(house.u, house.d, 4, 1);
    },
  };
}
