import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js

export default defineConfig({
  base: '/My-Portfolio/', // <- MUST match your repo name
  plugins: [react()],
})
