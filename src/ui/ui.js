// DOM layer: HUD, speech bubbles, cartoon onomatopoeia, banners and the end-of-run panel.
import * as THREE from 'three';
import { pickLine } from '../view/lines.js';
import { SECTIONS, BEACH_D } from '../sim/course.js';
import { ENDINGS, OWNER_DEFS } from '../sim/game.js';

const $ = (s) => document.querySelector(s);
const _v = new THREE.Vector3();

export class UI {
  constructor(frame, camera, audio) {
    this.frame = frame;
    this.camera = camera;
    this.audio = audio;
    this.bubbles = {};
    this.bubbleLayer = $('#bubbles');
    this.popLayer = $('#popups');
    this.hud = $('#hud');
    this.hpEl = $('#hp');
    this.hpFill = $('#hp .hp-bar i');
    this.trackFill = $('#progress .fill');
    this.boat = $('#progress .boat');
    this.sectionName = $('#progress .section-name');
    this.banner = $('#banner');
    this.hint = $('#hint');
    this.flash = $('#flash');
    this.vignette = $('#vignette');
    this.drops = $('#drops');
    this.anchors = {}; // owner id -> () => world position for bubbles
    this.lastSay = {};
    this.w = 1;
    this.h = 1;
    this.buildTrackMarks();
  }

  resize(w, h) {
    this.w = w;
    this.h = h;
  }

  buildTrackMarks() {
    const marks = $('#progress .marks');
    const icons = { whirl: '🌀', canyon: '⛰️', beach: '🏁', rocks: '🪨' };
    for (const s of SECTIONS) {
      if (!icons[s.icon]) continue;
      const span = document.createElement('span');
      span.textContent = icons[s.icon];
      span.style.left = `${Math.max(0, Math.min(100, (s.d / BEACH_D) * 100))}%`;
      if (s.icon === 'beach') span.style.left = '100%';
      marks.appendChild(span);
    }
  }

  project(world) {
    _v.copy(world).project(this.camera);
    return { x: (_v.x * 0.5 + 0.5) * this.w, y: (-_v.y * 0.5 + 0.5) * this.h, z: _v.z };
  }

  // ---------- bubbles ----------
  say(id, kindOrText, opts = {}) {
    const now = performance.now();
    const isKind = /^[a-zA-Z]+$/.test(kindOrText);
    const text = isKind ? pickLine(id, kindOrText) : kindOrText;
    if (!text) return;
    if (!opts.force && this.lastSay[id] && now - this.lastSay[id] < (opts.minGap ?? 900)) return;
    this.lastSay[id] = now;
    const old = this.bubbles[id];
    if (old) old.el.remove();
    const el = document.createElement('div');
    el.className = `bubble ${id}${opts.angry ? ' angry' : ''}`;
    el.textContent = text;
    this.bubbleLayer.appendChild(el);
    this.bubbles[id] = { el, until: now + (opts.dur ?? 1700), out: false };
    const mood = opts.angry ? 'angry' : opts.mood || 'normal';
    this.audio?.voice(id, text, mood);
  }

  updateBubbles(getAnchor) {
    const now = performance.now();
    for (const id in this.bubbles) {
      const b = this.bubbles[id];
      const anchor = getAnchor(id);
      if (!anchor || now > b.until + 220) {
        b.el.remove();
        delete this.bubbles[id];
        continue;
      }
      if (now > b.until && !b.out) {
        b.out = true;
        b.el.classList.add('out');
      }
      const p = this.project(anchor);
      if (p.z > 1) {
        b.el.style.visibility = 'hidden';
        continue;
      }
      b.el.style.visibility = 'visible';
      const bw = b.el.offsetWidth;
      const bh = b.el.offsetHeight;
      let x = p.x - bw / 2;
      x = Math.max(4, Math.min(this.w - bw - 4, x));
      const y = Math.max(54, p.y - bh - 18);
      b.el.style.setProperty('--x', `${x}px`);
      b.el.style.setProperty('--y', `${y}px`);
      b.el.style.transform = `translate(${x}px, ${y}px)`;
    }
  }

  clearBubbles() {
    for (const id in this.bubbles) this.bubbles[id].el.remove();
    this.bubbles = {};
  }

  // ---------- pop text ----------
  popup(text, world, kind = '', screen = null) {
    const p = screen || (world ? this.project(world) : { x: this.w / 2, y: this.h * 0.4 });
    const el = document.createElement('div');
    el.className = `pop ${kind}`;
    el.textContent = text;
    el.style.setProperty('--x', `${Math.max(40, Math.min(this.w - 40, p.x))}px`);
    el.style.setProperty('--y', `${Math.max(60, Math.min(this.h - 60, p.y))}px`);
    el.style.setProperty('--r', `${(Math.random() - 0.5) * 16}deg`);
    this.popLayer.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  }

