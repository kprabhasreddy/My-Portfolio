import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // DO NOT set base: './' or any subfolder for Vercel!
  // Just leave it as default (no base property)
});
