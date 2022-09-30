import { defineConfig } from 'astro/config'
import solidjs from '@astrojs/solid-js'
import Uno from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [solidjs(), Uno()],
})
