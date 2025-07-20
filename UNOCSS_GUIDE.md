# UnoCSS 配置指南

## 概述

这个 UnoCSS 配置提供了全面的 CSS 工具类，覆盖了所有常用的 CSS 属性，包括布局、颜色、排版、动画、响应式设计等。

## 配置特性

### 1. 预设配置
- **presetUno()**: 默认预设，包含所有基础工具类
- **presetAttributify()**: 属性化模式支持
- **presetIcons()**: 图标支持
- **presetTypography()**: 排版预设
- **presetWebFonts()**: Web 字体预设

### 2. 颜色系统

#### 主色调
```html
<!-- 主要颜色 -->
<div class="bg-primary-500 text-white">Primary</div>
<div class="bg-secondary-500 text-white">Secondary</div>

<!-- 状态颜色 -->
<div class="bg-success-500 text-white">Success</div>
<div class="bg-warning-500 text-white">Warning</div>
<div class="bg-danger-500 text-white">Danger</div>
<div class="bg-info-500 text-white">Info</div>
```

#### 颜色变体
- `50-900`: 从浅到深的颜色变体
- `hover:`, `active:`, `focus:`: 状态变体

### 3. 布局系统

#### Flexbox
```html
<!-- 基础 Flexbox -->
<div class="flex">水平排列</div>
<div class="flex-col">垂直排列</div>

<!-- 对齐 -->
<div class="flex-center">居中对齐</div>
<div class="flex-between">两端对齐</div>
<div class="flex-col-center">垂直居中</div>
```

#### Grid
```html
<!-- 响应式网格 -->
<div class="grid-1 md:grid-2 lg:grid-4">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
  <div>项目 4</div>
</div>
```

#### 定位
```html
<!-- 绝对定位居中 -->
<div class="absolute-center">居中元素</div>
<div class="fixed-center">固定居中</div>
```

### 4. 按钮系统

```html
<!-- 按钮样式 -->
<button class="btn-primary">主要按钮</button>
<button class="btn-secondary">次要按钮</button>
<button class="btn-success">成功按钮</button>
<button class="btn-danger">危险按钮</button>
<button class="btn-warning">警告按钮</button>
<button class="btn-info">信息按钮</button>
<button class="btn-outline">轮廓按钮</button>
```

### 5. 表单元素

```html
<!-- 输入框 -->
<input class="input" placeholder="正常输入框">
<input class="input-error" placeholder="错误状态">
<input class="input-success" placeholder="成功状态">
<input class="input focus:ring-4" placeholder="焦点效果">
```

### 6. 排版系统

```html
<!-- 标题样式 -->
<h1 class="text-title">主标题</h1>
<h2 class="text-subtitle">副标题</h2>
<p class="text-body">正文内容</p>
<p class="text-caption">说明文字</p>
```

### 7. 动画系统

```html
<!-- 进入动画 -->
<div class="animate-fade-in">淡入动画</div>
<div class="animate-slide-up">滑入动画</div>
<div class="animate-scale-in">缩放动画</div>
<div class="animate-bounce-in">弹跳动画</div>
```

### 8. 响应式设计

```html
<!-- 响应式显示 -->
<div class="hidden md:block">平板及以上显示</div>
<div class="block md:hidden">仅移动端显示</div>

<!-- 响应式网格 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- 内容 -->
</div>
```

### 9. 交互效果

```html
<!-- 悬停效果 -->
<div class="hover:scale-105 transition-transform">悬停放大</div>
<div class="hover:rotate-1 transition-transform">悬停旋转</div>
<div class="hover:shadow-xl transition-shadow">悬停阴影</div>

<!-- 焦点效果 -->
<input class="focus:ring-2 focus:ring-primary-500">
```

### 10. 间距系统

```html
<!-- 边距 -->
<div class="m-4">外边距</div>
<div class="p-4">内边距</div>

<!-- 方向边距 -->
<div class="mt-4 mb-4 ml-4 mr-4">各方向边距</div>
<div class="pt-4 pb-4 pl-4 pr-4">各方向内边距</div>
```

### 11. 阴影系统

```html
<!-- 阴影大小 -->
<div class="shadow-sm">小阴影</div>
<div class="shadow-md">中阴影</div>
<div class="shadow-lg">大阴影</div>
<div class="shadow-xl">超大阴影</div>
```

### 12. 边框系统

