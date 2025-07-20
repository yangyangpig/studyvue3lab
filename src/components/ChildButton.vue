<template>
  <button @click="emitCustomClick">子组件按钮（自定义事件）</button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'custom-click', payload: string): void
}>()

function emitCustomClick() {
  emit('custom-click', '子组件传递的数据')
}
</script>