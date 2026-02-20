// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  // 重点：这一行必须和你的仓库名一致
  base: process.env.NODE_ENV === 'production' ? '/my-vue-protect/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // 必须有这一行
    }
  }
})