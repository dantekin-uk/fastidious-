import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/fastidious-/',
  server: {
    port: 3000,
    host: true
  }
})
