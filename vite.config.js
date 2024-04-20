// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: "/lrs-live/",
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        level1: './level1.html',
        level2: './level2.html',
        level3: './level3.html',
        lizensen: './lizensen.html',
        // Fügen Sie hier weitere Unterseiten hinzu
      }
    }
  }
});