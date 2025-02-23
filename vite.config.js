import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      features: '/src/features',
      components: '/src/components',
      hooks: '/src/hooks',
      layout: '/src/layout',
      pages: '/src/pages',
      routes: '/src/routes',
      store: '/src/store',
      utils: '/src/utils',
    },
  },
  server: {
    port: 3000,
    hmr: {
      timeout: 30000, // 30 seconds (default is 10 seconds)
      overlay: true, // shows errors on the browser overlay
    },
  },
});
