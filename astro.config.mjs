// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Canonical origin for canonical links, the sitemap and og:url. Override with SITE_URL=...
export default defineConfig({
	site: process.env.SITE_URL ?? 'https://davidludington.netlify.app',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});