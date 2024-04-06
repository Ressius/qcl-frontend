import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
  ],
  optimizeDeps : {
      include : ['@bryntum/grid', '@bryntum/grid-trial-lib', '@bryntum/grid-vue-3']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
