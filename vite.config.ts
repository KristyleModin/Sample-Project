import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use a relative base so the site works when deployed to a subpath (GitHub Pages)
export default defineConfig({
  base: './',
  plugins: [react()],
})