  showBanner(text, sub = '') {
    this.banner.classList.remove('show');
    void this.banner.offsetWidth;
    this.banner.innerHTML = `${text}${sub ? `<small>${sub}</small>` : ''}`;
    this.banner.classList.add('show');
  }

  setHint(html) {
    if (!html) {
      this.hint.classList.add('hidden');
      return;
    }
    this.hint.innerHTML = html;
    this.hint.classList.remove('hidden');
  }

  flashScreen(strength = 0.6, color = '#fff') {
    this.flash.style.transition = 'none';
    this.flash.style.background = color;
    this.flash.style.opacity = strength;
    void this.flash.offsetWidth;
    this.flash.style.transition = 'opacity 0.45s ease-out';
    this.flash.style.opacity = 0;
  }

  splashDrops(n = 4) {
    for (let i = 0; i < n; i++) {
      const d = document.createElement('i');
      const s = 18 + Math.random() * 46;
      d.style.width = d.style.height = `${s}px`;
      d.style.left = `${Math.random() * 100}%`;
      d.style.top = `${10 + Math.random() * 70}%`;
      this.drops.appendChild(d);
      setTimeout(() => d.remove(), 1500);
    }
  }

  tapRing(x, y) {
    const r = document.createElement('div');
    r.className = 'tap-ring';
    r.style.left = `${x}px`;
    r.style.top = `${y}px`;
    this.popLayer.appendChild(r);
    setTimeout(() => r.remove(), 420);
  }

  // ---------- HUD ----------
  showHUD(on) {
    this.hud.classList.toggle('hidden', !on);
  }

  updateHUD(game) {
    const prog = game.progress();
    this.trackFill.style.width = `${prog * 100}%`;
    this.boat.style.left = `${prog * 100}%`;
    const hp = Math.max(0, game.hp);
    this.hpFill.style.width = `${hp * 100}%`;
    this.hpEl.classList.toggle('low', hp < 0.35 || game.house.door);
    this.hpEl.classList.toggle('door', game.house.door);
    if (this.sectionName.textContent !== game.section.name) this.sectionName.textContent = game.section.name;
    const crit = game.house.door ? 0.5 : Math.max(0, (0.32 - hp) / 0.32);
    this.vignette.style.opacity = crit * (0.6 + 0.4 * Math.sin(performance.now() / 180));
  }

  // ---------- screens ----------
  show(id, on) {
    $(id).classList.toggle('hidden', !on);
  }

  showEndPanel(data) {
    const panel = $('#screen-end .end-panel');
    panel.classList.toggle('fail', !!data.fail);
    $('#screen-end .end-kicker').textContent = data.kicker;
    $('#screen-end .end-title').textContent = data.title;
    $('#screen-end .end-sub').textContent = data.sub;
    $('#screen-end .end-desc').textContent = data.desc;
    $('#screen-end .end-captain').textContent = data.captain;
    $('#screen-end .end-captain').classList.toggle('hidden', !data.captain);
    const photos = $('#screen-end .end-photos');
    photos.innerHTML = '';
    for (const ph of data.photos) {
      const fig = document.createElement('div');
      fig.className = `polaroid${ph.big ? ' big' : ''}`;
      fig.style.setProperty('--r', `${(Math.random() - 0.5) * 9}deg`);
      const img = document.createElement('img');
      img.src = ph.src;
      img.alt = ph.caption;
      const cap = document.createElement('span');
      cap.textContent = ph.caption;
      fig.append(img, cap);
      photos.appendChild(fig);
    }
    const stats = $('#screen-end .end-stats');
    stats.innerHTML = '';
    for (const s of data.stats) {
      const span = document.createElement('span');
      span.textContent = s.text;
      if (s.badge) span.className = 'badge';
      stats.appendChild(span);
    }
    $('#btn-again').textContent = data.fail ? '다시 도전!' : '다시 타기';
    this.show('#screen-end', true);
    panel.scrollTop = 0;
  }

  renderEndingsFound(found) {
    const el = $('#endings-found');
    const ids = Object.keys(ENDINGS);
    const n = ids.filter((id) => found.includes(id)).length;
    el.innerHTML = `발견한 도착 장면 ${n} / ${ids.length}<div class="chips">${ids
      .map((id) => `<span class="${found.includes(id) ? 'got' : ''}">${found.includes(id) ? ENDINGS[id].title : '???'}</span>`)
      .join('')}</div>`;
  }
}

export function ownerColor(id) {
  return OWNER_DEFS[id].color;
}
