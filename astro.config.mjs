import { defineConfig } from 'astro/config';

// GitHub Pages serves a project repo under /<repo-name>/, but a user site
// (hacu9.github.io) serves from the root. The deploy workflow sets SITE_BASE
// so the same build works either way. Locally it stays '/'.
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site: 'https://hacu9.github.io',
  base,
  // No SSR anywhere: GitHub Pages serves static files only.
  output: 'static',
  build: {
    // Emit /signal/index.html rather than /signal.html so Pages resolves
    // the directory URLs the variants link to.
    format: 'directory',
  },
  vite: {
    build: {
      // The variants each ship one small island; keep them as separate chunks
      // so a visitor to /kinetic never downloads the WebGL bundle.
      cssCodeSplit: true,
    },
  },
});
