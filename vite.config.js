import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy: {
      '/api': {
           target: 'https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=1',
           changeOrigin: true,
           secure: false,
           rewrite: (path) => path.replace(/^\/api/, '')
       }
    }
  }
  
})
