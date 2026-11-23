// GitHub Pages serves the root of `main`, so the built site is copied there.
import { cpSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const generated = ['index.html', 'uz', '_astro', 'brand', 'favicon.png', 'apple-touch-icon.png', 'og.jpg'];

execSync('npx astro build', { stdio: 'inherit' });
for (const item of generated) rmSync(item, { recursive: true, force: true });
for (const item of readdirSync('dist')) {
  if (!generated.includes(item)) throw new Error(`Add "${item}" to the generated list in scripts/publish-pages.mjs`);
  cpSync(`dist/${item}`, item, { recursive: true });
}
writeFileSync('.nojekyll', '');
console.log('Site copied to the repository root. Commit and push main to publish.');
