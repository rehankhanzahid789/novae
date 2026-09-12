import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built site works from a GitHub Pages project subpath.
export default defineConfig({
  plugins: [react()],
  base: './',
})
