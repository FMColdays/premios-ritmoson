import { defineConfig } from 'astro/config'
import auth from 'auth-astro'
import tailwindcss from '@tailwindcss/vite'

import netlify from '@astrojs/netlify';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',
  integrations: [auth()],
  adapter: netlify(),
})