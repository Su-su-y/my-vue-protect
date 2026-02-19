import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 这里必须是你的仓库名，前面要加斜杠
  base: '/my-vue-protect/' 
})