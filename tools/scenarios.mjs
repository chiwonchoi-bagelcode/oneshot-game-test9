// Scripted runs for tools/shots.mjs
const ev = (page, fn, arg) => page.evaluate(fn, arg);
const start = async (page, wait) => {
  await wait(800);
  await page.click('#btn-start');
  await wait(1800);
};

export default {
  async basic({ page, shot, wait }) {
    await wait(1500);
    await shot('01-title');
    await page.click('#btn-start');
    await wait(2500);
    await shot('02-launch');
    await ev(page, () => window.__rafting.tapOwner('L'));
    await wait(350);
    await shot('03-catch-L');
    await wait(1500);
    await shot('04-after-stroke');
    await ev(page, () => window.__rafting.tapOwner('R'));
    await wait(5000);
    await shot('05-rocks');
  },
  async moods({ page, shot, wait }) {
    await start(page, wait);
    await ev(page, () => {
      const a = window.__rafting;
      a.debugJump(60, 0);
      a.game.owners.L.sulk = 0.5;
      a.game.owners.R.sulk = 0.7;
    });
    await wait(1200);
    await shot('10-annoyed-steam');
    await ev(page, () => { window.__rafting.game.owners.R.sulk = 0.85; window.__rafting.game.owners.L.sulk = 0.99; });
    await wait(1500);
    await shot('11-saw-out');
    await wait(2500);
    await shot('12-sawing');
    await wait(4500);
    await shot('13-detach');
    await wait(1500);
    await shot('14-farewell');
  },
  async close({ page, shot, wait }) {
    await start(page, wait);
    await ev(page, () => {
      const a = window.__rafting;
      a.debugJump(40, 0);
      a.rig.setMode('close');
      a.game.owners.L.sulk = 0.5;
      a.game.owners.R.sulk = 0.62;
    });
    await wait(2500);
    await shot('30-close-moods');
    await ev(page, () => { const a = window.__rafting; a.game.owners.R.sulk = 0.85; a.game.owners.L.sulk = 0.999; });
    await wait(2500);
    await shot('31-close-saw');
    await ev(page, () => { window.__rafting.rig.closeSide = -6; });
    await wait(1800);
    await shot('32-close-sawing');
    await ev(page, () => window.__rafting.tapOwner('R'));
    await wait(400);
    await shot('33-close-throw');
    await wait(500);
    await shot('34-close-stroke');
    await wait(4000);
    await shot('35-close-detach');
    await wait(1200);
    await shot('36-close-farewell');
  },
  async perf({ page, wait }) {
    await start(page, wait);
    await wait(2000);
    const info = await ev(page, () => {
      const r = window.__rafting.renderer;
      return { calls: r.info.render.calls, tris: r.info.render.triangles, geos: r.info.memory.geometries, progs: r.info.programs.length };
    });
    console.log(JSON.stringify(info));
    const t = await ev(page, async () => {
      const a = window.__rafting;
      const t0 = performance.now();
      for (let i = 0; i < 20; i++) a.renderer.render(a.scene, a.camera);
      a.renderer.getContext().finish();
      return (performance.now() - t0) / 20;
    });
    console.log('ms per render (swiftshader)', t.toFixed(1));
    const br = await ev(page, () => {
      const a = window.__rafting;
      const THREE_frustum = a.camera.projectionMatrix.clone().multiply(a.camera.matrixWorldInverse);
      const counts = {};
      const fr = new (a.camera.constructor.prototype.constructor === undefined ? Object : Object)();
      void fr;
      a.scene.traverseVisible((o) => {
        if (!o.isMesh) return;
        let top = o;
        const chain = [];
        while (top.parent && top.parent !== a.scene) { chain.push(top.name || top.type); top = top.parent; }
        let key = top.name || top.type;
        if (top === a.house.root) key = 'house:' + (chain[chain.length - 3] || chain[chain.length - 2] || '?');
        counts[key] = (counts[key] || 0) + 1;
      });
      void THREE_frustum;
      return counts;
    });
    console.log(JSON.stringify(br));
  },
  async setpieces({ page, shot, wait }) {
    await start(page, wait);
    // head-on into the tutorial rock
    await ev(page, () => window.__rafting.debugJump(88, 0.3));
    await wait(2600);
    await shot('40-hit');
    await wait(1500);
    await shot('41-after-hit');
    // whirlpool
    await ev(page, () => window.__rafting.debugJump(462, -1.2));
    await wait(1500);
    await shot('42-whirl-in');
    await wait(1500);
    await shot('43-whirl-spin');
    await wait(2500);
    await shot('44-whirl-out');
    // canyon squeeze
    await ev(page, () => window.__rafting.debugJump(628, 0));
    await wait(2500);
    await shot('45-canyon');
    await wait(1500);
    await shot('46-squeeze');
    // shatter into door mode
    await ev(page, () => { const a = window.__rafting; a.game.hp = 0.04; a.debugJump(1090, -0.5); });
    await wait(2500);
    await shot('47-shatter');
    await wait(2500);
    await shot('48-door');
  },
  async ending({ page, shot, wait }) {
    const kind = (await page.evaluate(() => new URLSearchParams(location.search).get('ending'))) || 'fair';
    await start(page, wait);
    await ev(page, (k) => {
      const a = window.__rafting;
      const g = a.game;
      if (k === 'wreck') g.hp = 0.4;
      if (k === 'two' || k === 'alone') { g.owners.L.sulk = 1; g.owners.L.sawing = true; g.owners.L.cut = 0.999; }
      if (k === 'alone') { g.owners.R.sulk = 1; g.owners.R.sawing = true; g.owners.R.cut = 0.999; g.paddle.holder = 'C'; }
      if (k === 'door') g.hp = 0.001;
      a.debugJump(1150, k === 'door' ? -0.3 : 0);
    }, kind);
    await wait(1500);
    if (kind === 'door') await ev(page, () => { const a = window.__rafting; if (!a.game.house.door) a.game.shatter(); });
    await ev(page, () => { const a = window.__rafting; a.debugJump(1236, 0); a.game.house.vd = 6; });
    for (let i = 0; i < 8; i++) {
      await wait(2500);
      await shot(`50-ending-${kind}-${i}`);
    }
  },
  async misc({ page, shot, wait }) {
    await wait(2500);
    await shot('60-title');
    await page.click('#btn-start');
    await wait(2000);
    await page.click('#btn-pause');
    await wait(500);
    await shot('61-pause');
    await page.click('#btn-resume');
    await ev(page, () => { const a = window.__rafting; a.debugJump(84, 0.3); a.game.hp = 0.01; });
    await wait(4000);
    await shot('62-door-mode');
    await ev(page, () => { const a = window.__rafting; a.debugJump(130, 0); });
    await wait(5000);
    await shot('63-fail');
    await wait(3000);
    await shot('64-fail-panel');
  },
  async stroke({ page, shot, wait }) {
    await start(page, wait);
    await ev(page, () => {
      const a = window.__rafting;
      a.manual = true;
      a.debugJump(30, 0);
      a.rig.setMode('close');
      a.rig.closeDist = 0.9;
      a.rig.closeSide = 2;
      a.rig.closeLook = -3;
      a.step(1 / 30, 60);
      a.tapOwner('L');
    });
    for (let i = 0; i < 12; i++) {
      await ev(page, () => window.__rafting.step(1 / 30, 2));
      await shot(`70-stroke-${String(i).padStart(2, '0')}`);
    }
  },
  async keaton({ page, shot, wait }) {
    await start(page, wait);
    await ev(page, () => {
      const a = window.__rafting;
      a.manual = true;
      a.debugJump(30, 0);
      a.rig.setMode('close');
      a.rig.closeDist = 1.1;
      a.rig.closeSide = 3;
      a.rig.closeLook = -2.5;
      a.step(1 / 30, 30);
      // knock the left room's front wall down twice
      const wall = a.house.pieces.find((p) => p.keaton === 'L');
      a.house.breakPiece(wall, 0.5, a.game);
    });
    await ev(page, () => window.__rafting.step(1 / 30, 20));
    await shot('80-lean');
    await ev(page, () => { const a = window.__rafting; const wall = a.house.pieces.find((p) => p.keaton === 'L'); wall.anim = null; a.house.breakPiece(wall, 0.9, a.game); });
    for (let i = 0; i < 6; i++) {
      await ev(page, () => window.__rafting.step(1 / 30, 4));
      await shot(`81-fall-${i}`);
    }
  },
  async auto({ page, shot, wait }) {
    await start(page, wait);
    await ev(page, () => { const a = window.__rafting; a.auto = { fair: true }; a.fast = 4; });
    for (let i = 0; i < 16; i++) {
      await wait(4000);
      const st = await ev(page, () => { const g = window.__rafting.game; return `${window.__rafting.state} d=${g.house.d.toFixed(0)} hp=${g.hp.toFixed(2)} aboard=${g.aboard().join('')}`; });
      console.log(st);
      await shot(`20-auto-${String(i).padStart(2, '0')}`);
      if (st.startsWith('ending') || st.startsWith('failed')) break;
    }
    await wait(6000);
    await shot('29-end');
  },
};
