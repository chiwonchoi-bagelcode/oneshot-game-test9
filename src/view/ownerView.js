// Drives one co-owner's body language from the simulation: paddling, glaring, steaming,
// fiddling with a saw, sawing their own room off and waving goodbye.
import * as THREE from 'three';
import { Character } from './characters.js';
import { OWNER_DEFS, STAGE } from '../sim/game.js';
import { PARTS } from '../sim/house.js';
import { Y0 } from './houseModel.js';
import { clamp, damp, dampAngle, lerp, smooth } from '../util/math.js';

// Paddle stroke keyframes in owner-local space (z = out over the water, x = downstream sign f).
const STROKE = [
  [0.0, [0.32, 0.05, 0.42], [0.28, 2.2, 0.28]],
  [0.24, [0.8, -0.3, 1.65], [-0.15, 1.85, 0.15]],
  [0.37, [0.7, -1.02, 1.6], [-0.1, 1.3, 0.32]],
  [0.7, [-0.62, -0.95, 0.92], [0.25, 1.38, 0.05]],
  [0.84, [-0.75, -0.25, 0.78], [0.3, 1.78, 0.05]],
  [1.0, [0.32, 0.05, 0.42], [0.28, 2.2, 0.28]],
];

function sampleStroke(s, f, amp, outTip, outGrip) {
  let i = 0;
  while (i < STROKE.length - 2 && s > STROKE[i + 1][0]) i++;
  const [s0, t0, g0] = STROKE[i];
  const [s1, t1, g1] = STROKE[i + 1];
  const k = smooth(0, 1, (s - s0) / (s1 - s0));
  const ax = (a, b) => lerp(a, b, k);
  outTip.set(ax(t0[0], t1[0]) * f, ax(t0[1], t1[1]), ax(t0[2], t1[2]));
  outGrip.set(ax(g0[0], g1[0]) * f, ax(g0[1], g1[1]), ax(g0[2], g1[2]));
  if (amp !== 1) {
    outTip.z *= amp;
    outTip.x *= amp;
    if (outTip.y < 0) outTip.y *= amp;
  }
}

const _tip = new THREE.Vector3();
const _grip = new THREE.Vector3();
const _dir = new THREE.Vector3();
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _w = new THREE.Vector3();

export class OwnerView {
  constructor(id, houseView, hooks) {
    this.id = id;
    this.def = OWNER_DEFS[id];
    this.house = houseView;
    this.hooks = hooks; // { say(id, kind|text), fx, audio }
    this.ch = new Character(id);
    houseView.parts[this.def.room].add(this.ch.root);
    this.ch.root.position.set(this.def.x, Y0, this.def.z);
    this.pos = new THREE.Vector2(this.def.x, this.def.z);
    this.facing = Math.atan2(-this.def.x, 2 - this.def.z);
    this.ch.root.rotation.y = this.facing;
    this.stroke = null;
    this.throwAnim = 0;
    this.catchAnim = 0;
    this.appeaseAnim = 0;
    this.shock = 0;
    this.shockAt = null;
    this.cheer = 0;
    this.bonk = 0;
    this.keatonT = 0;
    this.t = Math.random() * 5;
    this.lastLine = -10;
    this.steamT = 0;
    this.sawT = 0;
    this.pose = 'idle';
    this.forced = null; // ending choreography
    this.holdingPaddle = false;
    this.paddleTip = new THREE.Vector3();
    this.paddleGrip = new THREE.Vector3();
    this.strokeSide = new THREE.Vector2(-1, 0);
    this.kneel = 0;
    this.wave = 0;
    this.prevStage = 0;
    this.lookTarget = null;
    this.pointAt = null;
    this.splashed = { entry: false, exit: false };
  }

  get root() {
    return this.ch.root;
  }

