// Visual smoke test: serves the game, drives it in headless Chromium and saves screenshots.
// Usage: node tools/shots.mjs <outDir> [scenario]
import { createRequire } from 'module';
import http from 'http';
import fs from 'fs';
import path from 'path';

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require('/opt/node-tools/node_modules/playwright'));
}

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = path.resolve(process.argv[2] || 'shots');
const scenario = process.argv[3] || 'basic';
fs.mkdirSync(out, { recursive: true });

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const p = path.join(root, decodeURIComponent(req.url.split('?')[0]));
  const file = p.endsWith('/') ? path.join(p, 'index.html') : p;
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end();
      return;
    }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
});
await new Promise((r) => server.listen(0, r));
const port = server.address().port;

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, hasTouch: true, isMobile: true });
const logs = [];
page.on('console', (m) => logs.push(`[${m.type()}] ${m.text()}`));
page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}\n${e.stack}`));
await page.goto(`http://localhost:${port}/index.html${process.argv[4] ? '?' + process.argv[4] : ''}`);
await page.waitForFunction(() => window.__rafting, null, { timeout: 30000 });
const shot = async (name) => {
  await page.screenshot({ path: path.join(out, `${name}.png`) });
  console.log('shot', name);
};
const wait = (ms) => page.waitForTimeout(ms);
const scenarios = (await import(path.join(root, 'tools', 'scenarios.mjs'))).default;
try {
  await scenarios[scenario]({ page, shot, wait });
} catch (e) {
  console.log('scenario error', e);
}
fs.writeFileSync(path.join(out, 'console.txt'), logs.join('\n'));
console.log(logs.filter((l) => l.includes('error') || l.includes('warn')).slice(0, 30).join('\n'));
await browser.close();
server.close();
