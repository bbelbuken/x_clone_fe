import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import PluginInspect from 'vite-plugin-inspect';

export default defineConfig({
    plugins: [
        tailwindcss(),
        react({
            fastRefresh: true, // Enable fast refresh
            preact: {
                // Enable Preact for faster HMR
                preact: true,
            },
        }),
        PluginInspect(),
    ],
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
            croppie: 'croppie/croppie.min.js',
        },
    },
    server: {
        port: 3000,
        hmr: {
            timeout: 5000, // Increase timeout to 5 seconds
            overlay: false, // Disable overlay to reduce overhead
        },
        watch: {
            usePolling: false, // Disable polling unless absolutely necessary
        },
        optimizeDeps: {
            include: [
                // Add any large dependencies here to pre-bundle them
                'react',
                'react-dom',
                'croppie',
            ],
            esbuildOptions: {
                target: 'es2020', // Modern JS target
            },
        },
    },
});
