import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import pages from 'vite-plugin-pages';
import sitemap from 'vite-plugin-sitemap';
import articlesMock from './src/constants/articlesMock';

const dynamicRoutes = articlesMock.map((name) => `/article/:${name.slug}`);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        // base: '/',
        base: '/vite-react-discoverability/',
        server: {
            port: Number(env.VITE_PORT),
        },
        plugins: [
            react(),
            tailwindcss(),
            sitemap({
                dynamicRoutes,
            }),
            pages({
                dirs: ['src/pages'],
            }),
        ],
    };
});
