// @ts-nocheck
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { loadEnv } from 'vite';

import mdx from '@astrojs/mdx';

const { PUBLIC_BASE_PATH } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: PUBLIC_BASE_PATH,
  integrations: [react(), sitemap(), robotsTxt(), mdx()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: ['400', '500', '600', '700'],
      fallbacks: ['system-ui', 'sans-serif'],
      optimizedFallbacks: true,
    },
    {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-serif',
      weights: ['400', '500', '600', '700'],
      fallbacks: ['Georgia', 'serif'],
      optimizedFallbacks: true,
    },
  ],
});