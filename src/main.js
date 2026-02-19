import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
// 导入路由实例
import router from './router/index.js'

// 创建Vue实例并挂载路由、挂载到DOM节点
createApp(App).use(router).mount('#app')