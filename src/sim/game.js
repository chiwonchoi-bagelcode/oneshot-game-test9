// Game rules: paddle passing, grudges, saws, damage, endings. Pure logic (no rendering).
import { clamp, wrapAngle } from '../util/math.js';
import {
  ROCKS, POOLS, BOTTLENECK, halfWidth, beachLine, rocksInRange, sectionAt, flowSpeed, BEACH_D,
} from './course.js';
import {
  createHouse, rebuildBody, updateExtents, stepHouse, localToRiver, leanKick, releaseWhirl,
  rockClearance, nimbleness, TUNE, PARTS,
} from './house.js';

export const OWNER_DEFS = {
  L: { id: 'L', name: '좌봉식', side: -1, rate: 1 / 25, room: 'L', x: -3.15, z: -0.95, color: '#e8483b' },
  C: { id: 'C', name: '한가운', side: 0, rate: 1 / 33, room: 'C', x: 0.45, z: 2.55, color: '#f2b62c' },
  R: { id: 'R', name: '우말순', side: 1, rate: 1 / 29, room: 'R', x: 3.15, z: -0.95, color: '#3a7ee6' },
};
export const OWNER_IDS = ['L', 'C', 'R'];

export const STAGE = { CALM: 0, ANNOYED: 1, STEAMING: 2, SAW: 3, SAWING: 4 };
const STAGE_AT = [0.3, 0.55, 0.78, 1.0];
export const SAW_TIME = 4.8;

export const ENDINGS = {
  fair: { id: 'fair', title: '온전한 공동명의', sub: '셋이서 한 집, 끝까지' },
  wreck: { id: 'wreck', title: '너덜너덜 공동명의', sub: '벽은 없어도 셋은 있다' },
  two: { id: 'two', title: '둘이서 반반', sub: '한 명은 먼저 와 있었다' },
  alone: { id: 'alone', title: '이제 진짜 내 집', sub: '단독명의 등기 완료' },
  door: { id: 'door', title: '문짝 한 장', sub: '그래도 현관은 남았다' },
};

const FIXED = 1 / 120;

function newOwner(id) {
  const def = OWNER_DEFS[id];
  return {
    ...def,
    state: 'aboard', // aboard | gone | overboard
    sulk: 0,
    stage: 0,
    sawing: false,
    cut: 0,
    leaving: 0,
    holdTime: 0,
    waitTime: 0,
    dizzy: 0,
    flinch: 0,
    lastStroke: -10,
  };
}

export class Game {
  constructor() {
    this.reset();
  }

  reset() {
    const h = createHouse();
    rebuildBody(h);
    h.d = -4;
    h.u = 0;
    updateExtents(h);
    this.house = h;
    this.time = 0;
    this.runTime = 0;
    this.state = 'intro';
    this.owners = { L: newOwner('L'), C: newOwner('C'), R: newOwner('R') };
    this.paddle = { holder: 'C', flight: null, queued: null, strokeTimer: 1.2, cooldown: 0 };
    this.pushes = [];
    this.events = [];
    this.contacts = [];
    this.acc = 0;
    this.timeScale = 1;
    this.slow = { t: 0, scale: 1 };
    this.hp = 1;
    this.lastCatch = -10;
    this.lastCatchBy = null;
    this.lastNearMiss = -10;
    this.scrapeTick = 0;
    this.nearTrack = new Map();
    this.floaters = [];
    this.section = sectionAt(h.d);
    this.canyon = { active: false, maxSqueeze: 0, sideways: false, slim: false, done: false };
    this.endingId = null;
    this.failReason = null;
    this.stats = {
      throws: 0,
      thrills: 0,
      nearMisses: 0,
      hits: 0,
      appeased: 0,
      lastSecondAppease: 0,
      whirlRides: 0,
      whirlEarly: 0,
      canyon: null,
      lost: [], // {id, d}
      shattered: false,
      overboard: [],
      time: 0,
    };
  }

  emit(type, data = {}) {
    this.events.push({ type, ...data, time: this.time });
  }

