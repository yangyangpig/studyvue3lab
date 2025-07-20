<template>
  <div>
    <h2>Vue3 事件处理演示</h2>
    <!-- 1. 基本事件绑定 -->
    <button @click="handleClick">点击我（基本事件）</button>

    <!-- 2. 事件修饰符 -->
    <button @click.stop="handleClick">阻止冒泡（.stop）</button>
    <button @click.prevent="handleClick">阻止默认（.prevent）</button>
    <button @click.self="handleClick">仅自身触发（.self）</button>
    <button @click.once="handleClick">只触发一次（.once）</button>

    <!-- 3. 传递参数和事件对象 -->
    <button @click="handleWithParam('Hello', $event)">传参和事件对象</button>

    <!-- 4. 子组件自定义事件 -->
    <ChildButton @custom-click="handleCustomClick" />

    <!-- 5. 内联函数和箭头函数 -->
    <button @click="count++">内联表达式：count = {{ count }}</button>
    <button @click="() => handleArrow()">箭头函数</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildButton from './ChildButton.vue'

const count = ref(0)

function handleClick(event: MouseEvent) {
  alert('按钮被点击！')
  console.log('事件对象:', event)
}

function handleWithParam(msg: string, event: MouseEvent) {
  alert(`参数: ${msg}`)
  console.log('事件对象:', event)
}

function handleCustomClick(payload: string) {
  alert(`收到子组件自定义事件: ${payload}`)
}

function handleArrow() {
  alert('箭头函数事件处理')
}
</script>