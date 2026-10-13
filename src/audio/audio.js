// All sound is synthesised with WebAudio: no files to load.
// River rush that swells near rocks, wood creaks, splashes, saws, gibberish voices and a little shanty.

const VOWELS = [
  [800, 1200], [500, 1900], [320, 2300], [520, 900], [340, 780], [650, 1700],
];
const VOICE = {
  L: { base: 118, spread: 0.25, rate: 0.085 },
  R: { base: 245, spread: 0.3, rate: 0.07 },
  C: { base: 170, spread: 0.2, rate: 0.08 },
};

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.musicOn = true;
    this.ready = false;
    this.creakT = 1;
    this.sawT = 0;
    this.sawUp = false;
    this.music = null;
    this.lastVoice = { L: 0, C: 0, R: 0 };
  }

  init() {
    if (this.ctx) {
      this.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.9;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 4;
    this.master.connect(comp).connect(ctx.destination);
    this.sfx = ctx.createGain();
    this.sfx.gain.value = 0.9;
    this.sfx.connect(this.master);
    this.amb = ctx.createGain();
    this.amb.gain.value = 0.8;
    this.amb.connect(this.master);
    this.voiceBus = ctx.createGain();
    this.voiceBus.gain.value = 0.5;
    this.voiceBus.connect(this.master);
    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = 0.16;
    this.musicBus.connect(this.master);
    // canyon echo
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.impulse(2.6, 2.2);
    this.revWet = ctx.createGain();
    this.revWet.gain.value = 0.05;
    this.reverb.connect(this.revWet).connect(this.master);
    this.sfx.connect(this.reverb);
    this.voiceBus.connect(this.reverb);

    this.white = this.noiseBuffer('white');
    this.pink = this.noiseBuffer('pink');
    this.brown = this.noiseBuffer('brown');
    this.buildAmbience();
    this.ready = true;
  }

  resume() {
    if (this.ctx && this.ctx.state !== 'running') this.ctx.resume();
  }

  suspend() {
    if (this.ctx && this.ctx.state === 'running') this.ctx.suspend();
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.9, this.ctx.currentTime, 0.05);
  }

  noiseBuffer(kind) {
    const ctx = this.ctx;
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0, last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      if (kind === 'white') d[i] = w;
      else if (kind === 'pink') {
        b0 = 0.99886 * b0 + w * 0.0555179;
        b1 = 0.99332 * b1 + w * 0.0750759;
        b2 = 0.969 * b2 + w * 0.153852;
        b3 = 0.8665 * b3 + w * 0.3104856;
        b4 = 0.55 * b4 + w * 0.5329522;
        b5 = -0.7616 * b5 - w * 0.016898;
        d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11;
        b6 = w * 0.115926;
      } else {
        last = (last + 0.02 * w) / 1.02;
        d[i] = last * 3.5;
      }
    }
    return buf;
  }

  impulse(sec, decay) {
    const ctx = this.ctx;
    const len = Math.floor(ctx.sampleRate * sec);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay) * (i % 2700 < 60 ? 2.2 : 1);
    }
    return buf;
  }

  loop(buf) {
    const s = this.ctx.createBufferSource();
    s.buffer = buf;
    s.loop = true;
    s.start(0, Math.random() * 1.5);
    return s;
  }

  buildAmbience() {
    const ctx = this.ctx;
    // steady rush
    this.rushF = ctx.createBiquadFilter();
    this.rushF.type = 'lowpass';
    this.rushF.frequency.value = 700;
    this.rushG = ctx.createGain();
    this.rushG.gain.value = 0;
    this.loop(this.pink).connect(this.rushF).connect(this.rushG).connect(this.amb);
    // roar of white water near rocks
    this.roarF = ctx.createBiquadFilter();
    this.roarF.type = 'bandpass';
    this.roarF.frequency.value = 1400;
    this.roarF.Q.value = 0.5;
    this.roarG = ctx.createGain();
    this.roarG.gain.value = 0;
    this.roarPan = ctx.createStereoPanner();
    this.loop(this.white).connect(this.roarF).connect(this.roarG).connect(this.roarPan).connect(this.amb);
    this.roarG.connect(this.reverb);
    // gurgle
    this.gurF = ctx.createBiquadFilter();
    this.gurF.type = 'bandpass';
    this.gurF.frequency.value = 320;
    this.gurF.Q.value = 3;
    this.gurG = ctx.createGain();
    this.gurG.gain.value = 0;
    this.loop(this.brown).connect(this.gurF).connect(this.gurG).connect(this.amb);
    // whirlpool swirl
    this.whirlF = ctx.createBiquadFilter();
    this.whirlF.type = 'bandpass';
    this.whirlF.Q.value = 4;
    this.whirlF.frequency.value = 500;
    this.whirlG = ctx.createGain();
    this.whirlG.gain.value = 0;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.9;
    const lfoG = ctx.createGain();
    lfoG.gain.value = 300;
    lfo.connect(lfoG).connect(this.whirlF.frequency);
    lfo.start();
    this.loop(this.pink).connect(this.whirlF).connect(this.whirlG).connect(this.amb);
    // scraping canyon walls
    this.scrF = ctx.createBiquadFilter();
    this.scrF.type = 'bandpass';
    this.scrF.frequency.value = 2400;
    this.scrF.Q.value = 6;
    this.scrG = ctx.createGain();
    this.scrG.gain.value = 0;
    this.loop(this.white).connect(this.scrF).connect(this.scrG).connect(this.sfx);
  }

  // Called every frame with the state of the river around the house.
  update(dt, s) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const on = s.active ? 1 : 0.35;
    this.rushG.gain.setTargetAtTime((0.16 + 0.12 * s.speedK) * on, t, 0.3);
    this.rushF.frequency.setTargetAtTime(500 + 900 * s.speedK + 600 * s.roar, t, 0.3);
    this.roarG.gain.setTargetAtTime((0.04 + 0.55 * s.roar * s.roar + 0.12 * s.rough) * on, t, 0.12);
    this.roarF.frequency.setTargetAtTime(1000 + 1400 * s.roar, t, 0.2);
    this.roarPan.pan.setTargetAtTime(Math.max(-0.8, Math.min(0.8, s.roarPan || 0)), t, 0.2);
    this.gurG.gain.setTargetAtTime((0.1 + 0.25 * s.rough) * on, t, 0.4);
    this.gurF.frequency.setTargetAtTime(250 + Math.random() * 250, t, 0.1);
    this.whirlG.gain.setTargetAtTime(0.5 * s.whirl, t, 0.25);
    this.scrG.gain.setTargetAtTime(0.25 * s.scrape, t, 0.05);
    this.scrF.frequency.setTargetAtTime(1800 + Math.random() * 1200, t, 0.03);
    this.revWet.gain.setTargetAtTime(0.05 + 0.5 * s.canyon, t, 0.5);
    this.musicBus.gain.setTargetAtTime(this.musicOn ? 0.15 * (1 - 0.45 * s.roar) : 0, t, 0.4);
    // creaks: more often near trouble and when the house is battered
    this.creakT -= dt;
    if (s.active && this.creakT <= 0) {
      this.creakT = 2.6 - 1.8 * Math.max(s.roar, s.damage, s.sway) + Math.random() * 1.5;
      this.creak(0.35 + 0.5 * Math.max(s.damage, s.sway));
    }
    // sawing rhythm
    if (s.sawing > 0) {
      this.sawT -= dt;
      if (this.sawT <= 0) {
        this.sawT = 0.17;
        this.sawUp = !this.sawUp;
        this.sawStroke(this.sawUp, s.sawPan || 0);
      }
    }
    if (this.music) this.music.update(s);
  }

  env(g, t, a, peak, d) {
    g.gain.cancelScheduledValues(t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  }

  noiseShot({ buf = this.white, type = 'bandpass', f0 = 1000, f1 = f0, q = 1, a = 0.005, d = 0.2, peak = 0.3, pan = 0, dest = this.sfx, delay = 0 }) {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime + delay;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.Q.value = q;
    f.frequency.setValueAtTime(f0, t);
    f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + a + d);
    const g = ctx.createGain();
    this.env(g, t, a, peak, d);
    const p = ctx.createStereoPanner();
    p.pan.value = pan;
    src.connect(f).connect(g).connect(p).connect(dest);
    src.start(t, Math.random());
    src.stop(t + a + d + 0.05);
  }

  tone({ type = 'sine', f0 = 440, f1 = f0, a = 0.005, d = 0.2, peak = 0.2, pan = 0, dest = this.sfx, delay = 0, curve = 'exp' }) {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime + delay;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (curve === 'exp') o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + a + d);
    else o.frequency.linearRampToValueAtTime(f1, t + a + d);
    const g = ctx.createGain();
    this.env(g, t, a, peak, d);
    const p = ctx.createStereoPanner();
    p.pan.value = pan;
    o.connect(g).connect(p).connect(dest);
    o.start(t);
    o.stop(t + a + d + 0.05);
    return o;
  }

  // ---------- one-shots ----------
  splash(k = 0.6, pan = 0) {
    this.noiseShot({ type: 'lowpass', f0: 3500, f1: 400, q: 0.7, a: 0.01, d: 0.25 + 0.25 * k, peak: 0.25 + 0.35 * k, pan: pan * 0.6 });
    this.tone({ f0: 260, f1: 70, d: 0.12, peak: 0.12 * k, pan: pan * 0.6 });
  }
  plop(k = 0.5) {
    this.tone({ f0: 700, f1: 160, d: 0.1, peak: 0.18 * k });
    this.noiseShot({ type: 'lowpass', f0: 2000, f1: 300, d: 0.2, peak: 0.15 * k });
  }
  whoosh() {
    this.noiseShot({ type: 'bandpass', f0: 500, f1: 2600, q: 1.6, a: 0.03, d: 0.22, peak: 0.35 });
  }
  catchTok(pan = 0) {
    this.tone({ type: 'triangle', f0: 700, f1: 520, d: 0.08, peak: 0.35, pan });
    this.noiseShot({ type: 'highpass', f0: 2500, d: 0.03, peak: 0.25, pan });
  }
  creak(k = 0.5) {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const dur = 0.35 + Math.random() * 0.5;
    const o = ctx.createOscillator();
    o.type = 'sawtooth';
    const f = 32 + Math.random() * 40;
    o.frequency.setValueAtTime(f, t);
    o.frequency.linearRampToValueAtTime(f * (0.6 + Math.random() * 0.9), t + dur);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(700 + Math.random() * 700, t);
    bp.frequency.linearRampToValueAtTime(500 + Math.random() * 900, t + dur);
    bp.Q.value = 14;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.5 * k, t + 0.06);
    g.gain.setValueAtTime(0.5 * k, t + dur * 0.7);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(bp).connect(g).connect(this.sfx);
    o.start(t);
    o.stop(t + dur + 0.05);
  }
  crack(k = 0.6) {
    for (let i = 0; i < 3; i++) this.noiseShot({ type: 'highpass', f0: 1800 + Math.random() * 1500, d: 0.03 + Math.random() * 0.04, peak: 0.3 * k, delay: i * (0.02 + Math.random() * 0.05) });
    this.tone({ type: 'square', f0: 180, f1: 90, d: 0.06, peak: 0.08 * k });
  }
  thud(k = 0.7) {
    this.tone({ f0: 110, f1: 38, d: 0.3, peak: 0.55 * k });
    this.noiseShot({ type: 'lowpass', f0: 600, f1: 120, d: 0.25, peak: 0.25 * k });
  }
  crash(k = 0.8) {
    this.thud(k);
    this.crack(k);
    this.splash(0.6 + 0.4 * k);
    this.creak(0.8);
  }
  snap() {
    this.noiseShot({ type: 'highpass', f0: 3000, d: 0.05, peak: 0.4 });
    this.tone({ f0: 300, f1: 120, d: 0.1, peak: 0.2 });
  }
  sawStroke(up, pan = 0) {
    this.noiseShot({ type: 'bandpass', f0: up ? 2600 : 1600, f1: up ? 3400 : 1200, q: 2.4, a: 0.03, d: 0.12, peak: 0.22, pan });
  }
  sawTwang() {
    if (!this.ready) return;
    const o = this.tone({ type: 'sine', f0: 900, f1: 900, d: 0.6, peak: 0.12 });
    if (!o) return;
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 9;
    const lg = this.ctx.createGain();
    lg.gain.value = 120;
    lfo.connect(lg).connect(o.frequency);
    lfo.start();
    lfo.stop(this.ctx.currentTime + 0.7);
  }
  // the "똑" when the floor gives way, then a cartoon slide whistle and a big splash
  drop() {
    this.tone({ f0: 1500, f1: 1100, d: 0.05, peak: 0.35 });
    this.tone({ type: 'sine', f0: 1700, f1: 260, a: 0.02, d: 0.65, peak: 0.16, delay: 0.25, curve: 'exp' });
    setTimeout(() => this.splash(1), 520);
  }
  slideUp() {
    this.tone({ type: 'sine', f0: 300, f1: 1500, a: 0.02, d: 0.45, peak: 0.13 });
  }
  clatter(kind, k = 0.5) {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    if (now - (this._lastClatter || 0) < 0.05) return;
    this._lastClatter = now;
    if (kind === 'pot' || kind === 'kettle' || kind === 'bucket') {
      for (const f of [1150, 1870, 3020]) this.tone({ f0: f * (0.95 + Math.random() * 0.1), d: 0.25, peak: 0.07 * k });
    } else if (kind === 'barrel' || kind === 'table') {
      this.tone({ type: 'triangle', f0: 160, f1: 90, d: 0.15, peak: 0.25 * k });
    } else if (kind === 'cat') {
      this.meow();
    } else {
      this.tone({ type: 'triangle', f0: 420 + Math.random() * 200, f1: 300, d: 0.06, peak: 0.2 * k });
      this.noiseShot({ type: 'bandpass', f0: 1500, q: 2, d: 0.04, peak: 0.15 * k });
    }
  }
  meow(loud = false) {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(600, t);
    o.frequency.linearRampToValueAtTime(900, t + 0.12);
    o.frequency.linearRampToValueAtTime(520, t + 0.4);
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.setValueAtTime(900, t);
    f.frequency.linearRampToValueAtTime(1800, t + 0.15);
    f.frequency.linearRampToValueAtTime(800, t + 0.4);
    f.Q.value = 5;
    const g = ctx.createGain();
    this.env(g, t, 0.04, loud ? 0.3 : 0.15, 0.38);
    o.connect(f).connect(g).connect(this.sfx);
    o.start(t);
    o.stop(t + 0.5);
  }
  steamWhistle() {
    this.tone({ type: 'sine', f0: 1900, f1: 2100, a: 0.08, d: 0.4, peak: 0.05, curve: 'lin' });
  }
  nearMiss(thrill) {
    this.noiseShot({ type: 'bandpass', f0: 3000, f1: 400, q: 1.2, a: 0.01, d: 0.45, peak: thrill ? 0.4 : 0.2 });
    if (thrill) {
      this.tone({ type: 'triangle', f0: 523, d: 0.12, peak: 0.12, delay: 0.05 });
      this.tone({ type: 'triangle', f0: 784, d: 0.18, peak: 0.12, delay: 0.14 });
    }
  }
  stinger(kind) {
    const notes = {
      section: [[659, 0], [784, 0.09], [988, 0.18]],
      appease: [[784, 0], [988, 0.08], [1319, 0.16]],
      whirl: [[392, 0], [494, 0.08], [587, 0.16], [784, 0.24]],
      shatter: [[392, 0], [349, 0.15], [330, 0.3], [262, 0.5]],
    }[kind];
    if (!notes) return;
    for (const [f, dl] of notes) this.tone({ type: 'triangle', f0: f, d: 0.22, peak: 0.12, delay: dl, dest: this.sfx });
  }
  fanfare() {
    const seq = [[523, 0, 0.18], [659, 0.18, 0.18], [784, 0.36, 0.18], [1047, 0.54, 0.6], [988, 0.9, 0.15], [1047, 1.05, 0.8]];
    for (const [f, dl, d] of seq) {
      this.tone({ type: 'square', f0: f, d, peak: 0.07, delay: dl, dest: this.sfx });
      this.tone({ type: 'triangle', f0: f / 2, d, peak: 0.12, delay: dl, dest: this.sfx });
    }
  }
  failJingle() {
    const seq = [[392, 0, 0.3], [370, 0.3, 0.3], [349, 0.6, 0.3], [330, 0.9, 0.9]];
    for (const [f, dl, d] of seq) this.tone({ type: 'triangle', f0: f, f1: f * 0.98, d, peak: 0.16, delay: dl, curve: 'lin' });
  }
  ui() {
    this.tone({ type: 'triangle', f0: 880, f1: 1320, d: 0.07, peak: 0.15 });
  }

  // gibberish voices, Animal-Crossing style
  voice(id, text, mood = 'normal') {
    if (!this.ready) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    if (now - this.lastVoice[id] < 0.25) return;
    const v = VOICE[id] || VOICE.C;
    const syl = Math.max(2, Math.min(7, Math.round((text || '').length / 2)));
    const rate = v.rate * (mood === 'angry' ? 0.85 : 1);
    let t = now;
    const pan = id === 'L' ? -0.5 : id === 'R' ? 0.5 : 0;
    for (let i = 0; i < syl; i++) {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      let f = v.base * (1 + (Math.random() - 0.5) * v.spread);
      if (mood === 'angry') f *= 1.15;
      if (mood === 'happy') f *= 1 + i * 0.04;
      if (mood === 'sad') f *= 1 - i * 0.04;
      o.frequency.setValueAtTime(f, t);
      o.frequency.linearRampToValueAtTime(f * (mood === 'happy' ? 1.12 : 0.92), t + rate);
      const [f1, f2] = VOWELS[Math.floor(Math.random() * VOWELS.length)];
      const b1 = ctx.createBiquadFilter();
      b1.type = 'bandpass';
      b1.frequency.value = f1;
      b1.Q.value = 5;
      const b2 = ctx.createBiquadFilter();
      b2.type = 'bandpass';
      b2.frequency.value = f2;
      b2.Q.value = 7;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.5, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + rate);
      const p = ctx.createStereoPanner();
      p.pan.value = pan;
      o.connect(b1).connect(g);
      o.connect(b2).connect(g);
      g.connect(p).connect(this.voiceBus);
      o.start(t);
      o.stop(t + rate + 0.02);
      t += rate + 0.018;
    }
    this.lastVoice[id] = t;
  }

  startMusic() {
    if (!this.ready || this.music) return;
    this.music = new Shanty(this);
  }
  stopMusic() {
    if (this.music) this.music.stop();
    this.music = null;
  }
}