  aboard() {
    return OWNER_IDS.filter((id) => this.owners[id].state === 'aboard');
  }

  launch() {
    if (this.state !== 'intro') return;
    this.state = 'running';
    this.house.moored = false;
    this.house.vd = 1.5;
    this.emit('launch');
  }

  progress() {
    return clamp(this.house.d / BEACH_D, 0, 1);
  }

  // Player input: tap an owner.
  tap(id) {
    if (this.state !== 'running') return false;
    const o = this.owners[id];
    if (!o || o.state !== 'aboard' || o.leaving > 0) return false;
    const p = this.paddle;
    if (p.flight) {
      if (p.flight.to !== id) p.queued = id;
      return true;
    }
    if (p.holder === id) {
      // Only the lone survivor can be urged to dig in harder.
      if (this.aboard().length === 1 && p.cooldown <= 0) {
        this.stroke(id, true, 0.35);
        p.cooldown = 0.85;
        return true;
      }
      this.emit('already', { id });
      return false;
    }
    this.throwTo(id);
    return true;
  }

  throwTo(id) {
    const p = this.paddle;
    const from = p.holder;
    const a = this.owners[from];
    const b = this.owners[id];
    const dist = Math.hypot(a.x - b.x, a.z - b.z);
    p.flight = { from, to: id, t: 0, dur: 0.15 + dist * 0.022 };
    p.holder = null;
    p.queued = null;
    this.stats.throws++;
    this.emit('throw', { from, to: id, dur: p.flight.dur });
  }

  strokeDir(id) {
    const h = this.house;
    const o = this.owners[id];
    if (o.side !== 0) return o.side;
    if (Math.abs(h.u) < 0.9) return 0;
    return -Math.sign(h.u);
  }

  // Arms tire the longer one person keeps the paddle; a fresh pair of hands digs in hard.
  fatigue(id) {
    const o = this.owners[id];
    return Math.max(0.3, 1 - Math.max(0, o.holdTime - 1.2) / 4.5);
  }

  satisfied(id) {
    const h = this.house;
    const o = this.owners[id];
    const hw = halfWidth(h.d + 6);
    if (o.side < 0) return h.minU < -hw + 2.1;
    if (o.side > 0) return h.maxU > hw - 2.1;
    return Math.abs(h.u) < 0.9 && Math.abs(h.vu) < 1.2;
  }

  stroke(id, big, eager = 0) {
    const h = this.house;
    const dir = this.strokeDir(id);
    const nim = nimbleness(h.mass, h.door);
    const o = this.owners[id];
    o.lastStroke = this.time;
    let power;
    if (big) power = TUNE.scoop * (0.85 + 0.45 * eager);
    else power = TUNE.stroke * this.fatigue(id);
    if (dir === 0) {
      // centre-keeper: steady the house instead of pushing it
      this.pushes.push({ du: -h.vu * (big ? 0.85 : 0.5), spin: -h.omega * 0.7 - wrapAngle(h.psi) * (big ? 1.4 : 0.7), t: 0.2, T: 0.2 });
      leanKick(h, (Math.random() - 0.5) * 0.25, big ? 0.35 : 0.15);
    } else {
      const du = dir * power * nim;
      // strokes from the stern/sides also twist the deck a little
      const lever = h.door ? 0.05 : 0.05;
      this.pushes.push({ du, spin: dir * lever * power * nim, t: 0.18, T: 0.18 });
      // the house lurches and dips toward the side it is pulled
      const s = Math.cos(h.psi);
      leanKick(h, dir * (big ? 0.95 : 0.42) * s, (big ? 0.2 : 0.08));
    }
    if (h.whirl && big) {
      releaseWhirl(h, dir * 3.2, 0);
      this.stats.whirlEarly++;
      this.emit('whirlExit', { early: true });
    }
    this.emit('stroke', { id, dir, big, power: big ? 1 : 0.5 * this.fatigue(id) });
  }

