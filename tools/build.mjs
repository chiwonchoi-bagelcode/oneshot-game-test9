// Bundles src/ into dist/game.js (a classic script, so index.html also works from file://).
import * as esbuild from 'esbuild';

const serve = process.argv.includes('--serve');
const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  target: ['es2020'],
  outfile: 'dist/game.js',
  minify: !serve,
  sourcemap: serve ? 'inline' : false,
  legalComments: 'none',
  logLevel: 'info',
};

if (serve) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: '.', port: 8080 });
  console.log(`dev server: http://localhost:${port}/`);
} else {
  await esbuild.build(options);
}
