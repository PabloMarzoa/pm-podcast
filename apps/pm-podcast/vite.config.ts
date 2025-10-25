/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {nxViteTsPaths} from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig(() => ({
    root: __dirname,
    define: {
        // Access environment variables in code
        'process.env': process.env,
    },
    cacheDir: '../../node_modules/.vite/apps/pm-podcast',
    server: {
        port: 4200,
        host: 'localhost',
    },
    preview: {
        port: 4300,
        host: 'localhost',
    },
    plugins: [
        react(),
        nxViteTsPaths(),
    ],
    build: {
        outDir: './dist',
        emptyOutDir: true,
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
    resolve: {
        alias: {
        "@store": `${path.resolve(__dirname, "./src/store/index")}`,
        "@hooks": `${path.resolve(__dirname, "./src/app/hooks/index")}`,
        "@pm-ds-ui": `${path.resolve(__dirname, "./src/ui/index")}`,
        },
    },
    test: {
        name: '@pm-podcast-nx/pm-podcast',
        watch: false,
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/test-setup.ts'], // ajusta la ruta según donde lo hayas creado
        include: [
            '{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
        ],
        reporters: ['default'],
        coverage: {
            reportsDirectory: './test-output/vitest/coverage',
            provider: 'v8' as const,
        },
    },
}));

