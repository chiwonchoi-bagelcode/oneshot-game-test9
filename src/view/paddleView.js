// The one paddle everybody wants. Held in a pair of hands, or whirling across the deck.
import * as THREE from 'three';
import { mesh, G, bakeGroup } from './toon.js';

const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _y = new THREE.Vector3();
const _z = new THREE.Vector3();
const _x = new THREE.Vector3();
const _m = new THREE.Matrix4();
const LEN = 2.25;

export class PaddleView {
  constructor(houseView, fx, audio) {
    this.house = houseView;
    this.fx = fx;
    this.audio = audio;
    const g = new THREE.Group();
    mesh(G.cyl(0.045, 0.05, LEN - 0.5, 8), '#d9a066', g, [0, 0.5 + (LEN - 0.5) / 2, 0], [0, 0, 0], 0.02);
    const blade = mesh(G.box(0.34, 0.66, 0.05), '#c98a4a', g, [0, 0.3, 0], [0, 0, 0], 0.025);
    mesh(G.box(0.36, 0.1, 0.06), '#e8483b', blade, [0, 0.12, 0], [0, 0, 0], 0);
    mesh(G.box(0.36, 0.1, 0.06), '#ffffff', blade, [0, 0.02, 0], [0, 0, 0], 0);
    mesh(G.box(0.36, 0.1, 0.06), '#3a7ee6', blade, [0, -0.08, 0], [0, 0, 0], 0);
    mesh(G.box(0.26, 0.07, 0.07), '#8d5a2b', g, [0, LEN, 0], [0, 0, 0], 0.015);
    bakeGroup(g);
    this.obj = g;
    this.flight = null;
    this.trailT = 0;
    houseView.tilt.add(g);
  }

  onThrow(e) {
    const tilt = this.house.tilt;
    tilt.attach(this.obj);
    const center = this.obj.position.clone().add(_a.set(0, LEN / 2, 0).applyQuaternion(this.obj.quaternion));
    this.flight = { from: e.from, to: e.to, start: center, dur: e.dur };
    this.audio?.whoosh();
  }

  update(dt, game) {
    const p = game.paddle;
    const tilt = this.house.tilt;
    if (p.flight && this.flight) {
      const k = Math.min(1, p.flight.t / p.flight.dur);
      const to = this.house.views[p.flight.to];
      to.handWorld(1, _b);
      tilt.worldToLocal(_b);
      const s = this.flight.start;
      const e = (1 - k) * (1 - k);
      const f = 2 * (1 - k) * k;
      const g = k * k;
      const midY = Math.max(s.y, _b.y) + 1.3;
      this.obj.position.set(
        e * s.x + f * ((s.x + _b.x) / 2) + g * _b.x,
        e * s.y + f * midY + g * _b.y,
        e * s.z + f * ((s.z + _b.z) / 2) + g * _b.z,
      );
      // spin end over end around the paddle's middle
      this.obj.rotation.set(Math.PI / 2 - k * Math.PI * 3, 0, 0.5, 'ZXY');
      _a.set(0, LEN / 2, 0).applyQuaternion(this.obj.quaternion);
      this.obj.position.sub(_a);
      this.trailT -= dt;
      if (this.trailT <= 0) {
        this.trailT = 0.025;
        this.obj.updateWorldMatrix(true, false);
        _a.set(0, LEN / 2, 0).applyMatrix4(this.obj.matrixWorld);
        this.fx.puff(_a, new THREE.Vector3(0, 0.2, 0), { life: 0.25, size: 0.12, grow: -0.8, gravity: 0, drag: 0, color: '#ffffff' });
      }
      return;
    }
    this.flight = null;
    const holder = p.holder ? this.house.views[p.holder] : null;
    if (!holder || game.owners[p.holder].state !== 'aboard') {
      this.obj.visible = !!holder;
      return;
    }
    this.obj.visible = true;
    const root = holder.ch.root;
    if (this.obj.parent !== root) root.attach(this.obj);
    // orient: +Y from tip toward grip, blade face toward the water side
    _a.copy(holder.paddleTip);
    _b.copy(holder.paddleGrip);
    _y.subVectors(_b, _a).normalize();
    _z.set(0, 0, 1).addScaledVector(_y, -_y.z).normalize();
    _x.crossVectors(_y, _z).normalize();
    _z.crossVectors(_x, _y);
    _m.makeBasis(_x, _y, _z);
    this.obj.quaternion.setFromRotationMatrix(_m);
    this.obj.position.copy(_a);
  }
}