  // ---------- events ----------
  onStroke(e, game) {
    this.stroke = { t: 0, dur: e.big ? 0.62 : 0.52, big: e.big, dir: e.dir, power: e.power };
    this.splashed.entry = false;
    this.splashed.exit = false;
    if (e.big) this.catchAnim = 0.12;
    void game;
  }
  onThrow() {
    this.throwAnim = 0.3;
    this.stroke = null;
  }
  onCatch() {
    this.catchAnim = 0.16;
  }
  onAppease() {
    this.appeaseAnim = 1.4;
  }
  onShock(targetPos) {
    this.shock = 1.6;
    this.shockAt = targetPos;
  }
  onBlame(at) {
    this.blame = 1.5;
    this.shockAt = at;
  }
  onCheer(t = 1.2) {
    this.cheer = t;
  }
  onBonk() {
    this.bonk = 1.2;
  }
  onKeaton() {
    this.keatonT = 1.6;
  }

  // ---------- per frame ----------
  update(dt, game, ctx) {
    const o = game.owners[this.id];
    const ch = this.ch;
    this.t += dt;
    ch.time += dt;
    const t = this.t;
    const holding = game.paddle.holder === this.id && o.state === 'aboard';
    const flight = game.paddle.flight;
    const incoming = flight && flight.to === this.id;
    this.holdingPaddle = holding;
    this.throwAnim = Math.max(0, this.throwAnim - dt);
    this.catchAnim = Math.max(0, this.catchAnim - dt);
    this.appeaseAnim = Math.max(0, this.appeaseAnim - dt);
    this.shock = Math.max(0, this.shock - dt);
    this.blame = Math.max(0, (this.blame || 0) - dt);
    this.cheer = Math.max(0, this.cheer - dt);
    this.bonk = Math.max(0, this.bonk - dt);
    this.keatonT = Math.max(0, this.keatonT - dt);

    // ----- choose pose -----
    let pose = 'idle';
    if (this.forced) pose = this.forced;
    else if (o.state === 'gone') pose = 'farewell';
    else if (o.state === 'overboard') pose = 'swim';
    else if (o.leaving > 0) pose = 'beat';
    else if (o.sawing) pose = 'sawing';
    else if (o.dizzy > 0.4) pose = 'dizzy';
    else if (this.bonk > 0) pose = 'bonk';
    else if (o.flinch > 0.25) pose = 'flinch';
    else if (holding) pose = 'paddle';
    else if (incoming) pose = 'catchReady';
    else if (this.throwAnim > 0) pose = 'throw';
    else if (this.shock > 0) pose = 'shock';
    else if (this.blame > 0) pose = 'point';
    else if (this.cheer > 0) pose = 'cheer';
    else if (o.stage >= STAGE.SAW) pose = 'saw';
    else if (o.stage === STAGE.STEAMING) pose = 'steam';
    else if (o.stage === STAGE.ANNOYED) pose = 'annoyed';
    this.pose = pose;

    // ----- where to stand & where to face -----
    let tx = this.def.x;
    let tz = this.def.z;
    const holderView = ctx.views[game.paddle.holder];
    let face = Math.atan2(0 - this.def.x, 2.2 - this.def.z);
    if (this.def.room === 'C') face = Math.atan2(-0.3, 1);
    const glareAt = (v) => {
      if (!v || v === this) return;
      const p = v.localPosIn(this.def.room, this.house, _w);
      face = Math.atan2(p.x - this.pos.x, p.z - this.pos.y);
    };
    const s = this.house.side;
    if (pose === 'paddle') {
      const dir = this.stroke ? this.stroke.dir : game.strokeDir(this.id);
      this.computeStrokeSide(dir, game);
      if (this.id === 'C') {
        if (dir < 0) { tx = -1.2; tz = 2.75; }
        else if (dir > 0) { tx = 1.15; tz = 2.75; }
        else { tx = 0.2; tz = 2.95; }
      } else {
        tx = this.def.x + Math.sign(this.def.x) * 0.25;
      }
      face = Math.atan2(this.strokeSide.x, this.strokeSide.y);
    } else if (pose === 'sawing' || pose === 'beat') {
      const c = clamp(o.cut, 0, 1);
      if (this.id === 'C') {
        tx = lerp(-1.55, 1.55, c);
        tz = 1.78;
        face = Math.PI;
      } else {
        const sx = Math.sign(this.def.x);
        tx = sx * 1.98;
        tz = lerp(-1.95, 1.0, c);
        face = -sx * Math.PI / 2;
      }
      if (pose === 'beat') face = 0;
    } else if (pose === 'annoyed' || pose === 'steam' || pose === 'catchReady') {
      glareAt(pose === 'catchReady' ? ctx.views[flight.from] : holderView);
      if (pose === 'annoyed' && Math.sin(t * 0.7 + this.def.x) > 0.75) face += 1.4 * Math.sign(this.def.x || 1); // "흥!" turn away
    } else if (pose === 'saw') {
      // eyeing the cut line
      if (this.id === 'C') face = Math.PI * 0.9;
      else face = -Math.sign(this.def.x) * Math.PI * 0.4;
    } else if ((pose === 'shock' || (pose === 'point' && !this.forced)) && this.shockAt) {
      const p = this.house.toPartLocal(this.def.room, this.shockAt, _w);
      face = Math.atan2(p.x - this.pos.x, p.z - this.pos.y);
    } else if (pose === 'throw' && flight) {
      glareAt(ctx.views[flight.to]);
    } else if (pose === 'farewell') {
      face = Math.atan2(0.2, 1);
      tx = this.id === 'C' ? 0.2 : this.def.x * 0.85;
      tz = this.id === 'C' ? 2.3 : -0.6;
    } else if (pose === 'dizzy') {
      face += t * 3;
    }
    if (game.house.door && o.state === 'aboard') {
      tx = 0;
      tz = 0.25;
    }
    if (this.forcedPos) {
      tx = this.forcedPos.x;
      tz = this.forcedPos.z;
    }
    if (this.forced && this.forcedFace !== undefined && this.forcedFace !== null) face = this.forcedFace;
    this.pos.x = damp(this.pos.x, tx, pose === 'sawing' ? 10 : 7, dt);
    this.pos.y = damp(this.pos.y, tz, pose === 'sawing' ? 10 : 7, dt);
    this.facing = dampAngle(this.facing, face, pose === 'dizzy' ? 20 : 9, dt);
    ch.root.position.x = this.pos.x;
    ch.root.position.z = this.pos.y;
    ch.root.rotation.y = this.facing;

    // ----- body -----
    const body = ch.body;
    let lean = 0;
    let side = 0;
    let bob = Math.sin(t * 2.2) * 0.012;
    let squash = 1;
    this.kneel = damp(this.kneel, pose === 'sawing' ? 1 : 0, 8, dt);
    // keep balance against the deck tilt
    const hv = this.house;
    side = -hv.rollNow * 0.6;
    lean = hv.pitchNow * 0.5;
    if (pose === 'flinch') { lean -= 0.25; squash = 0.9; }
    if (pose === 'bonk') squash = 0.55 + 0.45 * smooth(0.2, 1.2, 1.2 - this.bonk);
    if (pose === 'steam') bob += Math.abs(Math.sin(t * 9)) * 0.06;
    if (pose === 'cheer') bob += Math.abs(Math.sin(t * 8)) * 0.18;
    if (pose === 'dizzy') { side += Math.sin(t * 5) * 0.25; lean += Math.cos(t * 5) * 0.15; }
    if (pose === 'farewell') bob += Math.abs(Math.sin(t * 3)) * 0.05;
    if (pose === 'swim') bob = Math.sin(t * 3) * 0.08 - 0.5;
    let strokeS = -1;
    if (pose === 'paddle' && this.stroke) {
      this.stroke.t += dt;
      strokeS = this.stroke.t / this.stroke.dur;
      if (strokeS >= 1) {
        this.stroke = null;
        strokeS = -1;
      }
    }
    if (strokeS >= 0) {
      const big = this.stroke.big ? 1.45 : 1;
      const reach = Math.sin(clamp(strokeS / 0.45, 0, 1) * Math.PI * 0.5) * (1 - smooth(0.45, 0.85, strokeS));
      lean += reach * 0.55 * big - smooth(0.4, 0.75, strokeS) * (1 - smooth(0.75, 1, strokeS)) * 0.15 * big;
      bob -= reach * 0.08 * big;
    }
    if (this.catchAnim > 0) squash *= 1 + Math.sin((this.catchAnim / 0.16) * Math.PI) * 0.12;
    body.position.y = bob - this.kneel * 0.32;
    body.rotation.x = damp(body.rotation.x, lean + this.kneel * 0.35, 12, dt);
    body.rotation.z = damp(body.rotation.z, side, 8, dt);
    body.scale.y = damp(body.scale.y, squash, 18, dt);
    body.scale.x = body.scale.z = 1 + (1 - body.scale.y) * 0.5;
    for (const [i, leg] of ch.legs.entries()) {
      leg.rotation.x = -this.kneel * 1.3 * (i ? 1 : 0.7);
      if (pose === 'steam') leg.rotation.x = Math.max(0, Math.sin(t * 9 + i * Math.PI)) * -0.5;
      if (pose === 'annoyed' && i === 1) leg.rotation.x = Math.max(0, Math.sin(t * 7)) * -0.25;
      if (pose === 'cheer' || pose === 'farewell') leg.rotation.x = Math.sin(t * 8 + i * Math.PI) * 0.2;
    }

    // ----- arms & held things -----
    const [aL, aR] = ch.arms;
    const tgtL = aL.target;
    const tgtR = aR.target;
    tgtL.set(-0.34, 0.42, 0.06);
    tgtR.set(0.34, 0.42, 0.06);
    tgtL.y += Math.sin(t * 2.2) * 0.02;
    tgtR.y += Math.sin(t * 2.2 + 1) * 0.02;
    ch.saw.visible = pose === 'saw' || pose === 'sawing' || pose === 'beat' || (this.appeaseAnim > 0.6);
    ch.hanky.visible = pose === 'farewell';
    let headYaw = 0;
    let headPitch = 0;
    switch (pose) {
      case 'paddle': {
        this.paddlePose(strokeS, game);
        // hands on the shaft
        _dir.copy(this.paddleGrip).sub(this.paddleTip).normalize();
        _a.copy(this.paddleTip).addScaledVector(_dir, 1.45);
        _b.copy(this.paddleTip).addScaledVector(_dir, 1.85);
        this.ownerToBody(_a, tgtL);
        this.ownerToBody(_b, tgtR);
        headPitch = strokeS >= 0 ? 0.25 : 0.05;
        break;
      }
      case 'catchReady':
        tgtL.set(-0.25, 1.35, 0.2);
        tgtR.set(0.25, 1.35, 0.2);
        headPitch = -0.3;
        break;
      case 'throw': {
        const k = this.throwAnim / 0.3;
        tgtR.set(0.3, 0.9 + (1 - k) * 0.5, -0.3 + (1 - k) * 0.9);
        tgtL.set(-0.25, 0.7, 0.4);
        break;
      }
      case 'annoyed':
        tgtL.set(0.12, 0.78, 0.26);
        tgtR.set(-0.12, 0.72, 0.28);
        headPitch = 0.08;
        break;
      case 'steam': {
        const shake = Math.sin(t * 22) * 0.05;
        const pointing = Math.sin(t * 1.3 + this.def.x) > 0.2;
        tgtL.set(-0.25, 1.15 + shake, 0.25);
        if (pointing && holderView && holderView !== this) {
          tgtR.set(0.1, 0.95 + shake, 0.8); // 삿대질 toward the paddle hog
        } else tgtR.set(0.25, 1.15 - shake, 0.25);
        headPitch = -0.05;
        this.steamT -= dt;
        if (this.steamT <= 0) {
          this.steamT = 0.32;
          ctx.fx.steam(this.headWorld(_w), o.stage >= 2 ? 1 : 0.6);
        }
        break;
      }
      case 'saw': {
        const tap = Math.sin(t * 2.4);
        tgtR.set(0.32, 0.72 + tap * 0.05, 0.42);
        tgtL.set(0.1 + Math.max(0, tap) * 0.1, 0.78, 0.5);
        ch.saw.rotation.set(Math.PI / 2 + 0.4 + tap * 0.15, 0, -0.3);
        headPitch = 0.45;
        headYaw = Math.sin(t * 0.9) * 0.3;
        if (Math.sin(t * 0.9) > 0.97 && this.steamT <= 0) {
          this.steamT = 1.5;
          ctx.audio?.sawTwang?.();
        }
        this.steamT -= dt;
        break;
      }
      case 'sawing': {
        const k = Math.sin(t * 17);
        tgtR.set(0.15 + k * 0.05, 0.45, 0.55 + k * 0.18);
        tgtL.set(-0.1, 0.42, 0.5 + k * 0.18);
        ch.saw.rotation.set(Math.PI / 2 + 0.9, 0, 0);
        headPitch = 0.55;
        this.sawT -= dt;
        if (this.sawT <= 0) {
          this.sawT = 0.09;
          ctx.fx.sawdust(this.handWorld(1, _w));
        }
        break;
      }
      case 'beat':
        // a little wave to the audience before the floor goes
        tgtR.set(0.32, 1.25 + Math.sin(t * 14) * 0.06, 0.25);
        tgtL.set(-0.3, 0.45, 0.15);
        headPitch = -0.15;
        headYaw = 0.15;
        break;
      case 'dizzy':
        tgtL.set(-0.6, 0.65 + Math.sin(t * 6) * 0.2, 0.1);
        tgtR.set(0.6, 0.65 - Math.sin(t * 6) * 0.2, 0.1);
        headYaw = Math.sin(t * 4) * 0.4;
        break;
      case 'flinch':
      case 'bonk':
        tgtL.set(-0.2, 1.25, 0.25);
        tgtR.set(0.2, 1.25, 0.25);
        headPitch = 0.3;
        break;
      case 'shock':
        tgtL.set(-0.5, 0.95, 0.25);
        tgtR.set(0.15, 0.95, 0.85);
        break;
      case 'cheer':
        tgtL.set(-0.35, 1.45, 0.1 + Math.sin(t * 8) * 0.1);
        tgtR.set(0.35, 1.45, 0.1 - Math.sin(t * 8) * 0.1);
        headPitch = -0.25;
        break;
      case 'farewell': {
        const w = Math.sin(t * 7);
        tgtR.set(0.35 + w * 0.18, 1.5, 0.15);
        tgtL.set(-0.32, 0.55, 0.05);
        headPitch = -0.1;
        headYaw = Math.sin(t * 1.3) * 0.2;
        break;
      }
      case 'swim': {
        const w = Math.sin(t * 6);
        tgtL.set(-0.5, 0.9 + w * 0.3, 0.3);
        tgtR.set(0.5, 0.9 - w * 0.3, 0.3);
        break;
      }
      case 'hug':
        tgtL.set(-0.25, 0.75, 0.55);
        tgtR.set(0.25, 0.75, 0.55);
        break;
      case 'point': {
        tgtR.set(0.25, 1.1, 0.7);
        tgtL.set(-0.3, 0.6, 0.15);
        headPitch = -0.1;
        break;
      }
      case 'handshake':
        tgtR.set(0.15, 0.6, 0.6 + Math.sin(t * 10) * 0.05);
        break;
      case 'flag':
        tgtR.set(0.25, 1.5, 0.15);
        tgtL.set(-0.25, 1.2, 0.2);
        headPitch = -0.3;
        break;
      default: {
        // idle: watch the river, little fidgets, cheer when drifting your way
        headYaw = Math.sin(t * 0.6 + this.def.x) * 0.25;
        headPitch = -0.05;
        const hsim = game.house;
        const mySide = this.def.side;
        if (mySide && hsim.vu * mySide > 2.2 && !holding) {
          tgtR.set(0.3, 1.3, 0.1);
          headPitch = -0.2;
        }
        break;
      }
    }
    if (this.appeaseAnim > 0 && pose !== 'paddle') {
      // tuck the saw away sheepishly
      tgtR.set(0.3, 0.5, -0.35);
    }
    ch.aimArm(aL, tgtL);
    ch.aimArm(aR, tgtR);
    ch.head.rotation.y = damp(ch.head.rotation.y, headYaw, 8, dt);
    ch.head.rotation.x = damp(ch.head.rotation.x, headPitch, 8, dt);

    // ----- face -----
    this.updateFace(pose, o, holding, strokeS, t);

    // dizzy stars
    ch.stars.visible = pose === 'dizzy' || pose === 'bonk';
    if (ch.stars.visible) {
      ch.stars.children.forEach((st, i) => {
        const a = st.userData.a + t * 4;
        st.position.set(Math.cos(a) * 0.38, Math.sin(t * 6 + i) * 0.04, Math.sin(a) * 0.38);
        st.rotation.y += dt * 5;
      });
    }

    // splashes during the stroke
    if (strokeS >= 0) {
      if (!this.splashed.entry && strokeS > 0.36) {
        this.splashed.entry = true;
        ctx.fx.paddleSplash(this.paddleTipWorld(_w), this.stroke.big ? 1.4 : 0.8);
        ctx.audio?.splash(this.stroke.big ? 0.9 : 0.45, this.def.side);
      }
      if (strokeS > 0.4 && strokeS < 0.72 && Math.random() < 0.5) ctx.fx.drip(this.paddleTipWorld(_w));
      if (!this.splashed.exit && strokeS > 0.8) {
        this.splashed.exit = true;
        ctx.fx.paddleSplash(this.paddleTipWorld(_w), this.stroke.big ? 0.9 : 0.4);
      }
    }
  }

