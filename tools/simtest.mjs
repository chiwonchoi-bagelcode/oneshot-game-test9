// Headless playtest: drives the pure simulation with a look-ahead bot to check the course is fair.
// The bot clones the game, tries each possible paddle pass, and keeps the one that stays clear of rocks.
import { Game } from '../src/sim/game.js';
import { ROCKS, POOLS } from '../src/sim/course.js';
import { rockClearance } from '../src/sim/house.js';

function cloneGame(g) {
  const c = Object.create(Object.getPrototypeOf(g));
  const plain = { ...g, events: [], nearTrack: new Map(), floaters: [], _near: [] };
  Object.assign(c, structuredClone(plain));
  return c;
}

function score(g, opts, horizon) {
  const h0 = g.hp;
  let cost = 0;
  const dt = 1 / 30;
  for (let t = 0; t < horizon; t += dt) {
    g.update(dt);
    g.events.length = 0;
    if (g.state === 'failed') return 1e6;
    const h = g.house;
    for (const rk of ROCKS) {
      if (rk.d < h.d - 5) continue;
      if (rk.d > h.d + 8) break;
      const c = rockClearance(h, rk);
      if (c < 0.8) cost += (0.8 - c) * 2 * dt;
    }
    if (opts.whirl === false && h.whirl) cost += 5 * dt;
    if (opts.whirl === true && h.whirl) cost -= 3 * dt;
  }
  cost += (h0 - g.hp) * 400;
  return cost;
}

export function run(opts = {}) {
  const g = new Game();
  g.launch();
  const dt = 1 / 60;
  let t = 0;
  let lastDecision = -1;
  const log = [];
  while (g.state === 'running' && t < 400) {
    const reaction = opts.jitter ? (opts.reaction ?? 0.3) * (0.6 + Math.random() * 0.8) : (opts.reaction ?? 0.3);
    if (t - lastDecision >= reaction && !g.paddle.flight) {
      lastDecision = t;
      if (opts.sloppy && Math.random() < opts.sloppy) {
        const a = g.aboard();
        if (Math.random() < 0.5) g.tap(a[Math.floor(Math.random() * a.length)]);
        g.update(dt);
        g.events.length = 0;
        t += dt;
        continue;
      }
      const options = [null, ...g.aboard().filter((id) => id !== g.paddle.holder)];
      let best = null;
      let bestCost = 1e9;
      for (const o of options) {
        const c = cloneGame(g);
        if (o) c.tap(o);
        let cost = score(c, opts, opts.horizon ?? 2.4);
        if (o) cost += 0.05;
        if (opts.fair && o) {
          const ow = g.owners[o];
          cost -= (ow.sawing ? 3 : 0) + Math.max(0, ow.sulk - 0.7) * 2;
        }
        if (opts.sacrifice === o) cost += 50;
        if (cost < bestCost) { bestCost = cost; best = o; }
      }
      if (best) g.tap(best);
    }
    g.update(dt);
    for (const e of g.events) {
      if (['hit', 'detach', 'shatter', 'whirlEnter', 'whirlExit', 'canyonPassed', 'fail', 'arrive', 'appease', 'nearMiss'].includes(e.type))
        log.push(`${t.toFixed(1)}s d=${g.house.d.toFixed(0)} u=${g.house.u.toFixed(1)} hp=${g.hp.toFixed(2)} ${e.type} ${JSON.stringify({ ...e, type: undefined, time: undefined })}`);
    }
    g.events.length = 0;
    t += dt;
  }
  return { g, log };
}

export const CASES = [
  ['expert greedy', { horizon: 2.6 }],
  ['expert fair', { fair: true, horizon: 2.6 }],
  ['fair + whirl', { fair: true, whirl: true }],
  ['avoid whirl', { fair: true, whirl: false }],
  ['slow 0.7s', { fair: true, reaction: 0.7 }],
  ['short horizon', { fair: true, horizon: 1.5 }],
  ['ditch L', { fair: true, sacrifice: 'L' }],
];
const only = process.argv.find((a) => a.startsWith('--case='));
if (process.argv.includes('--human')) {
  const res = { arrived: 0, failed: 0, endings: {}, d: [] };
  const N = Number(process.argv.find((a) => a.startsWith('--n='))?.slice(4) || 10);
  for (let i = 0; i < N; i++) {
    const { g } = run({ fair: Math.random() < 0.6, reaction: 0.5, jitter: true, sloppy: 0.12, horizon: 2.0 });
    if (g.state === 'arrived') {
      res.arrived++;
      res.endings[g.endingId] = (res.endings[g.endingId] || 0) + 1;
    } else res.failed++;
    res.d.push(Math.round(g.house.d));
  }
  console.log(JSON.stringify(res));
  process.exit(0);
}
if (process.argv[1].endsWith("simtest.mjs")) for (const [name, opts] of CASES) {
  if (only && !name.includes(only.slice(7))) continue;
  const { g, log } = run(opts);
  const s = g.stats;
  console.log(`\n=== ${name}: ${g.state} ending=${g.endingId} t=${s.time.toFixed(1)} hp=${g.hp.toFixed(2)} d=${g.house.d.toFixed(0)} hits=${s.hits} near=${s.nearMisses}/${s.thrills} lost=${s.lost.map((l) => l.id + '@' + l.d).join(',')} canyon=${s.canyon} whirl=${s.whirlRides} appease=${s.appeased} throws=${s.throws}`);
  if (process.argv.includes('-v')) console.log(log.join('\n'));
}
