import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ==========================================================================
// EDIT ME: Set "base" to match your GitHub repo name, e.g. '/portfolio/'
// If your repo is named '<your-username>.github.io', set base to '/'
// ==========================================================================
export default defineConfig({
  plugins: [react()],
  base: '/tamanna-portfolio/',
})
