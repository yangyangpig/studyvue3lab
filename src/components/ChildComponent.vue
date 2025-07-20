<template>
  <div class="child-component">
    <button @click="emitCustom">触发自定义事件</button>
    <button @click="emitCustomWithData">触发带数据的自定义事件</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['custom-event', 'custom-event-with-data'])
function emitCustom() {
  emit('custom-event')
}
function emitCustomWithData() {
  emit('custom-event-with-data', { message: '来自子组件的数据' })
}
</script>