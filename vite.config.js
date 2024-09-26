// It ia a package bundler.
// It is a build tool that aims to provide faster development expierence for modern web projects.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
