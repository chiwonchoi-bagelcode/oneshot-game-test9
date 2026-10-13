// High-angle chase camera: behind and above the house, river rushing in from the top of a portrait screen.
import * as THREE from 'three';
import { toWorld, heading, flowSpeed, halfWidth } from '../sim/course.js';
import { damp, clamp, lerp, noise1 } from '../util/math.js';

const tmp = { x: 0, z: 0 };
const tmp2 = { x: 0, z: 0 };

export class CameraRig {
  constructor(camera) {
    this.cam = camera;
    this.pos = new THREE.Vector3(0, 20, 20);
    this.look = new THREE.Vector3();
    this.u = 0;
    this.d = -10;
    this.shakeAmp = 0;
    this.kick = 0;
    this.zoom = 0;
    this.t = 0;
    this.mode = 'title';
    this.blend = 1;
    this.fovBase = 56;
    this.aspect = 0.5;
    this.orbit = 0;
    this.endFrom = null;
  }

  shake(a) {
    this.shakeAmp = Math.min(1.2, this.shakeAmp + a);
  }
  punch(a) {
    this.kick = Math.min(1, this.kick + a);
  }

  setMode(mode) {
    if (this.mode === mode) return;
    this.mode = mode;
    this.blend = 0;
  }

  resize(aspect) {
    this.aspect = aspect;
    this.cam.aspect = aspect;
    // narrow phones need a touch more distance to keep the whole house in frame
    this.fovBase = aspect < 0.5 ? 58 : aspect < 0.62 ? 55 : 50;
    this.cam.updateProjectionMatrix();
  }

  update(dt, game, extra = {}) {
    this.t += dt;
    const h = game.house;
    const narrow = clamp((0.62 - this.aspect) / 0.2, 0, 1);
    let px;
    let py;
    let pz;
    let lx;
    let ly;
    let lz;
    if (this.mode === 'title') {
      this.orbit += dt * 0.12;
      toWorld(h.u, h.d, tmp);
      const a = this.orbit;
      const r = 15;
      px = tmp.x + Math.sin(a) * r;
      pz = tmp.z + Math.cos(a) * r;
      py = 9.5;
      lx = tmp.x;
      ly = -3.2;
      lz = tmp.z;
    } else if (this.mode === 'end') {
      // a front view from the beach looking back at the house and the river it survived
      const sway = Math.sin(this.t * 0.25) * 1.2;
      toWorld(h.u + sway + (extra.endU || 0), h.d + 15.5, tmp);
      toWorld(h.u, h.d + 3.2, tmp2);
      px = tmp.x;
      pz = tmp.z;
      py = 12.5 + (extra.endH || 0);
      lx = tmp2.x;
      ly = 0.4;
      lz = tmp2.z;
    } else if (this.mode === 'close') {
      // debug close-up of the deck
      toWorld(h.u + (this.closeLook || 0), h.d - 7 * (this.closeDist || 1), tmp);
      toWorld(h.u + (this.closeLook || 0), h.d, tmp2);
      px = tmp.x + (this.closeSide || 0);
      pz = tmp.z;
      py = 6.5 * (this.closeDist || 1);
      lx = tmp2.x;
      ly = 1;
      lz = tmp2.z;
    } else if (this.mode === 'fail') {
      toWorld(h.u, h.d - 12, tmp);
      toWorld(h.u, h.d + 2, tmp2);
      px = tmp.x;
      pz = tmp.z;
      py = 24;
      lx = tmp2.x;
      ly = 0;
      lz = tmp2.z;
    } else {
      // gameplay chase
      const hw = halfWidth(h.d);
      const targetU = clamp(h.u * 0.85, -hw + 4, hw - 4);
      this.u = damp(this.u, targetU, 5, dt);
      this.d = h.d;
      const sp = flowSpeed(h.d);
      const fast = clamp((sp - 7) / 4, 0, 1);
      const back = 13 + narrow * 2.2 - fast * 1.0 - this.zoom * 3;
      const height = 16.5 + narrow * 2.4 - fast * 0.8 - this.zoom * 3.5;
      const ahead = 14 + fast * 4;
      toWorld(this.u, this.d - back, tmp);
      toWorld(this.u, this.d + ahead, tmp2);
      px = tmp.x;
      pz = tmp.z;
      py = height;
      lx = tmp2.x;
      ly = 0;
      lz = tmp2.z;
    }
    this.blend = Math.min(1, this.blend + dt * (this.mode === 'play' ? 0.8 : 0.45));
    const k = this.mode === 'play' && this.blend >= 1 ? 1 : 1 - Math.pow(1 - this.blend, 3);
    const lam = this.mode === 'play' && this.blend >= 1 ? 30 : 2.2 + k * 6;
    this.pos.x = damp(this.pos.x, px, lam, dt);
    this.pos.y = damp(this.pos.y, py, lam, dt);
    this.pos.z = damp(this.pos.z, pz, lam, dt);
    this.look.x = damp(this.look.x, lx, lam, dt);
    this.look.y = damp(this.look.y, ly, lam, dt);
    this.look.z = damp(this.look.z, lz, lam, dt);
    // shake & kicks
    this.shakeAmp = Math.max(0, this.shakeAmp - dt * 1.6);
    this.kick = Math.max(0, this.kick - dt * 3);
    const sa = this.shakeAmp * this.shakeAmp * 0.9;
    const scrape = game.house.scraping * 0.12;
    const ox = noise1(this.t * 23) * (sa + scrape);
    const oy = noise1(this.t * 19 + 7) * (sa + scrape) * 0.6;
    this.cam.position.set(this.pos.x + ox, this.pos.y + oy, this.pos.z);
    this.cam.lookAt(this.look.x + ox * 0.5, this.look.y, this.look.z);
    const sp = flowSpeed(h.d);
    const fov = this.fovBase + clamp((sp - 8) * 0.9, 0, 4) - this.kick * 3 + (this.mode === 'end' ? 4 : 0);
    if (Math.abs(this.cam.fov - fov) > 0.01) {
      this.cam.fov = lerp(this.cam.fov, fov, Math.min(1, dt * 6));
      this.cam.updateProjectionMatrix();
    }
    void heading;
  }
}
