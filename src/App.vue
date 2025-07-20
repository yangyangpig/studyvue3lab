<script setup lang="ts">
// 移除不需要的导入
</script>

<template>
  <div id="app">
    <header class="bg-white shadow-md px-6 py-4">
      <nav class="flex-between">
        <div class="text-title font-bold">Vue 3 Lab</div>
        <div class="flex gap-4">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/about" class="nav-link">关于</router-link>
          <router-link to="/unocss-demo" class="nav-link">UnoCSS 演示</router-link>
        </div>
      </nav>
    </header>

    <main class="container-fluid py-6">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
/* 移除原有的样式，使用 UnoCSS 类 */
</style>
