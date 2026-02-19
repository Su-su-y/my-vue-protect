<template>
  <div class="full-video-wrap">
    <!-- 全屏背景视频 -->
    <video class="bg-video" autoplay loop muted playsinline>
      <source src="/public/video/sy-video.mp4" type="video/mp4">
    </video>
    <!-- 悬浮文字+按钮 -->
    <div class="center-content">
      <h1>藏海传</h1>
      <p>少年藏海 权谋乱世 以智昭雪 以心守义</p>
      <!-- 按钮跳转，无导航栏 -->
      <div class="btn-group">
        <button class="btn-primary" @click="goDetail">恭迎入局，共赴权谋风云</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// 按钮跳转方法
const goDetail = () => {
  router.push('/about') 
}
const goWatch = () => {
  alert('跳转至播放页面') 
}
</script>

<style scoped src="/src/style.css">

</style>