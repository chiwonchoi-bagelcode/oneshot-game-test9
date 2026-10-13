// The three co-owners: chunky cel-shaded figures whose faces and bodies carry all the sulking.
import * as THREE from 'three';
import { toonUnique, addOutline, G, mesh, bakeGroup, smoothNormalGeometry, outlineMaterial } from './toon.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const DEF = {
  L: { skin: '#f1c39a', shirt: '#e8483b', pants: '#5a4636', accent: '#ffffff', hat: 'cap' },
  R: { skin: '#f7d3b2', shirt: '#3a7ee6', pants: '#2c3e75', accent: '#ffffff', hat: 'bun' },
  C: { skin: '#e9b98f', shirt: '#9ccc3a', pants: '#6b5a3a', accent: '#f2b62c', hat: 'straw' },
};

const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();
const DOWN = new THREE.Vector3(0, -1, 0);

export class Character {
  constructor(id) {
    this.id = id;
    const d = DEF[id];
    const root = new THREE.Group(); // placed on the deck (y = deck top)
    const scaler = new THREE.Group(); // cartoon proportions: owners are a bit oversized for readability
    scaler.scale.setScalar(1.3);
    root.add(scaler);
    const body = new THREE.Group(); // lean / kneel / squash
    scaler.add(body);
    this.root = root;
    this.body = body;
    // shadow blob
    const sh = new THREE.Mesh(new THREE.CircleGeometry(0.42, 16), new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: 0.22, depthWrite: false }));
    sh.rotation.x = -Math.PI / 2;
    sh.position.y = 0.02;
    root.add(sh);
    this.shadow = sh;
    // legs
    this.legs = [];
    for (const s of [-1, 1]) {
      const leg = new THREE.Group();
      leg.position.set(s * 0.11, 0.4, 0);
      mesh(G.cyl(0.085, 0.08, 0.36, 8), d.pants, leg, [0, -0.18, 0], [0, 0, 0], 0.025);
      mesh(G.sph(0.1, 10, 8), '#3a2a20', leg, [0, -0.36, 0.05], [0, 0, 0], 0.022).scale.set(1, 0.65, 1.4);
      body.add(leg);
      this.legs.push(leg);
    }
    // torso
    const torso = mesh(G.cap(0.25, 0.28, 6), d.shirt, body, [0, 0.66, 0], [0, 0, 0], 0.03);
    this.torso = torso;
    if (id === 'L') {
      for (const s of [-1, 1]) mesh(G.box(0.05, 0.42, 0.03), '#5a4636', torso, [s * 0.12, 0.04, 0.24], [0.1, 0, 0], 0);
    } else if (id === 'R') {
      mesh(G.torus(0.17, 0.045, 6, 14), '#ffffff', torso, [0, 0.24, 0.02], [Math.PI / 2, 0, 0], 0.012);
      mesh(G.cyl(0.29, 0.34, 0.22, 14), d.shirt, body, [0, 0.42, 0], [0, 0, 0], 0.025);
    } else {
      mesh(G.box(0.36, 0.06, 0.02), '#f2b62c', torso, [0, 0.0, 0.25], [0, 0, 0], 0);
      mesh(G.box(0.36, 0.06, 0.02), '#f2b62c', torso, [0, -0.12, 0.25], [0, 0, 0], 0);
    }
    // head
    const head = new THREE.Group();
    head.position.set(0, 1.02, 0);
    body.add(head);
    this.head = head;
    this.skinMat = toonUnique(d.skin);
    this.skinBase = new THREE.Color(d.skin);
    const skull = new THREE.Mesh(G.sph(0.34, 18, 14), this.skinMat);
    skull.position.y = 0.24;
    addOutline(skull, 0.03);
    head.add(skull);
    // ears + nose
    for (const s of [-1, 1]) {
      const ear = new THREE.Mesh(G.sph(0.07, 8, 6), this.skinMat);
      ear.position.set(s * 0.33, 0.22, 0);
      addOutline(ear, 0.015);
      head.add(ear);
    }
    const nose = new THREE.Mesh(G.sph(0.06, 10, 8), this.skinMat);
    nose.position.set(0, 0.2, 0.34);
    nose.scale.set(1, 0.85, 1);
    addOutline(nose, 0.015);
    head.add(nose);
    // eyes
    this.eyes = [];
    for (const s of [-1, 1]) {
      const eye = new THREE.Group();
      eye.position.set(s * 0.125, 0.28, 0.285);
      const white = mesh(G.sph(0.085, 12, 10), '#ffffff', eye, [0, 0, 0], [0, 0, 0], 0.014);
      white.scale.set(0.9, 1.2, 0.55);
      const pupil = mesh(G.sph(0.048, 10, 8), '#1b1410', eye, [0, -0.01, 0.04], [0, 0, 0], 0);
      pupil.scale.set(1, 1.2, 0.6);
      const spiral = mesh(G.torus(0.035, 0.009, 4, 14, Math.PI * 1.6), '#1b1410', eye, [0, 0, 0.05], [0, 0, 0], 0);
      spiral.visible = false;
      const lid = mesh(G.sph(0.09, 12, 6), d.skin, eye, [0, 0.01, 0.005], [0, 0, 0], 0);
      lid.scale.set(0.95, 1.2, 0.6);
      lid.visible = false;
      this.eyes.push({ g: eye, white, pupil, spiral, lid, side: s });
    }
    // brows
    this.brows = [];
    for (const s of [-1, 1]) {
      const b = mesh(G.box(0.15, 0.035, 0.04), id === 'L' ? '#e8e3da' : '#3a2a20', head, [s * 0.13, 0.42, 0.29], [0, 0, 0], 0);
      this.brows.push({ m: b, side: s });
    }
    // mouths
    const mouthY = 0.1;
    const mz = 0.31;
    this.mouths = {
      smile: mesh(G.torus(0.075, 0.02, 6, 14, Math.PI), '#5a1f1a', head, [0, mouthY + 0.03, mz], [0, 0, Math.PI], 0),
      frown: mesh(G.torus(0.065, 0.02, 6, 14, Math.PI), '#5a1f1a', head, [0, mouthY - 0.03, mz], [0, 0, 0], 0),
      open: mesh(G.sph(0.075, 12, 10), '#5a1f1a', head, [0, mouthY, mz - 0.02], [0, 0, 0], 0.012),
      grit: mesh(G.box(0.17, 0.065, 0.04), '#ffffff', head, [0, mouthY, mz], [0, 0, 0], 0.014),
      smirk: mesh(G.torus(0.06, 0.018, 6, 12, Math.PI * 0.7), '#5a1f1a', head, [0.03, mouthY + 0.02, mz], [0, 0, Math.PI + 0.3], 0),
    };
    this.mouths.open.scale.set(1, 1.1, 0.5);
    const teethLine = mesh(G.box(0.17, 0.008, 0.01), '#1b1410', this.mouths.grit, [0, 0, 0.022], [0, 0, 0], 0);
    void teethLine;
    this.mouth = 'smile';
    // blush / anger cheeks
    this.cheeks = [];
    for (const s of [-1, 1]) {
      const c = new THREE.Mesh(new THREE.CircleGeometry(0.06, 12), new THREE.MeshBasicMaterial({ color: '#ff6b6b', transparent: true, opacity: 0 }));
      c.position.set(s * 0.2, 0.16, 0.3);
      c.rotation.y = s * 0.55;
      head.add(c);
      this.cheeks.push(c);
    }
    // hats & hair
    if (d.hat === 'cap') {
      mesh(G.cyl(0.31, 0.33, 0.16, 16), '#c7352b', head, [0, 0.5, -0.02], [-0.12, 0, 0], 0.025);
      mesh(G.box(0.46, 0.04, 0.26), '#c7352b', head, [0, 0.45, 0.29], [-0.15, 0, 0], 0.02);
      mesh(G.sph(0.05, 8, 6), '#ffffff', head, [0, 0.6, -0.04], [0, 0, 0], 0.01);
      // grand white moustache
      for (const s of [-1, 1]) mesh(G.cap(0.04, 0.12, 4), '#f4f1ea', head, [s * 0.08, 0.15, 0.33], [0, 0, s * 1.2], 0.012);
    } else if (d.hat === 'bun') {
      const top = new THREE.SphereGeometry(0.36, 18, 8, 0, Math.PI * 2, 0, Math.PI * 0.3);
      mesh(top, '#8a6a9a', head, [0, 0.24, 0], [0, 0, 0], 0.025);
      const back = new THREE.SphereGeometry(0.365, 18, 10, Math.PI, Math.PI, 0, Math.PI * 0.62);
      mesh(back, '#8a6a9a', head, [0, 0.24, 0], [0, 0, 0], 0.025);
      mesh(G.sph(0.17, 12, 10), '#8a6a9a', head, [0, 0.66, -0.12], [0, 0, 0], 0.025);
      mesh(G.torus(0.09, 0.025, 6, 12), '#ff7aa8', head, [0, 0.62, -0.08], [Math.PI / 2.4, 0, 0], 0.01);
      for (const s of [-1, 1]) mesh(G.sph(0.035, 8, 6), '#ffffff', head, [s * 0.34, 0.14, 0.04], [0, 0, 0], 0.01);
      // round glasses
      for (const s of [-1, 1]) mesh(G.torus(0.075, 0.012, 6, 16), '#3b2a4a', head, [s * 0.125, 0.28, 0.335], [0, 0, 0], 0);
    } else {
      mesh(G.cyl(0.62, 0.62, 0.05, 22), '#f1d27a', head, [0, 0.5, 0], [0, 0, 0], 0.025);
      mesh(G.cyl(0.3, 0.33, 0.24, 16), '#f1d27a', head, [0, 0.62, 0], [0, 0, 0], 0.025);
      mesh(G.cyl(0.335, 0.335, 0.07, 16), '#3f8a2c', head, [0, 0.54, 0], [0, 0, 0], 0);
      mesh(G.sph(0.09, 8, 6), '#7a5a3a', head, [0, 0.08, 0.31], [0, 0, 0], 0.012).scale.set(1.4, 0.6, 0.6);
    }
    // arms (pivot at shoulder, pointing down)
    this.arms = [];
    for (const s of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(s * 0.3, 0.86, 0);
      const upper = mesh(G.cyl(0.07, 0.065, 0.42, 8), d.shirt, pivot, [0, -0.21, 0], [0, 0, 0], 0.022);
      void upper;
      const hand = new THREE.Mesh(G.sph(0.085, 10, 8), this.skinMat);
      hand.position.y = -0.46;
      addOutline(hand, 0.018);
      pivot.add(hand);
      body.add(pivot);
      this.arms.push({ pivot, hand, side: s, target: new THREE.Vector3(s * 0.32, 0.38, 0.05) });
    }
    // handheld items
    this.saw = buildSaw();
    this.saw.visible = false;
    this.arms[1].hand.add(this.saw);
    this.hanky = mesh(G.box(0.26, 0.26, 0.01), '#ffffff', null, [0, 0, 0], [0, 0, 0], 0.01);
    this.hanky.visible = false;
    this.arms[1].hand.add(this.hanky);
    this.hanky.position.set(0, -0.12, 0);
    // dizzy stars
    this.stars = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const st = mesh(G.ico(0.07, 0), '#ffd23a', this.stars, [0, 0, 0], [0, 0, 0], 0.012);
      st.userData.a = (i / 3) * Math.PI * 2;
    }
    this.stars.position.y = 0.75;
    this.stars.visible = false;
    head.add(this.stars);

    this.anger = 0;
    this.time = Math.random() * 10;

    // bake the parts that never change into single meshes
    const skinParts = head.children.filter((c) => c.isMesh && c.material === this.skinMat);
    const skin = mergeSkin(skinParts, this.skinMat);
    head.add(skin);
    for (const m of skinParts) head.remove(m);
    for (const leg of this.legs) bakeGroup(leg);
    bakeGroup(head, [...this.eyes.map((e) => e.g), ...this.brows.map((b) => b.m), ...Object.values(this.mouths), ...this.cheeks, this.stars]);
    bakeGroup(body, [head, ...this.arms.map((a) => a.pivot), ...this.legs]);
    bakeGroup(this.saw);
  }

  setMouth(kind) {
    if (this.mouth === kind) return;
    this.mouth = kind;
    for (const k in this.mouths) this.mouths[k].visible = k === kind;
  }

  // Aim an arm so its hand points toward a target in body space (shoulder-relative IK, length-limited).
  aimArm(arm, target) {
    _v.copy(target).sub(arm.pivot.position);
    const len = _v.length();
    if (len < 1e-4) return;
    _v.divideScalar(len);
    _q.setFromUnitVectors(DOWN, _v);
    arm.pivot.quaternion.slerp(_q, 0.5);
    const reach = Math.min(1.25, Math.max(0.6, len / 0.46));
    arm.pivot.scale.y += (reach - arm.pivot.scale.y) * 0.4;
  }

  setFace({ brow = 0, browTilt = 0, mouth = 'smile', eyes = 'open', look = null, anger = 0, blush = 0, pupil = 1 }) {
    for (const b of this.brows) {
      // positive brow = raised/worried, negative = angry V
      b.m.rotation.z = b.side * -brow * 0.9 + browTilt * (b.side > 0 ? 1 : 0);
      b.m.position.y = 0.42 + Math.max(0, brow) * 0.05 + (browTilt && b.side > 0 ? 0.04 : 0);
    }
    this.setMouth(mouth);
    for (const e of this.eyes) {
      e.spiral.visible = eyes === 'spiral';
      e.pupil.visible = eyes !== 'spiral';
      e.lid.visible = eyes === 'narrow' || eyes === 'closed';
      e.lid.position.y = eyes === 'closed' ? -0.01 : 0.05;
      e.white.scale.y = eyes === 'wide' ? 1.45 : 1.2;
      const ps = eyes === 'wide' ? 0.65 : pupil;
      e.pupil.scale.set(ps, 1.2 * ps, 0.6);
      if (look) {
        e.pupil.position.x = look.x * 0.025;
        e.pupil.position.y = -0.01 + look.y * 0.02;
      }
      if (e.spiral.visible) e.spiral.rotation.z += 0.3;
    }
    this.anger += (anger - this.anger) * 0.08;
    this.skinMat.color.copy(this.skinBase).lerp(new THREE.Color('#ff5a3c'), this.anger * 0.75);
    for (const c of this.cheeks) {
      c.material.opacity += (blush - c.material.opacity) * 0.1;
      c.visible = c.material.opacity > 0.03;
    }
  }
}

