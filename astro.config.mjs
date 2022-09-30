import { defineConfig } from 'astro/config'
import solidjs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  integrations: [solidjs()],
})
