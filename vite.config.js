import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/vue_vuex_axios_sample/",
  plugins: [vue()],
  server:{
    proxy: {
      '/vue_vuex_axios_sample/api': {
           target: 'https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=1',
           changeOrigin: true,
           secure: false,
           rewrite: (path) => path.replace(/^\/api/, '')
       }
    }
  }
  
})
