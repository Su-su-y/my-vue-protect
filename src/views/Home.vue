<template>
  <div class="full-video-wrap">
    <!-- 全屏背景视频 -->
    <video class="bg-video" autoplay loop muted playsinline>
      <source :src="videoSrc" type="video/mp4">
    </video>
    <!-- 悬浮文字+按钮 -->
    <div class="center-content">
      <h1>藏海传</h1>
      <p>少年藏海 权谋乱世 以智昭雪 以心守义</p>
      <div class="btn-group">
        <button class="btn-primary" @click="goDetail">恭迎入局，共赴权谋风云</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
// ✅ 修正这里：把 @assets 改成 @/assets
import videoSrc from '@/assets/video/sy-video.mp4'

const router = useRouter()

const goDetail = () => {
  router.push('/about') 
}
</script>

<style scoped src="/src/style.css"></style>