```html
<!-- 边框 -->
<div class="border border-gray-300">基础边框</div>
<div class="border-2 border-primary-500">粗边框</div>
<div class="rounded-lg">圆角</div>
```

## 快捷方式 (Shortcuts)

### 布局快捷方式
- `flex-center`: 居中对齐
- `flex-between`: 两端对齐
- `flex-col-center`: 垂直居中
- `absolute-center`: 绝对定位居中
- `fixed-center`: 固定定位居中

### 组件快捷方式
- `btn`: 基础按钮样式
- `btn-primary`: 主要按钮
- `btn-secondary`: 次要按钮
- `btn-success`: 成功按钮
- `btn-danger`: 危险按钮
- `btn-warning`: 警告按钮
- `btn-info`: 信息按钮
- `btn-outline`: 轮廓按钮

### 布局快捷方式
- `card`: 卡片样式
- `card-hover`: 悬停卡片
- `input`: 输入框样式
- `input-error`: 错误输入框
- `input-success`: 成功输入框

### 文本快捷方式
- `text-title`: 主标题
- `text-subtitle`: 副标题
- `text-body`: 正文
- `text-caption`: 说明文字

### 容器快捷方式
- `container-fluid`: 流体容器
- `container-sm`: 小容器
- `container-md`: 中容器
- `container-lg`: 大容器
- `container-xl`: 超大容器
- `container-2xl`: 最大容器

### 网格快捷方式
- `grid-auto`: 自动网格
- `grid-2`: 双列网格
- `grid-3`: 三列网格
- `grid-4`: 四列网格

## 使用示例

### 完整的卡片组件
```html
<div class="card-hover animate-fade-in">
  <h3 class="text-subtitle mb-2">卡片标题</h3>
  <p class="text-body mb-4">卡片内容描述</p>
  <div class="flex gap-2">
    <button class="btn-primary">确认</button>
    <button class="btn-outline">取消</button>
  </div>
</div>
```

### 响应式导航栏
```html
<nav class="bg-white shadow-md px-6 py-4">
  <div class="flex-between">
    <div class="text-title">Logo</div>
    <div class="hidden md:flex gap-4">
      <a href="#" class="nav-link">首页</a>
      <a href="#" class="nav-link">关于</a>
      <a href="#" class="nav-link">联系</a>
    </div>
  </div>
</nav>
```

### 表单组件
```html
<form class="space-y-4">
  <div>
    <label class="block text-body mb-2">用户名</label>
    <input type="text" class="input" placeholder="请输入用户名">
  </div>
  <div>
    <label class="block text-body mb-2">密码</label>
    <input type="password" class="input" placeholder="请输入密码">
  </div>
  <button type="submit" class="btn-primary w-full">登录</button>
</form>
```

## 最佳实践

### 1. 类名组织
```html
<!-- 推荐：按功能分组 -->
<div class="
  flex items-center justify-between
  p-4 bg-white rounded-lg shadow-md
  hover:shadow-lg transition-shadow
">
```

### 2. 响应式设计
```html
<!-- 移动优先 -->
<div class="
  grid grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
  gap-4
">
```

### 3. 状态管理
```html
<!-- 使用状态类 -->
<button class="
  btn-primary
  disabled:opacity-50 disabled:cursor-not-allowed
  loading:animate-spin
">
```

### 4. 主题定制
```css
/* 在 CSS 中定义主题变量 */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
}
```

## 调试技巧

### 1. 检查生成的 CSS
```bash
# 查看生成的 CSS
npx unocss --out-file dist/uno.css
```

### 2. 使用开发者工具
- 在浏览器中检查元素
- 查看应用的 CSS 类
- 验证响应式断点

### 3. 常见问题
- 确保类名拼写正确
- 检查响应式前缀
- 验证状态类名

## 扩展配置

### 添加自定义规则
```typescript
rules: [
  [/^custom-(\w+)$/, ([, value]) => ({
    'custom-property': value
  })]
]
```

### 添加自定义快捷方式
```typescript
shortcuts: {
  'my-shortcut': 'p-4 bg-blue-500 text-white'
}
```

### 添加自定义主题
```typescript
theme: {
  colors: {
    custom: '#ff0000'
  }
}
```

这个配置提供了全面的 CSS 工具类，可以满足大部分前端开发需求。通过合理使用这些类，可以快速构建现代化的用户界面。