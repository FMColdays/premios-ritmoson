import { defineConfig } from 'astro/config'
import auth from 'auth-astro'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',
  integrations: [auth(), react()],
  adapter: vercel(),
})
