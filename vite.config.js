import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {"/api": "http://3.80.94.112:9090" },
  },
  plugins: [react()],
})
