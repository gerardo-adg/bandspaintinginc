import { mkdir, writeFile } from 'node:fs/promises';
import { build } from 'esbuild';

await mkdir('dist/server', { recursive: true });
await build({
  entryPoints: ['worker/index.mjs'],
  bundle: true,
  platform: 'neutral',
  format: 'esm',
  outfile: 'dist/server/index.js',
});
await writeFile('dist/server/wrangler.json', JSON.stringify({
  main: 'index.js',
  compatibility_date: '2026-05-15',
  assets: { directory: '../client', binding: 'ASSETS', run_worker_first: true },
}, null, 2));
