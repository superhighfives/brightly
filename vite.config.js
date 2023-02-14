import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx(), svgr(), eslint()],
  build: {
    assetsInlineLimit: Infinity,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
})