  update(realDt) {
    const dt = Math.min(realDt, 0.06);
    if (this.slow.t > 0) {
      this.slow.t -= dt;
      this.timeScale = this.slow.t > 0 ? this.slow.scale : 1;
    } else this.timeScale = 1;
    this.acc += dt * this.timeScale;
    let steps = 0;
    while (this.acc >= FIXED && steps < 12) {
      this.fixedStep(FIXED);
      this.acc -= FIXED;
      steps++;
    }
    if (steps >= 12) this.acc = 0;
  }

  slowmo(t, scale) {
    if (this.slow.t > 0 && this.slow.scale < scale) return;
    this.slow.t = t;
    this.slow.scale = scale;
  }

  fixedStep(dt) {
    this.time += dt;
    const h = this.house;
    if (this.state === 'running') this.runTime += dt;

    // paddle flight & strokes
    if (this.state === 'running') this.updatePaddle(dt);

    // queued pushes (strokes act over a short pull)
    for (let i = this.pushes.length - 1; i >= 0; i--) {
      const p = this.pushes[i];
      const f = Math.min(dt, p.t) / p.T;
      h.vu += p.du * f;
      h.omega += p.spin * f;
      p.t -= dt;
      if (p.t <= 0) this.pushes.splice(i, 1);
    }

    const wasWhirl = !!h.whirl;
    this.contacts.length = 0;
    if (this.state === 'arrived') {
      this.stepArrived(dt);
    } else if (this.state !== 'failed') {
      stepHouse(h, dt, this.time, this.contacts);
    } else {
      h.vu *= 0.98;
      h.vd *= 0.98;
      h.u += h.vu * dt;
      h.d += h.vd * dt;
    }
    if (!wasWhirl && h.whirl) {
      this.stats.whirlRides++;
      this.emit('whirlEnter', { pool: POOLS.indexOf(h.whirl.pool) });
    } else if (wasWhirl && !h.whirl && h.released && !h.released.early) {
      this.emit('whirlExit', { early: false });
    }

    if (this.state === 'running') {
      this.handleContacts(dt);
      this.updateOwners(dt);
      this.trackNearMisses();
      this.trackCanyon();
      this.updateSection();
      this.checkArrival();
    }
    this.updateFloaters(dt);
  }

  updatePaddle(dt) {
    const p = this.paddle;
    p.cooldown = Math.max(0, p.cooldown - dt);
    if (p.flight) {
      p.flight.t += dt;
      if (p.flight.t >= p.flight.dur) {
        const to = p.flight.to;
        const o = this.owners[to];
        p.flight = null;
        if (o.state !== 'aboard' || o.leaving > 0) {
          // receiver is leaving: the paddle clatters back to someone who is staying
          const any = this.aboard().find((x) => !(this.owners[x].leaving > 0)) || this.aboard()[0];
          p.holder = any;
          return;
        }
        p.holder = to;
        this.lastCatch = this.time;
        this.lastCatchBy = to;
        const wasStage = o.stage;
        const wasSawing = o.sawing;
        const eager = o.sulk;
        if (p.queued && p.queued !== to && this.owners[p.queued].state === 'aboard') {
          // quick relay: no stroke, straight on
          this.emit('catch', { id: to, relay: true, eager });
          this.throwTo(p.queued);
          return;
        }
        this.emit('catch', { id: to, eager });
        if (wasSawing || wasStage >= STAGE.SAW) {
          this.stats.appeased++;
          const last = wasSawing && o.cut > 0.55;
          if (last) this.stats.lastSecondAppease++;
          this.emit('appease', { id: to, sawing: wasSawing, last });
          if (wasSawing) {
            o.sawing = false;
            o.sulk = 0.72;
          }
        }
        this.stroke(to, true, eager);
        p.strokeTimer = 0.62;
      }
      return;
    }
    if (!p.holder) return;
    const o = this.owners[p.holder];
    if (o.state !== 'aboard') {
      p.holder = this.aboard()[0] || null;
      return;
    }
    p.strokeTimer -= dt;
    if (p.strokeTimer <= 0) {
      p.strokeTimer = TUNE.strokeEvery * (this.house.door ? 0.85 : 1);
      if (!this.satisfied(p.holder)) this.stroke(p.holder, false);
      else this.emit('rest', { id: p.holder });
    }
  }

