<template>
  <button class="my-btn" @click="$emit('click')">
    {{ btnText }}
  </button>
</template>

<script setup>
// 定义组件属性：按钮文字
defineProps({
  btnText: {
    type: String,
    required: true // 必传属性
  }
})
// 定义组件事件：点击事件
defineEmits(['click'])
</script>

<style scoped>
.my-btn {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 20px;
}
.my-btn:hover {
  background-color: #359469;
}
</style>