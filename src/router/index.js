// 导入Vue Router核心方法和页面组件
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

// 定义路由规则
const routes = [
  {
    path: '/', // 根路径
    name: 'Home',
    component: Home ,// 对应首页组件
    meta: { showNav: false } // 主页面不显示导航栏
  },
  {
    path: '/about', // 关于页路径
    name: 'About',
    component: About, // 对应关于页组件
     meta: { showNav: true }  // 详情页显示导航栏
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // HTML5历史模式（去掉URL中的#）
  routes
})

export default router