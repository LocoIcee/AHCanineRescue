import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/AHCanineRescue/",
  server: {
    host: '0.0.0.0',   
    port: 80, 
    strictPort: true,              
    hmr: {
      clientPort: 80        
    },
    allowedHosts: ['AHCRescue.privatedns.org']   
  },
})
