// 공동명의 급류타기 — entry point: wires the simulation to the toon renderer, audio and UI.
import * as THREE from 'three';
import { Game, OWNER_IDS, OWNER_DEFS, ENDINGS, STAGE } from './sim/game.js';
import { ROCKS, POOLS, flowSpeed, roughness, cliffHeight, halfWidth, toWorld, heading, beachLine, BEACH_D } from './sim/course.js';
import { createRiver } from './view/water.js';
import { createLights, createSky, createBanks, createRocks, createDock, createBeach } from './view/world.js';
import { HouseView } from './view/houseView.js';
import { PaddleView } from './view/paddleView.js';
import { CameraRig } from './view/camera.js';
import { FX } from './view/fx.js';
import { AudioEngine } from './audio/audio.js';
import { UI } from './ui/ui.js';
import { pickLine } from './view/lines.js';
import { clamp } from './util/math.js';
import { Y0 } from './view/houseModel.js';
import { mesh, G } from './view/toon.js';

const $ = (s) => document.querySelector(s);
const STORE_KEY = 'gongdong-rafting-v1';
const params = new URLSearchParams(location.search);

function loadStore() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || { endings: [], runs: 0 };
  } catch {
    return { endings: [], runs: 0 };
  }
}
function saveStore(s) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(s));
  } catch {
    /* private mode: fine */
  }
}