  updateFace(pose, o, holding, strokeS, t) {
    const ch = this.ch;
    const blink = (Math.sin(t * 1.7 + this.def.x * 3) > 0.985) ? 'closed' : 'open';
    let f = { brow: 0, mouth: 'smile', eyes: blink, anger: 0, blush: 0, pupil: 1 };
    switch (pose) {
      case 'paddle':
        f = { brow: 0.2, mouth: strokeS >= 0 && strokeS < 0.7 ? 'open' : 'smile', eyes: strokeS >= 0.2 && strokeS < 0.6 ? 'narrow' : blink, anger: 0, blush: 0.2 };
        break;
      case 'catchReady':
        f = { brow: 0.4, mouth: 'open', eyes: 'wide', anger: 0, blush: 0.4 };
        break;
      case 'throw':
        f = { brow: -0.1, mouth: 'grit', eyes: blink, anger: 0 };
        break;
      case 'annoyed':
        f = { brow: -0.45, mouth: 'frown', eyes: Math.sin(t * 0.7 + this.def.x) > 0.75 ? 'closed' : 'narrow', anger: 0.15, blush: 0 };
        break;
      case 'steam':
        f = { brow: -0.75, mouth: 'grit', eyes: 'open', anger: 0.85, pupil: 0.7 };
        break;
      case 'saw':
        f = { brow: -0.5, browTilt: 0.5, mouth: 'smirk', eyes: 'narrow', anger: 0.35 };
        break;
      case 'sawing':
        f = { brow: -0.6, mouth: Math.sin(t * 4) > 0 ? 'grit' : 'smirk', eyes: 'narrow', anger: 0.4 };
        break;
      case 'beat':
        f = { brow: 0.45, browTilt: 0.4, mouth: 'smirk', eyes: 'open', anger: 0, blush: 0.6 };
        break;
      case 'dizzy':
        f = { brow: 0.4, mouth: 'open', eyes: 'spiral', anger: 0, blush: 0.5 };
        break;
      case 'flinch':
        f = { brow: 0.6, mouth: 'open', eyes: 'closed', anger: 0 };
        break;
      case 'bonk':
        f = { brow: 0.3, mouth: 'frown', eyes: 'spiral', anger: 0 };
        break;
      case 'shock':
        f = { brow: 0.8, mouth: 'open', eyes: 'wide', anger: 0 };
        break;
      case 'cheer':
      case 'flag':
        f = { brow: 0.4, mouth: 'open', eyes: 'closed', anger: 0, blush: 0.6 };
        break;
      case 'farewell':
        f = { brow: 0.3, mouth: 'smile', eyes: 'closed', anger: 0, blush: 0.7 };
        break;
      case 'swim':
        f = { brow: 0.6, mouth: 'open', eyes: 'wide', anger: 0 };
        break;
      case 'hug':
        f = { brow: 0.5, mouth: 'smile', eyes: 'closed', anger: 0, blush: 0.8 };
        break;
      case 'point':
        f = { brow: -0.3, mouth: 'open', eyes: 'open', anger: 0.3 };
        break;
      default:
        if (o.stage === 0 && o.sulk < 0.15) f.blush = 0.25;
        break;
    }
    if (this.keatonT > 0) f = { brow: 0.1, mouth: 'frown', eyes: this.keatonT > 1.2 || (this.keatonT < 0.9 && this.keatonT > 0.75) ? 'closed' : 'wide', anger: 0 };
    if (this.appeaseAnim > 0 && pose !== 'paddle') f = { brow: 0.4, mouth: 'smile', eyes: 'closed', anger: 0, blush: 0.9 };
    ch.setFace(f);
  }

