import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shokhasheesh.github.io',
  base: '/FURASENTR',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  server: { port: 4321 },
});