class App {
  constructor() {
    this.frame = $('#frame');
    this.canvas = $('#game');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.setClearColor('#bfe6ff');
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#c4e9ff', 75, 235);
    this.camera = new THREE.PerspectiveCamera(56, 0.5, 0.3, 900);
    this.rig = new CameraRig(this.camera);
    this.audio = new AudioEngine();
    this.ui = new UI(this.frame, this.camera, this.audio);
    this.fx = new FX(this.scene);
    createLights(this.scene);
    this.sky = createSky(this.scene);
    this.river = createRiver(this.scene);
    createBanks(this.scene);
    createRocks(this.scene);
    this.dock = createDock(this.scene);
    this.beach = createBeach(this.scene);
    this.store = loadStore();
    this.state = 'title';
    this.paused = false;
    this.photos = [];
    this.pendingShots = [];
    this.timers = [];
    this.hintFlags = {};
    this.newGame();
    this.bindInput();
    this.resize();
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'play') this.pause(true);
    });
    this.ui.renderEndingsFound(this.store.endings);
    this.last = performance.now();
    this.frameTimes = [];
    this.titleTalkT = 1.5;
    requestAnimationFrame((t) => this.loop(t));
    $('#loading').classList.add('done');
    window.__rafting = this;
  }

  newGame() {
    if (this.house) this.house.dispose();
    if (this.paddle) this.paddle.obj.parent?.remove(this.paddle.obj);
    for (const o of this.endingProps || []) o.parent?.remove(o);
    this.endingProps = [];
    this.fx.clear();
    this.ui.clearBubbles();
    this.game = new Game();
    this.house = new HouseView(this.scene, this.fx, this.audio, this.ui);
    this.paddle = new PaddleView(this.house, this.fx, this.audio);
    this.ctx = { views: this.house.views, fx: this.fx, audio: this.audio };
    _v.copy(this.dock.bollard.position).setY(1.3);
    this.house.update(0, this.game, this.ctx);
    this.house.attachMooring(_v);
    this.photos = [];
    this.pendingShots = [];
    for (const t of this.timers) clearTimeout(t);
    this.timers = [];
    this.hintFlags = {};
    this.lastRoar = 0;
    this.sprayT = 1;
    this.ending = null;
    this.rig.setMode('title');
    this.rig.blend = 1;
  }

  later(ms, fn) {
    const id = setTimeout(() => {
      this.timers = this.timers.filter((x) => x !== id);
      fn();
    }, ms);
    this.timers.push(id);
  }

  resize() {
    const r = this.frame.getBoundingClientRect();
    const w = Math.max(1, Math.round(r.width));
    const h = Math.max(1, Math.round(r.height));
    this.renderer.setSize(w, h, false);
    this.rig.resize(w / h);
    this.ui.resize(w, h);
    this.w = w;
    this.h = h;
  }

  // ---------- input ----------
  bindInput() {
    this.canvas.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      if (this.state !== 'play' || this.paused) return;
      const r = this.canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      this.tapAt(x, y);
    }, { passive: false });
    window.addEventListener('keydown', (e) => {
      if (this.state === 'play' && !this.paused) {
        const map = { a: 'L', arrowleft: 'L', s: 'C', arrowdown: 'C', d: 'R', arrowright: 'R', 1: 'L', 2: 'C', 3: 'R' };
        const id = map[e.key.toLowerCase()];
        if (id) this.tapOwner(id);
      }
      if (e.key === 'Escape' && this.state === 'play') this.pause(!this.paused);
    });
    $('#btn-start').addEventListener('click', () => this.start());
    $('#btn-pause').addEventListener('click', () => this.pause(true));
    $('#btn-resume').addEventListener('click', () => this.pause(false));
    $('#btn-restart').addEventListener('click', () => {
      this.pause(false);
      this.restart();
    });
    $('#btn-sound').addEventListener('click', () => {
      this.audio.setMuted(!this.audio.muted);
      $('#btn-sound').textContent = `소리: ${this.audio.muted ? '꺼짐' : '켜짐'}`;
    });
    $('#btn-music').addEventListener('click', () => {
      this.audio.musicOn = !this.audio.musicOn;
      $('#btn-music').textContent = `음악: ${this.audio.musicOn ? '켜짐' : '꺼짐'}`;
    });
    $('#btn-again').addEventListener('click', () => this.restart());
    $('#btn-home').addEventListener('click', () => this.home());
  }

  tapAt(x, y) {
    let best = null;
    let bestD = Infinity;
    for (const id of this.game.aboard()) {
      const p = this.ui.project(this.house.views[id].chestWorld(_v));
      const d = Math.hypot(p.x - x, (p.y - y) * 0.85);
      if (d < bestD) {
        bestD = d;
        best = id;
      }
    }
    this.ui.tapRing(x, y);
    if (best) this.tapOwner(best);
  }

  tapOwner(id) {
    const ok = this.game.tap(id);
    if (ok) this.hintFlags.thrown = true;
  }

  // ---------- flow ----------
  start() {
    this.audio.init();
    this.audio.ui();
    this.audio.startMusic();
    this.ui.show('#screen-title', false);
    this.ui.showHUD(true);
    this.state = 'play';
    this.rig.setMode('play');
    this.store.runs++;
    saveStore(this.store);
    this.ui.showBanner('준비…');
    this.later(1300, () => {
      this.game.launch();
      this.house.snapMooring();
      this.ui.showBanner('출발!', '세 집주인, 노는 하나');
      this.audio.splash(0.8);
    });
  }

  restart() {
    this.ui.show('#screen-end', false);
    this.newGame();
    this.state = 'title';
    this.start();
  }

  home() {
    this.ui.show('#screen-end', false);
    this.ui.showHUD(false);
    this.ui.setHint(null);
    this.newGame();
    this.state = 'title';
    this.ui.show('#screen-title', true);
    this.ui.renderEndingsFound(this.store.endings);
  }

  pause(on) {
    if (this.state !== 'play' && on) return;
    this.paused = on;
    this.ui.show('#screen-pause', on);
    if (on) this.audio.suspend();
    else this.audio.resume();
  }

  // ---------- main loop ----------
  loop(now) {
    requestAnimationFrame((t) => this.loop(t));
    let dt = (now - this.last) / 1000;
    this.last = now;
    dt = Math.min(dt, 0.05);
    if (this.manual) return;
    this.frame_(dt);
  }

  // deterministic stepping for tests: advance n frames of dt each, then render
  step(dt = 1 / 60, n = 1) {
    for (let i = 0; i < n; i++) this.frame_(dt);
  }

  frame_(dt) {
    if (!this.manual) this.adaptQuality(dt);
    if (this.paused) return;
    const game = this.game;
    if (this.state === 'play' || this.state === 'ending' || this.state === 'failed') {
      if (this.auto && this.state === 'play') this.autopilot(dt);
      for (let i = 0; i < (this.fast || 1); i++) game.update(dt);
    } else game.update(0);
    const sdt = dt * game.timeScale;
    this.handleEvents();
    this.house.update(sdt, game, this.ctx);
    this.paddle.update(sdt, game);
    this.fx.update(sdt);
    this.rig.update(dt, game, this.ending || {});
    this.river.update(performance.now() / 1000, game.house);
    this.sky.update(this.camera);
    this.updateAmbience(dt);
    if (this.state === 'play') {
      this.ui.updateHUD(game);
      this.updateHints();
      this.updateSpray(dt);
    }
    if (this.state === 'title') this.titleChatter(dt);
    if (this.ending) this.updateEnding(dt);
    this.renderer.render(this.scene, this.camera);
    this.processShots();
    this.ui.updateBubbles((id) => this.bubbleAnchor(id));
    if (this.state === 'play') {
      const showTags = this.game.runTime < 14 && this.game.house.d < 120;
      if (showTags !== !!this.ui.tagsOn) this.ui.showTags(showTags);
      this.ui.updateTags((id) => (this.game.owners[id].state === 'aboard' ? this.house.views[id].root.getWorldPosition(_v2) : null));
    } else if (this.ui.tagsOn) this.ui.showTags(false);
  }

  adaptQuality(dt) {
    this.frameTimes.push(dt);
    if (this.frameTimes.length < 90) return;
    const avg = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
    this.frameTimes.length = 0;
    if (avg > 0.026 && this.pixelRatio > 1) {
      this.pixelRatio = Math.max(1, this.pixelRatio - 0.35);
      this.renderer.setPixelRatio(this.pixelRatio);
      this.resize();
    }
  }

  bubbleAnchor(id) {
    const v = this.house.views[id];
    const o = this.game.owners[id];
    if (!v || !v.root.parent) return null;
    if (o.state !== 'aboard' && !this.ending) {
      // keep bubbles for departed owners only while they are still near
      const f = this.game.floaters.find((x) => x.id === id);
      if (!f || f.d < this.game.house.d - 25) return null;
    }
    return v.headWorld(new THREE.Vector3()).add(_up);
  }

  // ---------- events from the simulation ----------
  handleEvents() {
    const game = this.game;
    const ui = this.ui;
    const audio = this.audio;
    for (const e of game.events) {
      const v = e.id ? this.house.views[e.id] : null;
      switch (e.type) {
        case 'launch':
          break;
        case 'throw': {
          this.house.views[e.from].onThrow(e);
          this.paddle.onThrow(e);
          break;
        }
        case 'catch': {
          v.onCatch();
          audio.catchTok(this.panOf(e.id));
          vibrate(8);
          if (!e.relay) {
            if (e.eager > 0.6) ui.say(e.id, 'eagerCatch', { force: true, mood: 'happy' });
            else if (Math.random() < 0.55) ui.say(e.id, 'catch', { mood: 'happy' });
          }
          break;
        }
        case 'stroke': {
          v.onStroke(e, game);
          if (e.big) {
            this.rig.punch(0.6);
            this.rig.shake(0.12);
            audio.creak(0.7);
          }
          break;
        }
        case 'rest':
          if (Math.random() < 0.08) ui.say(e.id, 'rest', { minGap: 4000 });
          break;
        case 'already':
          ui.say(e.id, 'already', { minGap: 2500 });
          break;
        case 'stage': {
          if (!e.up) break;
          const kinds = [null, 'annoyed', 'steaming', 'saw'];
          const k = kinds[e.stage];
          if (k) ui.say(e.id, k, { force: true, angry: e.stage >= 2 });
          if (e.stage === STAGE.STEAMING) audio.steamWhistle();
          if (e.stage === STAGE.SAW) {
            audio.sawTwang();
            if (!this.hintFlags.saw) {
              this.hintFlags.saw = true;
              this.flashHint(`톱을 꺼냈다! 그 사람에게 <b class="${e.id}">노를 던져</b> 달래 주세요`, 4200);
            }
          }
          if (e.stage === STAGE.STEAMING && !this.hintFlags.steam) {
            this.hintFlags.steam = true;
            this.flashHint('노를 오래 못 받으면 <b>삐쳐요</b>. 가끔은 넘겨 주세요', 3800);
          }
          break;
        }
        case 'sawStart': {
          ui.say(e.id, 'sawing', { force: true, angry: true });
          ui.popup('쓱싹쓱싹', v.headWorld(_v), 'saw');
          for (const id of game.aboard()) {
            if (id === e.id) continue;
            this.house.views[id].onShock(new THREE.Vector3(v.pos.x, 0, v.pos.y));
            this.later(500 + Math.random() * 400, () => ui.say(id, 'protest', { force: true, angry: true }));
          }
          break;
        }
        case 'appease': {
          v.onAppease();
          ui.say(e.id, 'appeased', { force: true });
          ui.popup(e.last ? '막판 달래기!' : '달래기 성공!', v.headWorld(_v), 'good');
          audio.stinger('appease');
          break;
        }
        case 'cutDone': {
          ui.say(e.id, '그럼 이만~', { force: true, mood: 'happy', dur: 1200 });
          this.audio.slideUp();
          for (const id of game.aboard()) {
            if (id === e.id) continue;
            this.house.views[id].onShock(new THREE.Vector3(v.pos.x, 0, v.pos.y));
            ui.say(id, 'shock', { force: true });
          }
          break;
        }
        case 'detach':
          this.onDetach(e);
          break;
        case 'hit':
          this.onHit(e);
          break;
        case 'scrape':
          this.house.onScrape(e, game);
          if (Math.random() < 0.4) ui.popup('끼이익', this.house.root.position.clone().setY(2), 'small');
          break;
        case 'nearMiss': {
          const p = this.house.root.position.clone();
          p.y = 2.5;
          if (e.thrill) {
            ui.popup('아슬아슬!', p, 'thrill');
            this.rig.punch(1);
            audio.nearMiss(true);
            if (e.by && game.owners[e.by].state === 'aboard') ui.say(e.by, 'near', { force: true, mood: 'happy' });
            for (const id of game.aboard()) if (id !== e.by && Math.random() < 0.5) this.house.views[id].onCheer(0.9);
          } else {
            ui.popup('휴~', p, 'small');
            audio.nearMiss(false);
          }
          break;
        }
        case 'whirlEnter':
          ui.popup('빙글빙글~', this.house.root.position.clone().setY(3), 'thrill');
          audio.stinger('whirl');
          for (const id of game.aboard()) this.later(300 + Math.random() * 500, () => ui.say(id, 'dizzy'));
          break;
        case 'whirlExit':
          ui.popup(e.early ? '탈출!' : '휘익!', this.house.root.position.clone().setY(3), 'good');
          audio.whoosh();
          this.rig.shake(0.2);
          break;
        case 'section':
          this.onSection(e);
          break;
        case 'canyonGate':
          break;
        case 'canyonPassed': {
          const txt = { squeeze: '억지로 비집고 통과!', sideways: '옆으로 끼워 통과!', slim: '날씬하게 통과!', clean: '깔끔하게 통과!' }[e.method];
          ui.popup(txt, this.house.root.position.clone().setY(3), e.method === 'squeeze' ? 'small' : 'good');
          break;
        }
        case 'shatter':
          this.onShatter(e);
          break;
        case 'fail':
          this.onFail(e);
          break;
        case 'arrive':
          this.onArrive(e);
          break;
        default:
          break;
      }
    }
    game.events.length = 0;
  }

  panOf(id) {
    return id === 'L' ? -0.5 : id === 'R' ? 0.5 : 0;
  }

  flashHint(html, ms) {
    this.ui.setHint(html);
    this.hintUntil = performance.now() + ms;
  }

  updateHints() {
    const g = this.game;
    const now = performance.now();
    if (this.hintUntil && now < this.hintUntil) return;
    if (this.hintUntil && now >= this.hintUntil) {
      this.hintUntil = 0;
      this.ui.setHint(null);
    }
    if (g.state !== 'running') return;
    if (!this.hintFlags.thrown) {
      if (g.house.d > 52) this.ui.setHint('바위다! <b class="L">좌봉식</b>(←) 이나 <b class="R">우말순</b>(→) 을 탭!');
      else this.ui.setHint('집주인을 <b>탭</b>하면 노가 날아가요');
    } else if (!this.hintFlags.firstDone) {
      this.hintFlags.firstDone = true;
      this.flashHint('받은 사람은 <b>자기 쪽으로만</b> 저어요!', 2600);
    }
  }

  onSection(e) {
    const subs = {
      '첫 여울': '바위가 몰려온다',
      '바위 정원': '틈을 노려라',
      '소용돌이 굽이': '들어가면 한 바퀴 돌고 튕겨 나가요',
      '좁은 협곡': '집이 넓으면 양쪽 벽에 긁혀요',
      '둘째 여울': '물살이 거세진다',
      '마지막 급류': '기슭까지 버텨라!',
      '기슭': '거의 다 왔다!',
    };
    this.ui.showBanner(`${e.name}!`, subs[e.name] || '');
    this.audio.stinger('section');
  }

  onHit(e) {
    const game = this.game;
    const s = e.strength;
    if (e.door) {
      this.ui.popup('쩌억!', this.house.root.position.clone().setY(1.5), 'hit');
      this.audio.crash(0.9);
      this.rig.shake(0.8);
      this.ui.flashScreen(0.5, '#ff6a4a');
      vibrate([60, 30, 60]);
      const rider = game.paddle.holder;
      if (rider) this.ui.say(rider, '문짝에 금이 갔어!!', { force: true, angry: true });
      return;
    }
    this.house.onHit(e, game);
    const p = this.house.root.position.clone();
    p.y = 2;
    this.ui.popup(s > 0.7 ? '쾅!!' : e.kind === 'bank' ? '쿵!' : '쾅!', p, 'hit');
    this.audio.crash(s);
    this.rig.shake(0.35 + s * 0.6);
    this.ui.flashScreen(0.18 + s * 0.25);
    vibrate(Math.round(30 + 50 * s));
    this.ui.splashDrops(Math.round(2 + 4 * s));
    const aboard = game.aboard();
    if (aboard.length) {
      const who = aboard[Math.floor(Math.random() * aboard.length)];
      this.ui.say(who, 'hit', { force: true, angry: true });
      // and somebody always blames whoever had the paddle
      const holder = game.paddle.holder;
      const blamer = aboard.find((x) => x !== holder && x !== who);
      if (holder && blamer && Math.random() < 0.7) {
        this.later(650, () => {
          const bv = this.house.views[blamer];
          const hv = this.house.views[holder];
          if (!bv || !hv) return;
          bv.onBlame(new THREE.Vector3(hv.pos.x, 0, hv.pos.y));
          this.ui.say(blamer, 'blame', { force: true, angry: true });
        });
      }
    }
  }

  onDetach(e) {
    const game = this.game;
    const v = this.house.views[e.id];
    this.house.onDetach(e, game);
    this.audio.drop();
    vibrate([30, 30, 30]);
    const p = v.headWorld(new THREE.Vector3());
    this.ui.popup('똑!', p, 'drop');
    this.rig.shake(0.25);
    this.later(900, () => this.ui.say(e.id, 'farewell', { force: true, mood: 'happy', dur: 2400 }));
    for (const id of game.aboard()) this.house.views[id].onShock(new THREE.Vector3(v.pos.x, 0, v.pos.y));
    if (game.aboard().length === 1) this.later(2600, () => this.ui.say(game.aboard()[0], 'lone', { force: true }));
    const name = OWNER_DEFS[e.id].name;
    const what = { L: '침대와 장미 화분', R: '침대와 해바라기 화분', C: '침대와 선인장' }[e.id];
    this.pendingShots.push({ at: performance.now() + 1150, key: `room-${e.id}`, caption: `${name}, ${what}과 함께 떠나다 · ${Math.round(e.d)}m` });
  }

  onShatter(e) {
    const game = this.game;
    this.house.onShatter(e, game);
    this.paddle.obj.parent !== this.house.views[e.rider].root && this.house.views[e.rider].root.attach(this.paddle.obj);
    this.ui.popup('와장창!!', this.house.root.position.clone().setY(2.5), 'thrill');
    this.audio.crash(1);
    this.audio.stinger('shatter');
    this.rig.shake(1);
    this.ui.flashScreen(0.7);
    this.ui.splashDrops(8);
    vibrate([80, 40, 120]);
    this.later(700, () => this.ui.say(e.rider, '내 집이… 문짝만 남았어!', { force: true, angry: true, dur: 2200 }));
    for (const id of e.overboard) this.later(1200 + Math.random() * 600, () => this.ui.say(id, '어푸어푸!', { force: true }));
    this.flashHint('문짝 한 장! <b>바위 한 번만 더 맞으면 끝</b>', 3500);
    this.pendingShots.push({ at: performance.now() + 500, key: 'house', caption: `와장창! · ${Math.round(game.house.d)}m` });
  }

  onFail() {
    const game = this.game;
    this.state = 'failed';
    this.ui.setHint(null);
    this.fx.burst(this.house.root.position, 1.5);
    this.audio.crash(1);
    this.audio.failJingle();
    this.audio.stopMusic();
    this.rig.setMode('fail');
    const rider = game.paddle.holder;
    if (rider) {
      this.house.views[rider].forced = 'swim';
      this.ui.say(rider, '어푸… 내 집…!', { force: true, dur: 2500 });
    }
    if (this.house.doorRaft) this.house.doorRaft.rotation.z = 0.5;
    this.later(2400, () => this.showFail());
  }

  showFail() {
    const g = this.game;
    const pct = Math.round(g.progress() * 100);
    const photos = this.photos.map((p) => ({ src: p.src, caption: p.caption }));
    this.ui.showHUD(false);
    this.ui.showEndPanel({
      fail: true,
      kicker: '침몰',
      title: '문짝마저 쪼개졌다!',
      sub: `기슭까지 ${pct}% 왔어요`,
      desc: '집도, 문짝도 강물에 흩어졌다. 그래도 세 사람은 어딘가에서 또 서로 자기 집이라고 우기고 있을 것이다. 다시 한 번?',
      captain: '',
      photos,
      stats: this.statLines(),
    });
  }

  // ---------- endings ----------
  onArrive(e) {
    const game = this.game;
    this.state = 'ending';
    this.ui.setHint(null);
    this.ui.showHUD(false);
    this.audio.stopMusic();
    this.later(400, () => this.audio.fanfare());
    this.ui.showBanner('도착!', ENDINGS[e.ending].title);
    this.ending = { id: e.ending, t: 0, steps: new Set(), endD: game.house.d + 12.5, endU: 0, endH: 0 };
    this.rig.setMode('end');
    if (!this.store.endings.includes(e.ending)) {
      this.store.endings.push(e.ending);
      this.ending.isNew = true;
    }
    saveStore(this.store);
    // the departed have, of course, already arrived — lounging on the sand
    this.parkDeparted();
    for (const id of game.aboard()) {
      this.house.views[id].forced = 'cheer';
      this.house.views[id].forcedFace = Math.PI;
    }
  }

  parkDeparted() {
    const g = this.game;
    const hu = g.house.u;
    const hd = g.house.d;
    const slots = [[-3.4, 7.2], [3.4, 7.2], [-2.4, 10.6], [2.4, 10.6], [0, 12.5]];
    const order = ['L', 'R', 'C'];
    const list = [...g.floaters].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    list.forEach((f, i) => {
      const key = f.kind === 'room' ? `room-${f.id}` : `swim-${f.id}`;
      const fv = this.house.floaterViews.get(key);
      if (!fv) return;
      let slot = slots[Math.min(i, slots.length - 1)];
      if (list.length === 1) slot = f.id === 'R' ? slots[1] : slots[0];
      const u = hu + slot[0];
      const d = Math.max(hd + slot[1], beachLine(u) + 1.5);
      toWorld(u, d, tmpW);
      fv.parked = true;
      fv.keep = true;
      fv.container.visible = true;
      const lift = f.kind === 'room' ? -0.5 : 0.15;
      fv.container.position.set(tmpW.x, this.beach.heightAt(u, d) + lift, tmpW.z);
      fv.container.rotation.set(0, -heading(d) + Math.PI + (slot[0] < 0 ? -0.35 : 0.35), 0);
      if (fv.skirt) fv.skirt.visible = false;
      const v = this.house.views[f.id];
      v.forced = 'farewell';
      v.forcedFace = 0;
    });
  }

  updateEnding(dt) {
    const E = this.ending;
    const g = this.game;
    E.t += dt;
    const once = (key, at, fn) => {
      if (E.t >= at && !E.steps.has(key)) {
        E.steps.add(key);
        fn();
      }
    };
    if (this.state === 'failed') return;
    const aboard = g.aboard();
    const views = this.house.views;
    const id = E.id;
    once('beachSplash', 0.3, () => {
      this.fx.splash(this.house.root.position, 2);
      this.audio.thud(0.6);
    });
    once('departedWave', 1.6, () => {
      for (const f of g.floaters) this.later(Math.random() * 600, () => this.ui.say(f.id, f.kind === 'room' ? '늦었네~!' : '여기야~!', { force: true, mood: 'happy', dur: 2200 }));
    });
    once('confetti', 1.2, () => {
      toWorld(0, BEACH_D + 12, tmpW);
      this.fx.confetti(new THREE.Vector3(tmpW.x, 5, tmpW.z), 80);
    });
    if (id === 'fair') {
      once('hug', 2.2, () => {
        for (const oid of aboard) {
          const v = views[oid];
          v.forced = 'hug';
          v.forcedPos = { x: oid === 'L' ? -0.9 : oid === 'R' ? 0.9 : 0, z: 0.9 };
          v.forcedFace = oid === 'C' ? Math.PI : oid === 'L' ? Math.PI / 2 : -Math.PI / 2;
        }
      });
      once('claim', 3.8, () => {
        for (const oid of aboard) {
          views[oid].forced = 'point';
          views[oid].forcedFace = Math.PI + (oid === 'L' ? 0.6 : oid === 'R' ? -0.6 : 0);
          views[oid].forcedPos = null;
          this.later(Math.random() * 200, () => this.ui.say(oid, '내 집!', { force: true, angry: true, dur: 2000 }));
        }
      });
    } else if (id === 'wreck') {
      once('lastWall', 1.6, () => {
        const wall = this.house.pieces.find((p) => p.kind === 'wall' && p.state < 2 && this.house.present.has(p.part));
        if (wall) {
          wall.state = 2;
          wall.anim = { type: 'fall', t: 0, w: 0 };
        }
      });
      once('cheer', 3.2, () => {
        for (const oid of aboard) {
          views[oid].forced = 'cheer';
          this.ui.say(oid, ['그래도 집이다!', '셋 다 살았다!', '벽은 또 세우면 돼!'][OWNER_IDS.indexOf(oid)], { force: true, mood: 'happy', dur: 2000 });
        }
      });
    } else if (id === 'two') {
      once('shake', 2.0, () => {
        const [a, b] = aboard;
        views[a].forced = 'handshake';
        views[b].forced = 'handshake';
        this.ui.say(a, '우리 둘이 반반!', { force: true, mood: 'happy' });
      });
      once('eye', 3.6, () => {
        for (const oid of aboard) {
          views[oid].forced = 'saw';
          this.ui.say(oid, '…반반?', { force: true, dur: 1800 });
        }
        this.showMiddleCut();
      });
    } else if (id === 'alone') {
      once('flag', 2.0, () => {
        const oid = aboard[0];
        const v = views[oid];
        v.forced = 'flag';
        const flag = new THREE.Group();
        mesh(G.cyl(0.03, 0.03, 1.6, 6), '#5b3a1e', flag, [0, 0.8, 0], [0, 0, 0], 0.015);
        const cloth = mesh(G.box(0.6, 0.4, 0.02), OWNER_DEFS[oid].color, flag, [0.3, 1.4, 0], [0, 0, 0], 0.015);
        void cloth;
        flag.position.set(0.35, 0, 0.35);
        v.root.add(flag);
        this.endingProps.push(flag);
        this.ui.say(oid, pickLine(oid, 'lone'), { force: true, mood: 'happy', dur: 2400 });
      });
    } else if (id === 'door') {
      const raft = this.house.doorRaft;
      once('standUp', 1.8, () => {
        this.ui.say(aboard[0], '영차…', { force: true });
      });
      if (raft && E.t > 1.8) {
        const k = clamp((E.t - 1.8) / 0.8, 0, 1);
        raft.rotation.x = -k * Math.PI / 2;
        raft.position.set(0, k * 1.05, -k * 1.0);
        const v = views[aboard[0]];
        if (v && v.root.parent === raft && k > 0.05) {
          this.house.tilt.attach(v.root);
          v.forcedPos = { x: 0, z: 0.9 };
          v.forcedFace = Math.PI;
          v.root.position.y = 0.25;
        }
      }
      once('greet', 3.0, () => this.ui.say(aboard[0], '다녀왔습니다~', { force: true, mood: 'happy', dur: 2200 }));
      once('walkIn', 4.2, () => {
        const v = views[aboard[0]];
        v.forcedPos = { x: 0, z: -1.6 };
        this.audio.thud(0.4);
      });
    }
    once('photo', 4.6, () => {
      this.pendingShots.push({ at: 0, key: 'final', caption: `${ENDINGS[id].title} · ${formatTime(g.stats.time)}`, big: true });
    });
    once('panel', 5.4, () => this.showEnd());
  }

  showMiddleCut() {
    const line = new THREE.Group();
    for (let i = 0; i < 12; i++) mesh(G.box(0.05, 0.02, 0.16), '#ffffff', line, [0, Y0 + 0.02, -2.2 + i * 0.32], [0, 0, 0], 0);
    this.house.tilt.add(line);
    this.endingProps.push(line);
  }

  showEnd() {
    const g = this.game;
    const E = ENDINGS[this.ending.id];
    const aboard = g.aboard();
    const nm = (id) => OWNER_DEFS[id].name;
    const gone = g.stats.lost.map((l) => nm(l.id));
    let desc = '';
    switch (this.ending.id) {
      case 'fair':
        desc = '노를 이리저리 공평하게 던진 덕에 셋 다 온전한 집으로 기슭에 닿았다. 내리자마자 서로 "내 집!"이라며 삿대질을 시작한다.';
        break;
      case 'wreck':
        desc = '지붕은 떠내려가고 벽은 쓰러졌지만, 셋은 끝까지 함께 노를 돌렸다. 마지막 남은 벽이 쿵 하고 쓰러지자 셋이 동시에 웃음을 터뜨린다.';
        break;
      case 'two':
        desc = `${gone[0]}은 자기 방을 썰어 타고 먼저 와서 모래밭에 누워 있었다. 남은 ${aboard.map(nm).join('과 ')}은 악수를 하다 말고, 집 한가운데 그어진 절취선을 바라본다.`;
        break;
      case 'alone':
        desc = `${gone.join('과 ')}은 각자 방을 썰어 떠났고, 벌써 기슭에서 손을 흔들고 있다. ${aboard.map(nm)[0]}이 남은 집에 깃발을 꽂는다. "이제 단독명의!"`;
        break;
      case 'door':
        desc = `집은 산산조각 났지만 ${aboard.map(nm)[0]}은 끝까지 문짝 한 장을 저어 기슭에 닿았다. 문짝을 세우고, 문을 열고, 들어간다. "다녀왔습니다."`;
        break;
      default:
        break;
    }
    const photos = [];
    const fin = this.photos.find((p) => p.key === 'final');
    if (fin) photos.push({ src: fin.src, caption: fin.caption, big: true });
    for (const p of this.photos) if (p.key !== 'final') photos.push({ src: p.src, caption: p.caption });
    this.ui.showEndPanel({
      kicker: this.ending.isNew ? '새 도착 장면 발견!' : '도착',
      title: E.title,
      sub: E.sub,
      desc,
      captain: `🏅 ${this.captainTitle()}`,
      photos,
      stats: this.statLines(),
    });
  }

  captainTitle() {
    const s = this.game.stats;
    const aboard = this.game.aboard().length;
    if (this.ending?.id === 'door') return '문짝 선장';
    if (aboard === 3 && s.hits <= 2) return '공평무사 명선장';
    if (s.lastSecondAppease >= 1 && aboard === 3) return '막판 달래기의 달인';
    if (s.thrills >= 6) return '아슬아슬 전문 선장';
    if (s.lost.length >= 2) return '냉정한 선장';
    if (s.whirlRides >= 2) return '빙글빙글 선장';
    if (s.canyon === 'sideways') return '옆걸음 선장';
    if (s.appeased >= 3) return '달래기 9단 선장';
    if (s.hits >= 8) return '부딪히며 배우는 선장';
    return '얼떨결에 선장';
  }

  statLines() {
    const s = this.game.stats;
    const lines = [
      { text: `⏱ ${formatTime(s.time || this.game.runTime)}` },
      { text: `노 던지기 ${s.throws}번` },
      { text: `아슬아슬 ${s.thrills}번` },
      { text: `쾅! ${s.hits}번` },
    ];
    if (s.appeased) lines.push({ text: `달래기 ${s.appeased}번`, badge: true });
    if (s.lastSecondAppease) lines.push({ text: '막판 달래기 성공', badge: true });
    if (s.whirlRides) lines.push({ text: `소용돌이 ${s.whirlRides}바퀴`, badge: true });
    const cm = { squeeze: '협곡: 억지로 비집기', sideways: '협곡: 옆으로 끼우기', slim: '협곡: 날씬하게', clean: '협곡: 깔끔하게' }[s.canyon];
    if (cm) lines.push({ text: cm, badge: s.canyon !== 'squeeze' });
    if (s.keaton) lines.push({ text: '창문 구멍으로 살아남기', badge: true });
    if (s.lost.length) lines.push({ text: `떠나보낸 방 ${s.lost.length}개` });
    return lines;
  }

  // ---------- polaroid snapshots ----------
  processShots() {
    if (!this.pendingShots.length) return;
    const now = performance.now();
    for (let i = this.pendingShots.length - 1; i >= 0; i--) {
      const s = this.pendingShots[i];
      if (now < s.at) continue;
      this.pendingShots.splice(i, 1);
      let center;
      if (s.key === 'final') center = { x: this.w / 2, y: this.h * 0.45 };
      else if (s.key === 'house') center = this.ui.project(this.house.root.position);
      else {
        const fv = this.house.floaterViews.get(s.key);
        if (!fv) continue;
        center = this.ui.project(fv.container.getWorldPosition(new THREE.Vector3()).setY(1));
      }
      const src = this.snapshot(center, s.big ? 0.9 : 0.55, s.caption);
      if (src) this.photos.push({ key: s.key, src, caption: s.caption });
    }
  }

  snapshot(center, frac, caption) {
    try {
      const cv = document.createElement('canvas');
      const out = 300;
      cv.width = out;
      cv.height = out;
      const ctx2 = cv.getContext('2d');
      const src = this.renderer.domElement;
      const scale = src.width / this.w;
      const size = Math.min(src.width, src.height) * frac;
      let sx = center.x * scale - size / 2;
      let sy = center.y * scale - size / 2;
      sx = clamp(sx, 0, src.width - size);
      sy = clamp(sy, 0, src.height - size);
      ctx2.drawImage(src, sx, sy, size, size, 0, 0, out, out);
      // warm photo tint
      ctx2.fillStyle = 'rgba(255, 220, 160, 0.12)';
      ctx2.fillRect(0, 0, out, out);
      void caption;
      return cv.toDataURL('image/jpeg', 0.82);
    } catch {
      return null;
    }
  }

  // ---------- test hooks (used by tools/shots.mjs) ----------
  debugJump(d, u = 0) {
    const h = this.game.house;
    h.d = d;
    h.u = u;
    h.vu = 0;
    h.vd = flowSpeed(d);
    h.psi = 0;
    h.omega = 0;
    h.whirl = null;
    h.whirlCooldown = 1;
    this.rig.d = d;
    this.rig.u = u * 0.72;
  }

  autopilot(dt) {
    const a = this.auto;
    a.t = (a.t || 0) + dt * (this.fast || 1);
    if (a.t < 0.3) return;
    a.t = 0;
    const g = this.game;
    const h = g.house;
    if (g.paddle.flight) return;
    const half = (h.maxU - h.minU) / 2;
    const off = (h.maxU + h.minU) / 2 - h.u;
    const drift = h.u + h.vu * 0.9;
    const hw = halfWidth(h.d + 15);
    let best = drift;
    let bestCost = Infinity;
    for (let u = -hw + half - off; u <= hw - half - off; u += 0.4) {
      let cost = Math.abs(u - drift) * 0.06;
      for (const rk of ROCKS) {
        const ahead = rk.d - h.d;
        if (ahead < -4) continue;
        if (ahead > 38) break;
        const clear = Math.abs(u + off - rk.u) - (half + rk.r + 0.7);
        if (clear < 0) cost += (-clear + 1.5) * (1.6 - Math.max(0, ahead) / 38) * 3;
      }
      for (const p of POOLS) if (p.d - h.d > -2 && p.d - h.d < 38 && Math.abs(u - p.u) < p.capture + 0.5) cost += a.whirl ? -3 : 8;
      if (cost < bestCost) {
        bestCost = cost;
        best = u;
      }
    }
    const err = best - drift;
    const aboard = g.aboard();
    const dirOf = (id) => (id === 'L' ? -1 : id === 'R' ? 1 : Math.abs(h.u) < 0.9 ? 0 : -Math.sign(h.u));
    let want = g.paddle.holder;
    if (Math.abs(err) > 1.0) {
      const c = aboard.filter((id) => dirOf(id) === Math.sign(err));
      if (c.length && !c.includes(want)) want = c.sort((x, y) => g.owners[y].sulk - g.owners[x].sulk)[0];
    }
    if (a.fair) for (const id of aboard) if ((g.owners[id].sawing || g.owners[id].sulk > 0.9) && Math.abs(err) < 2.5) want = id;
    if (a.ditch && want === a.ditch) want = g.paddle.holder;
    if (want && want !== g.paddle.holder) this.tapOwner(want);
  }

  // ---------- ambience ----------
  updateAmbience(dt) {
    const g = this.game;
    const h = g.house;
    let roar = 0;
    let roarPan = 0;
    for (const rk of ROCKS) {
      const ahead = rk.d - h.d;
      if (ahead < -6) continue;
      if (ahead > 40) break;
      const lat = Math.abs(rk.u - h.u);
      const w = (rk.r / 2.2) * (1 - Math.max(0, ahead) / 40) * (1 - Math.min(1, lat / 16));
      if (w > roar) {
        roar = w;
        roarPan = clamp((rk.u - h.u) / 10, -1, 1);
      }
    }
    let whirl = 0;
    for (const p of POOLS) {
      const dd = Math.hypot(p.u - h.u, p.d - h.d);
      whirl = Math.max(whirl, 1 - Math.min(1, dd / 26));
    }
    if (h.whirl) whirl = 1;
    const rough = roughness(h.d);
    const cliff = cliffHeight(h.d);
    let sawing = 0;
    let sawPan = 0;
    for (const id of OWNER_IDS) {
      const o = g.owners[id];
      if (o.state === 'aboard' && o.sawing) {
        sawing = 1;
        sawPan = this.panOf(id);
      }
    }
    const speedK = clamp((flowSpeed(h.d) - 3) / 8, 0, 1);
    this.lastRoar = roar;
    this.audio.update(dt, {
      active: this.state === 'play' || this.state === 'ending',
      speedK,
      roar: clamp(roar, 0, 1),
      roarPan,
      rough,
      whirl,
      canyon: clamp((cliff - 5) / 12, 0, 1),
      scrape: h.scraping,
      damage: clamp(1 - g.hp, 0, 1),
      sway: clamp(Math.abs(h.rollV) * 1.2, 0, 1),
      sawing: this.state === 'play' ? sawing : 0,
      sawPan,
      musicIntensity: this.state === 'title' ? 0.4 : rough > 0.5 || roar > 0.5 ? 1 : 0.5,
    });
  }

  // spray flying onto the deck as the house plows through white water
  updateSpray(dt) {
    const g = this.game;
    const h = g.house;
    const intensity = Math.max(this.lastRoar * 1.1, roughness(h.d) * 0.7) * (g.state === 'running' ? 1 : 0);
    this.sprayT -= dt * (0.4 + intensity * 2.2);
    if (this.sprayT <= 0 && intensity > 0.3) {
      this.sprayT = 0.6 + Math.random() * 0.8;
      const front = new THREE.Vector3((Math.random() - 0.5) * 6, 0.5, -2.8);
      this.house.tilt.localToWorld(front);
      const back = new THREE.Vector3(0, 0, 1).applyQuaternion(this.house.root.quaternion);
      this.fx.spray(front, back, intensity);
      if (intensity > 0.65 && Math.random() < 0.5) this.ui.splashDrops(1 + Math.round(intensity * 2));
      this.audio.splash(0.3 + intensity * 0.4, (Math.random() - 0.5));
    }
  }

  titleChatter(dt) {
    this.titleTalkT -= dt;
    if (this.titleTalkT <= 0) {
      this.titleTalkT = 2.2 + Math.random() * 1.2;
      const id = OWNER_IDS[Math.floor(Math.random() * 3)];
      this.ui.say(id, 'intro', { force: true, dur: 1900 });
      for (const o of OWNER_IDS) if (o !== id && Math.random() < 0.4) this.house.views[o].onCheer(0.6);
    }
  }
}

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _up = new THREE.Vector3(0, 0.5, 0);
const tmpW = { x: 0, z: 0 };

function vibrate(p) {
  try {
    if (navigator.vibrate) navigator.vibrate(p);
  } catch {
    /* ignore */
  }
}

function formatTime(t) {
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function boot() {
  const go = () => {
    try {
      new App();
    } catch (err) {
      console.error(err);
      const l = document.querySelector('#loading');
      if (l) l.textContent = '이 브라우저에서는 3D를 켤 수 없어요 (WebGL 필요)';
    }
  };
  if (document.fonts && document.fonts.load) {
    Promise.race([document.fonts.load('40px Jua'), new Promise((r) => setTimeout(r, 1500))]).then(go, go);
  } else go();
}

if (params.has('nostart')) window.__boot = boot;
else boot();

export { halfWidth };