  computeStrokeSide(dir, game) {
    if (this.id === 'L') this.strokeSide.set(-1, 0.15);
    else if (this.id === 'R') this.strokeSide.set(1, 0.15);
    else if (dir < 0) this.strokeSide.set(-1, 0.35);
    else if (dir > 0) this.strokeSide.set(1, 0.35);
    else this.strokeSide.set(0, 1);
    // compensate for the house yaw a bit so strokes look like they push the right way
    void game;
    this.strokeSide.normalize();
  }

  // Paddle tip/grip in owner-local space.
  paddlePose(strokeS, game) {
    // f: which way "downstream" lies along the owner's local x while facing the water
    const f = this.strokeSide.x < 0 ? -1 : 1;
    const amp = this.stroke && this.stroke.big ? 1.25 : 1;
    if (strokeS < 0) {
      sampleStroke(0, f, 1, _tip, _grip);
      // resting: a gentle sway; smug lean on the shaft when satisfied
      _grip.x += Math.sin(this.t * 1.5) * 0.05;
    } else sampleStroke(strokeS, f, amp, _tip, _grip);
    this.paddleTip.copy(_tip);
    this.paddleGrip.copy(_grip);
    void game;
  }

  // owner-local point -> body-local (for arm IK); body has kneel/lean but close enough
  ownerToBody(p, out) {
    out.copy(p).multiplyScalar(1 / 1.3);
    out.y -= this.ch.body.position.y;
    return out;
  }

  localPosIn(room, houseView, out) {
    // position of this owner expressed in another part's local frame (parts share the tilt frame)
    out.set(this.pos.x, 0, this.pos.y);
    void room;
    void houseView;
    return out;
  }

  headWorld(out) {
    this.ch.head.updateWorldMatrix(true, false);
    return out.set(0, 0.62, 0).applyMatrix4(this.ch.head.matrixWorld);
  }
  chestWorld(out) {
    this.ch.body.updateWorldMatrix(true, false);
    return out.set(0, 0.8, 0).applyMatrix4(this.ch.body.matrixWorld);
  }
  handWorld(i, out) {
    const h = this.ch.arms[i].hand;
    h.updateWorldMatrix(true, false);
    return out.setFromMatrixPosition(h.matrixWorld);
  }
  paddleTipWorld(out) {
    this.ch.root.updateWorldMatrix(true, false);
    return out.copy(this.paddleTip).applyMatrix4(this.ch.root.matrixWorld);
  }
  paddleGripWorld(out) {
    this.ch.root.updateWorldMatrix(true, false);
    return out.copy(this.paddleGrip).applyMatrix4(this.ch.root.matrixWorld);
  }
}

export { PARTS };