  updateOwners(dt) {
    const h = this.house;
    const early = clamp((this.runTime - 4) / 10, 0, 1);
    const dizzy = !!h.whirl;
    for (const id of OWNER_IDS) {
      const o = this.owners[id];
      if (o.state !== 'aboard') continue;
      o.flinch = Math.max(0, o.flinch - dt);
      if (dizzy) o.dizzy = Math.min(2.5, o.dizzy + dt * 2);
      else o.dizzy = Math.max(0, o.dizzy - dt * 0.8);
      const holding = this.paddle.holder === id;
      const incoming = this.paddle.flight && this.paddle.flight.to === id;
      if (holding) {
        o.sulk = Math.max(0, o.sulk - dt / 4.6);
        o.holdTime += dt;
        o.waitTime = 0;
      } else if (!incoming && this.aboard().length > 1) {
        const mult = (0.3 + 0.7 * early) * (dizzy ? 0.4 : 1);
        o.sulk = Math.min(1, o.sulk + o.rate * mult * dt);
        o.waitTime += dt;
        o.holdTime = 0;
      }
      let stage = 0;
      for (let i = 0; i < STAGE_AT.length; i++) if (o.sulk >= STAGE_AT[i] - (i === 3 ? 1e-6 : 0)) stage = i + 1;
      if (o.sawing) stage = STAGE.SAWING;
      else if (stage === STAGE.SAWING) {
        o.sawing = true;
        this.emit('sawStart', { id, resume: o.cut > 0.02 });
      }
      if (stage !== o.stage) {
        const up = stage > o.stage;
        o.stage = stage;
        this.emit('stage', { id, stage, up });
      }
      if (o.leaving > 0) {
        // the beat before the floor goes: they stand up and look at us
        o.leaving -= dt;
        if (o.leaving <= 0) this.detach(id);
      } else if (o.sawing && !incoming && !dizzy) {
        o.cut += dt / SAW_TIME;
        if (o.cut >= 1) {
          o.cut = 1;
          o.leaving = 0.75;
          this.slowmo(0.9, 0.35);
          this.emit('cutDone', { id });
        }
      }
    }
  }

  detach(id) {
    const h = this.house;
    const o = this.owners[id];
    o.state = 'gone';
    o.sawing = false;
    o.cut = 1;
    if (this.paddle.queued === id) this.paddle.queued = null;
    const part = o.room;
    // part centre in river space
    const def = PARTS[part];
    const cxl = (def.rect[0] + def.rect[1]) / 2;
    const czl = (def.rect[2] + def.rect[3]) / 2;
    const pos = localToRiver(h, cxl, czl, { u: 0, d: 0 });
    h.parts.delete(part);
    rebuildBody(h);
    updateExtents(h);
    this.floaters.push({
      kind: 'room', id, part, u: pos.u, d: pos.d, psi: h.psi, vu: h.vu, vd: h.vd, omega: 0, t: 0,
      lx: cxl, lz: czl,
    });
    this.stats.lost.push({ id, d: Math.round(h.d) });
    leanKick(h, -o.side * 0.6, 0.3);
    this.emit('detach', { id, part, d: h.d });
  }

