import { defineConfig } from 'astro/config'
import auth from 'auth-astro'
import tailwindcss from '@tailwindcss/vite'

import vercel from '@astrojs/vercel';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',
  integrations: [auth()],
  adapter: vercel(),
})