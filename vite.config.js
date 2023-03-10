import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {"/api": "server-site-p0ezf9x5u-riser17-s-team.vercel.app" },
  },
  plugins: [react()],
})