  handleContacts(dt) {
    const h = this.house;
    let worst = null;
    for (const c of this.contacts) {
      if (c.type === 'rock') {
        const tr = this.nearTrack.get(c.rock);
        if (tr) tr.hit = true;
        else this.nearTrack.set(c.rock, { min: -1, hit: true, fired: true });
      }
      if (!worst || c.speed > worst.speed) worst = c;
    }
    if (worst && h.invuln <= 0 && worst.speed > 0.9) {
      if (h.door) {
        if (worst.type !== 'rock') return;
        h.invuln = 1.2;
        this.stats.hits++;
        this.hp -= 0.34;
        this.emit('hit', { strength: 0.8, part: 'door', lx: 0, lz: 0, kind: 'rock', hp: this.hp, door: true });
        if (this.hp <= 0.01) this.fail('door');
        return;
      }
      // already wedged against the rocks: grinding along them hurts far less than a fresh crash
      const mult = Math.pow(h.mass, -0.85) * (h.pin > 0.3 ? 0.35 : 1);
      const base = worst.type === 'rock' ? clamp((worst.speed - 0.4) * 3.2, 5, 15) : clamp((worst.speed - 1.0) * 3, 3, 10);
      const dmg = base * mult / 100;
      this.hp -= dmg;
      h.invuln = 0.65;
      this.stats.hits++;
      const s = clamp(base / 15, 0.25, 1);
      leanKick(h, worst.nu * 1.1 * s * Math.cos(h.psi), -0.9 * s);
      for (const id of this.aboard()) this.owners[id].flinch = 0.6;
      this.emit('hit', { strength: s, part: worst.part, lx: worst.lx, lz: worst.lz, kind: worst.type, hp: this.hp });
      if (this.hp <= 0) this.shatter();
      return;
    }
    // continuous scraping in the canyon squeeze
    if (h.scraping > 0.3 && !h.door) {
      const mult = Math.pow(h.mass, -0.85);
      this.hp -= (0.04 * h.scraping * mult) * dt;
      this.scrapeTick -= dt;
      if (this.scrapeTick <= 0) {
        this.scrapeTick = 0.42;
        this.emit('scrape', { intensity: h.scraping, hp: this.hp });
      }
      if (this.hp <= 0) this.shatter();
    }
  }

  shatter() {
    const h = this.house;
    if (h.door) return;
    const p = this.paddle;
    const rider = p.holder || (p.flight && p.flight.to) || this.aboard()[0];
    const overboard = this.aboard().filter((id) => id !== rider);
    p.flight = null;
    p.queued = null;
    p.holder = rider;
    for (const id of overboard) {
      const o = this.owners[id];
      o.state = 'overboard';
      o.sawing = false;
      const pos = localToRiver(h, o.x, o.z, { u: 0, d: 0 });
      this.floaters.push({ kind: 'swimmer', id, u: pos.u, d: pos.d, psi: h.psi, vu: h.vu + (Math.random() - 0.5) * 4, vd: h.vd, omega: (Math.random() - 0.5) * 2, t: 0 });
      this.stats.overboard.push(id);
    }
    const lostParts = [...h.parts];
    if (h.whirl) h.whirl = null;
    h.parts = new Set(['door']);
    h.door = true;
    rebuildBody(h);
    updateExtents(h);
    h.invuln = 1.6;
    h.omega *= 0.3;
    this.hp = 1;
    this.stats.shattered = true;
    const r = this.owners[rider];
    r.sulk = 0;
    r.sawing = false;
    this.slowmo(1.1, 0.28);
    this.emit('shatter', { rider, overboard, parts: lostParts });
  }

  fail(reason) {
    if (this.state !== 'running') return;
    this.state = 'failed';
    this.failReason = reason;
    this.stats.time = this.runTime;
    this.slowmo(1.4, 0.3);
    this.emit('fail', { reason });
  }

  trackNearMisses() {
    const h = this.house;
    const near = rocksInRange(h.d - 12, h.d + 14, this._near || (this._near = []));
    for (const i of near) {
      const rk = ROCKS[i];
      let tr = this.nearTrack.get(i);
      if (!tr) {
        tr = { min: 1e9, hit: false, fired: false };
        this.nearTrack.set(i, tr);
      }
      if (tr.fired) continue;
      const c = rockClearance(h, rk);
      if (c < tr.min) tr.min = c;
      if (rk.d < h.d && !tr.hit && tr.min < 1.15 && rk.r > 1.0) {
        tr.fired = true;
        if (this.time - this.lastNearMiss < 0.7) continue;
        this.lastNearMiss = this.time;
        const thrill = this.time - this.lastCatch < 1.9;
        this.stats.nearMisses++;
        if (thrill) {
          this.stats.thrills++;
          this.slowmo(0.45, 0.32);
        }
        this.emit('nearMiss', { thrill, rock: i, by: this.lastCatchBy, clearance: tr.min });
      }
    }
    if (this.nearTrack.size > 60) {
      for (const k of this.nearTrack.keys()) if (ROCKS[k].d < h.d - 20) this.nearTrack.delete(k);
    }
  }

