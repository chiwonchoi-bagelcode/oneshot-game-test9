// Cartoon particles: chunky spray blobs, steam puffs, sawdust, splinters and splash rings.
import * as THREE from 'three';
import { toon, G } from './toon.js';

const MAX_PUFF = 420;
const MAX_BIT = 320;
const MAX_RING = 48;

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();

export class FX {
  constructor(scene) {
    this.scene = scene;
    this.puffMesh = new THREE.InstancedMesh(G.ico(1, 1), toon('#ffffff', { steps: 2 }), MAX_PUFF);
    this.bitMesh = new THREE.InstancedMesh(G.box(1, 1, 1), toon('#ffffff'), MAX_BIT);
    for (const m of [this.puffMesh, this.bitMesh]) {
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      m.frustumCulled = false;
      m.count = 0;
      m.setColorAt(0, new THREE.Color('#fff'));
      scene.add(m);
    }
    // splash rings with per-instance fade
    const ringGeo = new THREE.RingGeometry(0.8, 1, 28);
    ringGeo.rotateX(-Math.PI / 2);
    this.ringAlpha = new THREE.InstancedBufferAttribute(new Float32Array(MAX_RING), 1);
    ringGeo.setAttribute('aAlpha', this.ringAlpha);
    this.ringMesh = new THREE.InstancedMesh(
      ringGeo,
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        vertexShader: `attribute float aAlpha; varying float vA; void main(){ vA = aAlpha; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position,1.0); }`,
        fragmentShader: `varying float vA; void main(){ if (vA <= 0.01) discard; gl_FragColor = vec4(0.97, 0.99, 1.0, vA); }`,
      }),
      MAX_RING,
    );
    this.ringMesh.frustumCulled = false;
    this.ringMesh.count = 0;
    scene.add(this.ringMesh);
    this.puffs = [];
    this.bits = [];
    this.rings = [];
  }

  puff(pos, vel, { life = 1, size = 0.3, grow = 1.5, gravity = 0, drag = 1, color = '#ffffff' } = {}) {
    if (this.puffs.length >= MAX_PUFF) this.puffs.shift();
    this.puffs.push({ p: pos.clone(), v: vel.clone(), t: 0, life, size, grow, gravity, drag, color: new THREE.Color(color) });
  }

  bit(pos, vel, { life = 1.5, size = [0.05, 0.05, 0.3], gravity = 14, color = '#9c6a3c', spin = 10, floor = -0.2 } = {}) {
    if (this.bits.length >= MAX_BIT) this.bits.shift();
    this.bits.push({
      p: pos.clone(), v: vel.clone(), t: 0, life, size, gravity, color: new THREE.Color(color),
      r: new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6), w: new THREE.Vector3((Math.random() - 0.5) * spin, (Math.random() - 0.5) * spin, (Math.random() - 0.5) * spin), floor,
    });
  }

  ring(pos, size = 1, life = 0.9) {
    if (this.rings.length >= MAX_RING) this.rings.shift();
    this.rings.push({ p: new THREE.Vector3(pos.x, 0.06, pos.z), t: 0, life, size });
  }

  splash(pos, k = 1) {
    const n = Math.round(6 + 8 * k);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * 2 * k;
      this.puff(new THREE.Vector3(pos.x + Math.cos(a) * 0.3, Math.max(0.1, pos.y), pos.z + Math.sin(a) * 0.3), new THREE.Vector3(Math.cos(a) * r, 2.5 + Math.random() * 3.5 * k, Math.sin(a) * r), {
        life: 0.55 + Math.random() * 0.35, size: 0.16 + 0.14 * k * Math.random(), grow: -0.6, gravity: 12, drag: 0.5, color: Math.random() < 0.3 ? '#cfefff' : '#ffffff',
      });
    }
    this.ring(pos, 0.8 + k * 0.7);
  }

  paddleSplash(pos, k = 1) {
    const n = Math.round(5 + 9 * k);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = (0.6 + Math.random() * 1.6) * k;
      this.puff(new THREE.Vector3(pos.x, 0.15, pos.z), new THREE.Vector3(Math.cos(a) * r, 3 + Math.random() * 3 * k, Math.sin(a) * r), {
        life: 0.5 + Math.random() * 0.3, size: 0.12 + 0.12 * Math.random() * k, grow: -0.7, gravity: 13, drag: 0.4,
      });
    }
    this.ring(pos, 0.6 + 0.6 * k, 0.7);
  }

  drip(pos) {
    this.puff(new THREE.Vector3(pos.x, Math.max(0.1, pos.y + 0.2), pos.z), new THREE.Vector3((Math.random() - 0.5) * 1.5, 1.5 + Math.random() * 1.5, (Math.random() - 0.5) * 1.5), {
      life: 0.4, size: 0.08 + Math.random() * 0.05, grow: -0.8, gravity: 12, drag: 0.2,
    });
  }

  // water thrown across the deck when crashing through rapids
  spray(from, dir, k = 1) {
    const n = Math.round(4 + 8 * k);
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3(dir.x * (3 + Math.random() * 4) + (Math.random() - 0.5) * 3, 4 + Math.random() * 3 * k, dir.z * (3 + Math.random() * 4) + (Math.random() - 0.5) * 3);
      this.puff(new THREE.Vector3(from.x + (Math.random() - 0.5) * 3, from.y, from.z + (Math.random() - 0.5) * 3), v, {
        life: 0.7 + Math.random() * 0.3, size: 0.14 + Math.random() * 0.16, grow: -0.5, gravity: 11, drag: 0.3, color: Math.random() < 0.4 ? '#d6f2ff' : '#ffffff',
      });
    }
  }

  steam(pos, k = 1) {
    for (let i = 0; i < 2; i++) {
      this.puff(new THREE.Vector3(pos.x + (Math.random() - 0.5) * 0.15, pos.y, pos.z + (Math.random() - 0.5) * 0.15), new THREE.Vector3((Math.random() - 0.5) * 0.6, 1.8 + Math.random() * 1.2, (Math.random() - 0.5) * 0.6), {
        life: 0.8, size: 0.09 * k + 0.05, grow: 2.2, gravity: -0.5, drag: 1.5, color: '#ffffff',
      });
    }
  }

  smoke(pos) {
    this.puff(pos, new THREE.Vector3((Math.random() - 0.5) * 0.4, 1.0 + Math.random() * 0.4, 0.6), {
      life: 2.2, size: 0.18, grow: 1.8, gravity: -0.3, drag: 0.5, color: '#e9e6e0',
    });
  }

  sawdust(pos) {
    for (let i = 0; i < 3; i++) {
      this.bit(pos, new THREE.Vector3((Math.random() - 0.5) * 2, 1 + Math.random() * 1.5, (Math.random() - 0.5) * 2), {
        life: 0.6, size: [0.04, 0.04, 0.04], gravity: 9, color: Math.random() < 0.5 ? '#e8c38a' : '#d4a868', spin: 8,
      });
    }
  }

  splinters(pos, n = 12) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 2 + Math.random() * 4;
      this.bit(pos, new THREE.Vector3(Math.cos(a) * sp, 2 + Math.random() * 4, Math.sin(a) * sp), {
        life: 1.2, size: [0.05, 0.05, 0.18 + Math.random() * 0.25], gravity: 14, color: Math.random() < 0.5 ? '#b5803f' : '#8d5a2b', spin: 14,
      });
    }
  }

  dust(pos, k = 1) {
    for (let i = 0; i < 10 * k; i++) {
      const a = (i / (10 * k)) * Math.PI * 2;
      this.puff(new THREE.Vector3(pos.x, pos.y, pos.z), new THREE.Vector3(Math.cos(a) * 2.5, 0.4 + Math.random() * 0.5, Math.sin(a) * 2.5), {
        life: 0.8, size: 0.2, grow: 1.6, gravity: 0, drag: 3, color: '#efe3cc',
      });
    }
  }

  burst(pos, k = 1) {
    for (let i = 0; i < 26 * k; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 3 + Math.random() * 6;
      this.bit(pos, new THREE.Vector3(Math.cos(a) * sp, 3 + Math.random() * 7, Math.sin(a) * sp), {
        life: 2, size: [0.12, 0.08, 0.5 + Math.random() * 0.7], gravity: 13, color: Math.random() < 0.5 ? '#c99a5e' : '#9c6a3c', spin: 10,
      });
    }
    this.dust(new THREE.Vector3(pos.x, 1, pos.z), 2);
  }

  confetti(pos, n = 60) {
    const cols = ['#e8483b', '#f2b62c', '#3a7ee6', '#4fbf6a', '#f08ad0', '#ffffff'];
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 1 + Math.random() * 4;
      this.bit(pos, new THREE.Vector3(Math.cos(a) * sp, 6 + Math.random() * 6, Math.sin(a) * sp), {
        life: 3.5, size: [0.12, 0.02, 0.18], gravity: 4, color: cols[i % cols.length], spin: 12, floor: -5,
      });
    }
  }

  stars(pos) {
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      this.puff(pos, new THREE.Vector3(Math.cos(a) * 2, 1.5, Math.sin(a) * 2), { life: 0.6, size: 0.1, grow: -0.5, gravity: 4, drag: 1, color: '#ffd23a' });
    }
  }

  update(dt) {
    // puffs
    let n = 0;
    for (let i = this.puffs.length - 1; i >= 0; i--) {
      const q = this.puffs[i];
      q.t += dt;
      if (q.t >= q.life) {
        this.puffs.splice(i, 1);
        continue;
      }
      q.v.y -= q.gravity * dt;
      q.v.multiplyScalar(Math.exp(-q.drag * dt));
      q.p.addScaledVector(q.v, dt);
      if (q.p.y < -0.1 && q.gravity > 0) {
        this.puffs.splice(i, 1);
        continue;
      }
    }
    for (const q of this.puffs) {
      const k = q.t / q.life;
      let s = q.size * (1 + q.grow * k);
      if (k > 0.75) s *= 1 - (k - 0.75) / 0.25;
      s = Math.max(0.001, s);
      _s.set(s, s, s);
      _m.compose(q.p, _q.identity(), _s);
      this.puffMesh.setMatrixAt(n, _m);
      this.puffMesh.setColorAt(n, q.color);
      n++;
    }
    this.puffMesh.count = n;
    this.puffMesh.instanceMatrix.needsUpdate = true;
    if (this.puffMesh.instanceColor) this.puffMesh.instanceColor.needsUpdate = true;

    // bits
    n = 0;
    for (let i = this.bits.length - 1; i >= 0; i--) {
      const b = this.bits[i];
      b.t += dt;
      if (b.t >= b.life) {
        this.bits.splice(i, 1);
        continue;
      }
      b.v.y -= b.gravity * dt;
      b.p.addScaledVector(b.v, dt);
      if (b.p.y < b.floor) {
        b.p.y = b.floor;
        b.v.multiplyScalar(0.3);
        b.v.y = 0;
      }
      b.r.x += b.w.x * dt;
      b.r.y += b.w.y * dt;
      b.r.z += b.w.z * dt;
    }
    for (const b of this.bits) {
      const k = b.t / b.life;
      const sc = k > 0.8 ? 1 - (k - 0.8) / 0.2 : 1;
      _q.setFromEuler(_e.set(b.r.x, b.r.y, b.r.z));
      _s.set(b.size[0] * sc, b.size[1] * sc, b.size[2] * sc);
      _m.compose(b.p, _q, _s);
      this.bitMesh.setMatrixAt(n, _m);
      this.bitMesh.setColorAt(n, b.color);
      n++;
    }
    this.bitMesh.count = n;
    this.bitMesh.instanceMatrix.needsUpdate = true;
    if (this.bitMesh.instanceColor) this.bitMesh.instanceColor.needsUpdate = true;

    // rings
    n = 0;
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.t += dt;
      if (r.t >= r.life) this.rings.splice(i, 1);
    }
    for (const r of this.rings) {
      const k = r.t / r.life;
      const s = r.size * (0.5 + 1.6 * Math.sqrt(k));
      _p.copy(r.p);
      _s.set(s, 1, s);
      _m.compose(_p, _q.identity(), _s);
      this.ringMesh.setMatrixAt(n, _m);
      this.ringAlpha.setX(n, (1 - k) * 0.9);
      n++;
    }
    this.ringMesh.count = n;
    this.ringMesh.instanceMatrix.needsUpdate = true;
    this.ringAlpha.needsUpdate = true;
  }

  clear() {
    this.puffs.length = 0;
    this.bits.length = 0;
    this.rings.length = 0;
  }
}
