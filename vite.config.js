import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // relative asset paths: dist/ works from any sub-path (e.g. GitHub Pages)
  build: {
    rollupOptions: {
      output: { manualChunks: { three: ['three'] } }, // three.js changes rarely: its own long-cacheable chunk
    },
    chunkSizeWarningLimit: 600,
  },
});