  trackCanyon() {
    const h = this.house;
    const c = this.canyon;
    if (c.done) return;
    if (h.d > BOTTLENECK.d0 && h.d < BOTTLENECK.d1) {
      if (!c.active) {
        c.active = true;
        this.emit('canyonGate');
      }
      c.maxSqueeze = Math.max(c.maxSqueeze, h.squeeze);
      if (Math.abs(h.d - BOTTLENECK.dNarrow) < 3) {
        if (Math.abs(Math.sin(h.psi)) > 0.55) c.sideways = true;
        if (!h.parts.has('L') || !h.parts.has('R') || h.door) c.slim = true;
      }
    } else if (c.active && h.d >= BOTTLENECK.d1) {
      c.done = true;
      let method = 'clean';
      if (c.maxSqueeze > 0.05) method = 'squeeze';
      else if (c.sideways) method = 'sideways';
      else if (c.slim) method = 'slim';
      this.stats.canyon = method;
      this.emit('canyonPassed', { method });
    }
  }

  updateSection() {
    const s = sectionAt(this.house.d);
    if (s !== this.section) {
      this.section = s;
      this.emit('section', { name: s.name, icon: s.icon });
    }
  }

  checkArrival() {
    const h = this.house;
    const front = h.d + (h.door ? 1.0 : 2.4);
    if (front >= beachLine(h.u) - 0.3) {
      this.state = 'arrived';
      this.stats.time = this.runTime;
      const aboard = this.aboard();
      let id;
      if (h.door) id = 'door';
      else if (aboard.length === 3) id = this.hp >= 0.6 ? 'fair' : 'wreck';
      else if (aboard.length === 2) id = 'two';
      else id = 'alone';
      this.endingId = id;
      this.paddle.flight = null;
      this.emit('arrive', { ending: id, aboard });
    }
  }

  stepArrived(dt) {
    const h = this.house;
    // slide up onto the sand and settle
    h.vd *= Math.exp(-dt * 2.6);
    h.vu *= Math.exp(-dt * 3);
    h.omega *= Math.exp(-dt * 3);
    h.psi += h.omega * dt;
    h.d += h.vd * dt;
    h.u += h.vu * dt;
    h.roll *= Math.exp(-dt * 2);
    h.pitch += (-0.05 - h.pitch) * Math.min(1, dt * 2);
    h.heave += (0.32 - h.heave) * Math.min(1, dt * 1.5);
  }

  updateFloaters(dt) {
    const h = this.house;
    for (const f of this.floaters) {
      f.t += dt;
      const sp = flowSpeed(f.d);
      if (f.kind === 'room') {
        const o = OWNER_DEFS[f.id];
        const targetU = o.side === 0 ? f.u : o.side * (halfWidth(f.d) - 4);
        f.vu += ((targetU - f.u) * 0.25 - f.vu) * Math.min(1, dt * 0.8);
        f.vd += (sp * 0.42 - f.vd) * Math.min(1, dt * 0.9);
        f.omega += (0.25 * (o.side || 1) - f.omega) * dt * 0.5;
      } else {
        f.vu *= Math.exp(-dt * 0.6);
        f.vd += (sp * 0.5 - f.vd) * Math.min(1, dt * 0.7);
        f.omega *= Math.exp(-dt * 0.3);
      }
      f.u += f.vu * dt;
      f.d += f.vd * dt;
      f.psi += f.omega * dt;
      const hw = halfWidth(f.d);
      if (Math.abs(f.u) > hw - 2) {
        f.u = Math.sign(f.u) * (hw - 2);
        f.vu *= -0.3;
      }
      f.visible = f.d > h.d - 70;
    }
  }
}

export function ownerName(id) {
  return OWNER_DEFS[id].name;
}
