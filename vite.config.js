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
      timeout: 3000, // 30 seconds (default is 10 seconds)
      overlay: false, // shows errors on the browser overlay
    },
    watch: {
      usePolling: true, // Enable polling in case your system is not detecting changes correctly
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2020', // Set target to modern JS for better performance
      },
    },
  },
});
