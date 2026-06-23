// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Maps the same `@` shortcut for the compiler during build time
      '@': path.resolve(__dirname, './src'),
    },
  },
})