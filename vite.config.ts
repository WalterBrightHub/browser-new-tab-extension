import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 12700,
    proxy:{
      '/api/weibo':{
        target:'https://weibo.com/ajax/statuses/hot_band',
        changeOrigin:true,
        rewrite:path=>path.replace(/^\/api\/weibo/,'')
      }
    }
  },
  build: {
    outDir: 'dist/walter-extension',
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