// A cheerful little rafting jig. Layers come in as the water gets rougher.
const MEL = [
  67, 71, 74, 71, 72, 71, 69, 67,
  64, 67, 72, 67, 69, 67, 64, 62,
  66, 69, 74, 69, 72, 69, 66, 62,
  67, 0, 71, 0, 74, -1, -1, 0,
  64, 67, 71, 67, 69, 71, 72, 71,
  72, 74, 76, 74, 72, 71, 69, 67,
  69, 71, 72, 74, 76, 74, 72, 69,
  67, 71, 67, 62, 67, -1, -1, 0,
];
const CHORDS = [[55, 59, 62], [48, 52, 55], [50, 54, 57], [55, 59, 62], [52, 55, 59], [48, 52, 55], [50, 54, 57], [55, 59, 62]];
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

class Shanty {
  constructor(engine) {
    this.e = engine;
    this.ctx = engine.ctx;
    this.step = 0;
    this.tempo = 138;
    this.next = this.ctx.currentTime + 0.1;
    this.intensity = 0;
    this.timer = setInterval(() => this.schedule(), 40);
  }
  stop() {
    clearInterval(this.timer);
  }
  update(s) {
    this.intensity = s.musicIntensity ?? 1;
    this.tempo = 132 + 14 * (s.speedK || 0);
  }
  schedule() {
    const ctx = this.ctx;
    if (ctx.state !== 'running') {
      this.next = ctx.currentTime + 0.1;
      return;
    }
    const eighth = 60 / this.tempo / 2;
    while (this.next < ctx.currentTime + 0.15) {
      this.play(this.step, this.next, eighth);
      this.next += eighth;
      this.step = (this.step + 1) % MEL.length;
    }
  }
  note(type, f, t, d, peak, cutoff = 2500) {
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.value = f;
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = cutoff;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(lp).connect(g).connect(this.e.musicBus);
    o.start(t);
    o.stop(t + d + 0.02);
  }
  drum(t, kind, peak) {
    const e = this.e;
    if (kind === 'kick') {
      const o = this.ctx.createOscillator();
      o.frequency.setValueAtTime(140, t);
      o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(peak, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      o.connect(g).connect(e.musicBus);
      o.start(t);
      o.stop(t + 0.2);
    } else {
      const s = this.ctx.createBufferSource();
      s.buffer = e.white;
      const f = this.ctx.createBiquadFilter();
      f.type = kind === 'hat' ? 'highpass' : 'bandpass';
      f.frequency.value = kind === 'hat' ? 6000 : 1800;
      const g = this.ctx.createGain();
      const d = kind === 'hat' ? 0.04 : 0.12;
      g.gain.setValueAtTime(peak, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      s.connect(f).connect(g).connect(e.musicBus);
      s.start(t, Math.random());
      s.stop(t + d + 0.02);
    }
  }
  play(step, t, eighth) {
    const bar = Math.floor(step / 8);
    const beat = step % 8;
    const ch = CHORDS[bar % CHORDS.length];
    const I = this.intensity;
    // bass on beats
    if (beat % 4 === 0) this.note('triangle', mtof(ch[0] - 12), t, eighth * 1.8, 0.5, 900);
    if (beat % 4 === 2) this.note('triangle', mtof(ch[2] - 12), t, eighth * 1.5, 0.35, 900);
    // off-beat chord plucks
    if (beat % 2 === 1) for (const m of ch) this.note('triangle', mtof(m + 12), t, eighth * 0.9, 0.07, 3000);
    // melody (accordion-ish)
    const m = MEL[step];
    if (I > 0.3 && m > 0) {
      let len = 1;
      for (let k = step + 1; k < MEL.length && MEL[k] === -1; k++) len++;
      this.note('square', mtof(m), t, eighth * len * 0.95, 0.06, 1800);
      this.note('sawtooth', mtof(m) * 1.003, t, eighth * len * 0.95, 0.03, 1400);
    }
    // percussion layers
    if (I > 0.6) {
      if (beat % 4 === 0) this.drum(t, 'kick', 0.5);
      if (beat === 2 || beat === 6) this.drum(t, 'snare', 0.25);
      this.drum(t, 'hat', beat % 2 ? 0.08 : 0.14);
    }
  }
}
