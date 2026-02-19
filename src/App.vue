<template>
  <div id="app">
    <!-- 导航栏-->
    <nav class="nav-container" v-show="!isHomePage">
     <ul class="nav-list">
        <li class="nav-item">
          <a href="#story" class="nav-link">剧情简介</a>
        </li>
        <li class="nav-item">
          <a href="#characters" class="nav-link">主要角色</a>
        </li>
        <li class="nav-item">
          <a href="#stills" class="nav-link">剧照赏析</a>
        </li>
        <li class="nav-item">
          <a href="#gallery" class="nav-link">文化遗产</a>
        </li>
        <li class="nav-item">
          <a href="#reviews" class="nav-link">大众评价</a>
        </li>
      </ul>

    </nav>

    <router-view />
	<!-- 背景音乐控件 -->
    <div class="audio-control">
      <button @click="toggleMusic">
        {{ isPlaying ? '暂停音乐' : '播放音乐' }}
      </button>
    </div>
  </div>
</template>

<script setup>


import { useRoute } from 'vue-router'
import { computed, ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')


const audio = ref(null)
const isPlaying = ref(false)


onMounted(() => {
  audio.value = new Audio('/public/music/zhz_music.mp3') 

  audio.value.loop = true
 
    audio.value.muted = true

  audio.value.load()
})

// 播放/暂停音乐
const toggleMusic = () => {
  if (isPlaying.value) {
    audio.value.pause()
  } else {
    
    if (audio.value.muted) audio.value.muted = false
    audio.value.play()
  }
  isPlaying.value = !isPlaying.value
}


onUnmounted(() => {
  if (audio.value) {
    audio.value.pause()
    audio.value = null
  }
})
</script>

<style scopedsrc="/src/style.css">

</style>