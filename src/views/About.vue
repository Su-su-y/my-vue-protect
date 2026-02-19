<template>
  <div class="page-container">
    <!-- 图片区域 -->
    <div class="image-wrapper">
      <!-- 左侧演员图 -->
      <img src="/images/haibao_xz.jpg" alt="肖战剧照" class="actor-img">
      <!-- 中间轮播图 -->
      <div class="carousel">
        <img :src="carouselImages[currentIndex]" alt="轮播图" class="carousel-img">
        <button class="carousel-btn prev" @click="prevSlide">&lt;</button>
        <button class="carousel-btn next" @click="nextSlide">&gt;</button>
      </div>
      <!-- 右侧演员图 -->
      <img src="/images/haibao_zjy.jpg" alt="张婧仪剧照" class="actor-img">
    </div>

    <!-- 下方长图片 -->
    <div class="bottom-image">
      <img src="/images/haibao_long.jpg" alt="藏海传群像" class="group-img">
    </div>






  <!--抠图-->
    <div class="story-section" id="story">
    <div class="image-koutu">
      <!-- 左侧k图 -->
      <img src="/images/koutu_jz.png" alt="肖战剧照" class="koutu-img">
      <!-- 中间k图 -->
       <img src="/images/koutu_gc.png" alt="肖战剧照" class="koutu-img">
      <!-- 右侧k图 -->
      <img src="/images/koutu_xue.png" alt="张婧仪剧照" class="koutu-img">
    </div>

   <hr color="black">
     <!-- 剧情简介部分 -->
      <h2 class="section-title">剧情简介</h2>
      <div class="story-content">
        <p>
          《藏海传》是古装悬疑剧，改编自南派三叔《藏海戏麟》，是《盗墓笔记》系列的前传作品，讲述了大雍国钦天监监正之子汪藏海（原名蒯稚奴）在家族被灭门后，化名"藏海"重返京城，凭借堪舆术与权谋智斗奸佞，最终揭开阴谋并守护家国的故事。
						核心剧情与亮点
						复仇与权谋：主角通过破解帝后合葬陵机关、利用朝堂矛盾等方式，逐步揭露灭门真相，过程中展现了精密的谋略与隐忍性格。家国情怀：在个人复仇之外，主角发现更大阴谋，最终选择放下私仇，联合他人阻止战争，展现从"复仇者"到"守护者"的蜕变。
						复杂人物关系：涉及平津侯庄芦隐、首辅石怀山等势力，以及香暗茶（东夏公主）等重要角色，人物动机多元，推动剧情发展。
						制作与阵容:
        </p>
        <p>
          由郑晓龙、曹译文执导，肖战饰演主角汪藏海，张婧仪饰演香暗荼。
        </p>
        <p class="story-tag">
          权谋/古装/群像 | 以棋入局，以命破局
        </p>
        <hr color="black">
      </div>
    </div>




    <!-- 主要角色介绍部分 -->
    <div class="characters-section" id="characters">
      <h2 class="section-title1">主要角色</h2>
      <div class="characters-content">
        <div class="characters-list">
        <div class="character-card">
          <img src="/images/juese_zh.jpg" alt="藏海" class="character-img">
          <div class="character-info">
            <h3>藏海</h3>
            <p>稚奴七八岁时被三方势力灭门，经面具人拜星斗高明他们为师，<br>
						成年后化名汪藏海到京城，他凭一介文弱书生之躯，<br>
						运用聪明绝顶权谋展开复仇，利用太后之死如何下葬一事，<br>
						替平津侯庄芦隐解决难题，取得了他的青睐，趁机打进侯府，<br>
						设计除掉庄芦隐的心腹瞿蛟、褚怀明、杨真，顺势博取庄芦隐的信任，<br>
						成为心腹展开复仇大计。</p>
          </div>
        </div>
        <div class="character-card">
          <img src="/images/juese_xat.jpg" alt="香暗荼" class="character-img">
          <div class="character-info">
            <h3>香暗荼</h3>
            <p>她是明玉肃提的女儿，东夏二公主东夏与大雍爆发战争,<br>
						战败后成为附属国，香暗茶到大雍为质子，香暗茶建立沉楼，大雍皇帝御笔亲书朱玉牌匾<br>
						她以沉楼为据点收集情报搜寻鬼玺稚奴成年后化名汪藏海，<br>
						来到京城开始复仇，与香暗荼认识，一来二去俩人产生了，<br>
						设计除掉庄芦隐的心腹瞿蛟、褚怀明、杨真，顺势博取庄芦隐的信任，<br>
						爱情，但这是一场虐恋经历无数波诡云谲与生离死别。</p>
          </div>
        </div>
        </div>
         <div class="characters-list">
        <div class="character-card">
          <img src="/images/juese_zly.jpg" alt="庄芦隐" class="character-img">
          <div class="character-info">
            <h3>庄芦隐</h3>
            <p>庄芦隐在大雍朝与东夏国的战争中，立下了不朽战功，被<br>
						皇帝封为骠骑大将军，袭平津侯，<br>
						他武艺高强手上鲜血无数，心思缜密生性多疑，身上无时无刻<br>
						都穿着金丝软甲，连睡觉也没有脱下，他与曹静贤一里一<br>
						外把持朝政，开始是合作盟友，后面是生死对手，庄芦隐<br>
						是觊觎鬼玺灭门蒯家的第三方势力。</p>
          </div>
        </div>
        <div class="character-card">
          <img src="/images/juese_kd.jpg" alt="蒯铎" class="character-img">
          <div class="character-info">
            <h3>蒯铎</h3>
            <p>钦天监监正蒯铎官阶为正五品，<br>
						类似于现在的国家天文气象台台长，<br>
						蒯铎也精通土木工程与风水，<br>
						彼时大雍皇朝与东夏国对立东夏有一传国秘宝鬼玺，<br>
						埋藏在深山地底密陵之中，相传此宝能召令百万地府阴兵，<br>
						大雍皇帝派蒯铎以在边境修封禅台的名义，<br>
						秘密寻找鬼玺，不料蒯铎找到后招来杀身之祸，<br>
						被三方觊觎宝物的势力灭门，只有稚奴逃出劫难。</p>
          </div>
        </div>
      </div>
      </div>
      </div>



    <h2 class="section-title">人物关系图（单击放大缩小）</h2>
       <!-- 一张可点击放大的人物关系图 -->
    <div class="big-image-container">
      <img 
        src="/images/gxt.jpg" 
        alt="藏海传古风场景" 
        class="big-image"
        @click="openImageViewer('/images/gxt.jpg')"
      >
    </div>

    <!-- 图片查看（点击放大） -->
    <div class="image-viewer" v-if="viewerVisible" @click="closeImageViewer">
      <img :src="viewerImage" alt="大图查看" class="viewer-image">
    </div>



    <!-- 剧照展示区域 -->
  <div class="still-section" id="stills">
    <!-- 藏海剧照组 -->
    <div class="character-stills">
      <h3 class="character-title">藏海</h3>
      <div class="stills-grid">
        <img src="/images/juzhao_zh01.jpg" alt="藏海剧照1" class="still-img">
        <img src="/images/juzhao_zh02.jpg" alt="藏海剧照2" class="still-img">
        <img src="/images/juzhao_zh03.jpg" alt="藏海剧照3" class="still-img">
        <img src="/images/juzhao_zh04.jpg" alt="藏海剧照4" class="still-img">
        <img src="/images/juzhao_zh05.jpg" alt="藏海剧照5" class="still-img">
        <img src="/images/juzhao_zh06.jpg" alt="藏海剧照6" class="still-img">
      </div>
    </div>

    <!-- 香暗茶剧照组 -->
    <div class="character-stills">
      <h3 class="character-title">香暗茶</h3>
      <div class="stills-grid">
        <img src="/images/juzhao_xat01.jpg" alt="香暗茶剧照1" class="still-img">
        <img src="/images/juzhao_xat02.jpg" alt="香暗茶剧照2" class="still-img">
        <img src="/images/juzhao_xat03.jpg" alt="香暗茶剧照3" class="still-img">
        <img src="/images/juzhao_xat04.jpg" alt="香暗茶剧照4" class="still-img">
        <img src="/images/juzhao_xat05.jpg" alt="香暗茶剧照5" class="still-img">
        <img src="/images/juzhao_xat06.jpg" alt="香暗茶剧照6" class="still-img">
      </div>
    </div>
  <!-- 庄芦隐剧照组 -->
    <div class="character-stills">
      <h3 class="character-title">庄芦隐</h3>
      <div class="stills-grid">
        <img src="/images/juzhao_zly01.jpg" alt="香暗茶剧照1" class="still-img">
        <img src="/images/juzhao_zly02.jpg" alt="香暗茶剧照2" class="still-img">
        <img src="/images/juzhao_zly03.jpg" alt="香暗茶剧照3" class="still-img">
        <img src="/images/juzhao_zly04.jpg" alt="香暗茶剧照4" class="still-img">
        <img src="/images/juzhao_zly05.jpg" alt="香暗茶剧照5" class="still-img">
      </div>
    </div>
  </div>


   <!-- 非物质文化遗产图片集区域 -->
    <div class="gallery-section" id="gallery">
      <h2 class="section-title">藏海传文化遗产集</h2>
      <div class="gallery-grid">
        <img src="/images/pyx.jpg" alt="文化遗产1" class="gallery-img">
        <img src="/images/qh.jpg" alt="文化遗产2" class="gallery-img">
        <img src="/images/sm.jpg" alt="文化遗产3" class="gallery-img">
         <img src="/images/md.jpg" alt="文化遗产4" class="gallery-img">
        <img src="/images/yfmo.jpg" alt="文化遗产5" class="gallery-img">
        <img src="/images/qg.jpg" alt="文化遗产6" class="gallery-img">
         <img src="/images/zj.jpg" alt="文化遗产7" class="gallery-img">
        <img src="/images/myq.jpg" alt="文化遗产8" class="gallery-img">
      </div>
    </div>
  </div>

   <!-- 大众评价区域（悬停轻微放大） -->
  <div class="reviews-section" id="reviews">
    <div class="character-stills">
      <h3 class="character-title">专家评价</h3>
      <div class="reviews-grid">
        <img src="/images/zjpj1.jpg" alt="专家评价1" class="reviews-img">
        <img src="/images/zjpj2.jpg" alt="专家专家评价2" class="reviews-img">
        <img src="/images/zjpj3.jpg" alt="专家评价3" class="reviews-img">
        <img src="/images/zjpj4.jpg" alt="专家评价4" class="reviews-img">
      </div>
    </div>

    <div class="character-stills">
      <h3 class="character-title">网友评价</h3>
      <div class="reviews-grid">
        <img src="/images/wypj1.jpg" alt="网友评价1" class="reviews-img">
        <img src="/images/wypj2.jpg" alt="网友评价2" class="reviews-img">
        <img src="/images/wypj3.jpg" alt="网友评价3" class="reviews-img">
        <img src="/images/wypj4.jpg" alt="网友评价4" class="reviews-img">
      </div>
      </div>



       <!-- 新增页脚部分 -->
    <footer class="footer-container">
    
      <div class="footer-bottom">
        <hr color="#805024" size="1">
        <p class="small-text">《藏海传》改编自南派三叔《藏海戏麟》，本网站非官方出品</p>
         <p class="small-text">数据1241杨素素    联系方式：19552833635     </p>
          <p class="small-text">QQ:3511580800</p>
      </div>
    </footer>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const carouselImages = [
  '/images/haibao_center.jpg',
  '/images/juzhao_qt06.jpg',
  '/images/lunbotu_03.jpg'
]
const currentIndex = ref(0)
let timer = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselImages.length
}
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + carouselImages.length) % carouselImages.length
}

const startCarousel = () => {
  timer = setInterval(nextSlide, 3000)
}
const stopCarousel = () => {
  clearInterval(timer)
}

onMounted(() => startCarousel())
onUnmounted(() => stopCarousel())




const viewerVisible = ref(false)
const viewerImage = ref('')

const openImageViewer = (src) => {
  viewerImage.value = src
  viewerVisible.value = true
}

const closeImageViewer = () => {
  viewerVisible.value = false
}



</script>

<style scoped src="/src/style.css">


</style>