<template>
  <div class="container-fluid">
    <!-- 布局示例 -->
    <section class="mb-8">
      <h2 class="text-title mb-4">布局示例</h2>
      <div class="grid-3">
        <div class="card-hover">
          <h3 class="text-subtitle mb-2">Flexbox 布局</h3>
          <div class="flex-center h-32 bg-gray-100 rounded-lg">
            <span class="text-body">居中对齐</span>
          </div>
        </div>
        <div class="card-hover">
          <h3 class="text-subtitle mb-2">Grid 布局</h3>
          <div class="grid grid-cols-2 gap-2 h-32 bg-gray-100 rounded-lg p-2">
            <div class="bg-blue-200 rounded flex-center">1</div>
            <div class="bg-green-200 rounded flex-center">2</div>
            <div class="bg-yellow-200 rounded flex-center">3</div>
            <div class="bg-red-200 rounded flex-center">4</div>
          </div>
        </div>
        <div class="card-hover">
          <h3 class="text-subtitle mb-2">绝对定位</h3>
          <div class="relative h-32 bg-gray-100 rounded-lg">
            <div class="absolute-center bg-blue-500 text-white px-3 py-1 rounded">
              居中元素
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 按钮示例 -->
    <section class="mb-8">
      <h2 class="text-title mb-4">按钮样式</h2>
      <div class="flex flex-wrap gap-4">
        <button class="btn-primary">主要按钮</button>
        <button class="btn-secondary">次要按钮</button>
        <button class="btn-success">成功按钮</button>
        <button class="btn-danger">危险按钮</button>
        <button class="btn-warning">警告按钮</button>
        <button class="btn-info">信息按钮</button>
        <button class="btn-outline">轮廓按钮</button>
      </div>
    </section>

    <!-- 表单示例 -->
    <section class="mb-8">
      <h2 class="text-title mb-4">表单元素</h2>
      <div class="grid-2">
        <div>
          <label class="block text-body mb-2">正常输入框</label>
          <input type="text" class="input" placeholder="请输入内容">
        </div>
        <div>
          <label class="block text-body mb-2">错误输入框</label>
          <input type="text" class="input-error" placeholder="错误状态">
        </div>
        <div>
          <label class="block text-body mb-2">成功输入框</label>
          <input type="text" class="input-success" placeholder="成功状态">
        </div>
        <div>
          <label class="block text-body mb-2">焦点状态</label>
          <input type="text" class="input focus:ring-4" placeholder="点击查看焦点效果">
        </div>
      </div>
    </section>

    <!-- 颜色系统 -->
    <section class="mb-8">
      <h2 class="text-title mb-4">颜色系统</h2>
      <div class="grid-4">
        <div class="text-center">
          <div class="w-16 h-16 bg-primary-500 rounded-lg mx-auto mb-2"></div>
          <span class="text-caption">Primary</span>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-secondary-500 rounded-lg mx-auto mb-2"></div>
          <span class="text-caption">Secondary</span>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-success-500 rounded-lg mx-auto mb-2"></div>
          <span class="text-caption">Success</span>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-warning-500 rounded-lg mx-auto mb-2"></div>
          <span class="text-caption">Warning</span>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-danger-500 rounded-lg mx-auto mb-2"></div>
          <span class="text-caption">Danger</span>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-info-500 rounded-lg mx-auto mb-2"></div>
          <span class="text-caption">Info</span>
        </div>
      </div>
    </section>

    <!-- 动画示例 -->
    <section class="mb-8">
      <h2 class="text-title mb-4">动画效果</h2>
      <div class="grid-3">
        <div class="card-hover animate-fade-in">
          <h3 class="text-subtitle mb-2">淡入动画</h3>
          <p class="text-body">这个卡片使用了淡入动画效果</p>
        </div>
        <div class="card-hover animate-slide-up">
          <h3 class="text-subtitle mb-2">滑入动画</h3>
          <p class="text-body">这个卡片使用了滑入动画效果</p>
        </div>
        <div class="card-hover animate-scale-in">
          <h3 class="text-subtitle mb-2">缩放动画</h3>
          <p class="text-body">这个卡片使用了缩放动画效果</p>
        </div>
      </div>
    </section>

    <!-- 响应式示例 -->
    <section class="mb-8">
      <h2 class="text-title mb-4">响应式设计</h2>
      <div class="grid-1 md:grid-2 lg:grid-4">
        <div class="card text-center">
          <div class="text-2xl font-bold text-primary-500 mb-2">1</div>
          <p class="text-caption">移动端单列</p>
        </div>
        <div class="card text-center">
          <div class="text-2xl font-bold text-success-500 mb-2">2</div>
          <p class="text-caption">平板双列</p>
        </div>
        <div class="card text-center">
          <div class="text-2xl font-bold text-warning-500 mb-2">3</div>
          <p class="text-caption">桌面四列</p>
        </div>
        <div class="card text-center">
          <div class="text-2xl font-bold text-danger-500 mb-2">4</div>
          <p class="text-caption">大屏四列</p>
        </div>
      </div>
    </section>

    <!-- 间距和排版 -->
    <section class="mb-8">
      <h2 class="text-title mb-4">间距和排版</h2>
      <div class="space-y-4">
        <h1 class="text-4xl font-bold text-gray-900">标题 1</h1>
        <h2 class="text-3xl font-semibold text-gray-800">标题 2</h2>
        <h3 class="text-2xl font-medium text-gray-700">标题 3</h3>
        <h4 class="text-xl font-normal text-gray-600">标题 4</h4>
        <p class="text-lg text-gray-500">正文大号</p>
        <p class="text-base text-gray-400">正文标准</p>
        <p class="text-sm text-gray-300">正文小号</p>
        <p class="text-xs text-gray-200">正文极小</p>
      </div>
    </section>

    <!-- 阴影和边框 -->
    <section class="mb-8">
      <h2 class="text-title mb-4">阴影和边框</h2>
      <div class="grid-3">
        <div class="card shadow-sm">
          <h3 class="text-subtitle mb-2">小阴影</h3>
          <p class="text-body">shadow-sm 类</p>
        </div>
        <div class="card shadow-md">
          <h3 class="text-subtitle mb-2">中阴影</h3>
          <p class="text-body">shadow-md 类</p>
        </div>
        <div class="card shadow-lg">
          <h3 class="text-subtitle mb-2">大阴影</h3>
          <p class="text-body">shadow-lg 类</p>
        </div>
      </div>
    </section>

    <!-- 交互效果 -->
    <section class="mb-8">
      <h2 class="text-title mb-4">交互效果</h2>
      <div class="grid-3">
        <div class="card-hover hover:scale-105 transition-transform cursor-pointer">
          <h3 class="text-subtitle mb-2">悬停缩放</h3>
          <p class="text-body">鼠标悬停时放大</p>
        </div>
        <div class="card-hover hover:rotate-1 transition-transform cursor-pointer">
          <h3 class="text-subtitle mb-2">悬停旋转</h3>
          <p class="text-body">鼠标悬停时旋转</p>
        </div>
        <div class="card-hover hover:shadow-xl transition-shadow cursor-pointer">
          <h3 class="text-subtitle mb-2">悬停阴影</h3>
          <p class="text-body">鼠标悬停时增强阴影</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
/* 组件特定样式 */
</style>