function mergeSkin(meshes, material) {
  const geos = meshes.map((m) => {
    m.updateMatrix();
    const g = m.geometry.clone();
    if (g.getAttribute('uv')) g.deleteAttribute('uv');
    g.applyMatrix4(m.matrix);
    return g.index ? g.toNonIndexed() : g;
  });
  const merged = mergeGeometries(geos, false);
  const out = new THREE.Mesh(merged, material);
  out.userData.keep = true;
  // outline from the individual smooth shells
  const shells = meshes.map((m) => {
    const ol = m.children.find((c) => c.userData.isOutline);
    const g = smoothNormalGeometry(m.geometry).clone();
    const t = ol ? ol.material.uniforms.uThick.value : 0.02;
    const pos = g.getAttribute('position');
    const nor = g.getAttribute('normal');
    for (let i = 0; i < pos.count; i++) pos.setXYZ(i, pos.getX(i) + nor.getX(i) * t, pos.getY(i) + nor.getY(i) * t, pos.getZ(i) + nor.getZ(i) * t);
    g.applyMatrix4(m.matrix);
    const x = new THREE.BufferGeometry();
    const ng = g.index ? g.toNonIndexed() : g;
    x.setAttribute('position', ng.getAttribute('position'));
    x.setAttribute('normal', ng.getAttribute('normal'));
    return x;
  });
  const om = new THREE.Mesh(mergeGeometries(shells, false), outlineMaterial(0));
  om.userData.isOutline = true;
  out.add(om);
  return out;
}

function buildSaw() {
  const g = new THREE.Group();
  const blade = new THREE.Group();
  mesh(G.box(0.07, 0.55, 0.012), '#d7dde5', blade, [0, -0.32, 0], [0, 0, 0], 0.01);
  for (let i = 0; i < 9; i++) {
    const t = mesh(G.cone(0.02, 0.04, 3), '#b6bec9', blade, [0.045, -0.08 - i * 0.055, 0], [0, 0, -Math.PI / 2], 0);
    t.scale.z = 0.3;
  }
  g.add(blade);
  mesh(G.box(0.12, 0.16, 0.05), '#a2602e', g, [0, -0.02, 0], [0, 0, 0], 0.015);
  g.rotation.x = Math.PI / 2;
  g.position.set(0, -0.04, 0.02);
  g.userData.blade = blade;
  return g;
}
