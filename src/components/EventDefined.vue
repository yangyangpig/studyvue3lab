<template>
  <div class="event-demo">
    <h1>Vue3 事件处理全面示例</h1>

    <!-- 1. 基本事件绑定 -->
    <section>
      <h2>1. 基本事件绑定</h2>
      <button @click="handleClick">点击我</button>
      <p>点击次数: {{ clickCount }}</p>
    </section>

    <!-- 2. 内联处理器中的方法 -->
    <section>
      <h2>2. 内联处理器中的方法</h2>
      <button @click="sayHello('Vue')">打招呼</button>
    </section>

    <!-- 3. 事件修饰符 -->
    <section>
      <h2>3. 事件修饰符</h2>
      <div @click.self="log('div 被点击')" class="modifier-box">
        <p>点击这个div会触发，点击里面的按钮不会触发(.self)</p>
        <button @click.stop="log('按钮被点击，事件已阻止冒泡')">阻止冒泡(.stop)</button>
      </div>

      <form @submit.prevent="handleSubmit">
        <button type="submit">提交表单(阻止默认行为.prevent)</button>
      </form>

      <input
        @keyup.enter="log('按下了Enter键')"
        placeholder="按Enter键触发"
      />
    </section>

    <!-- 4. 按键修饰符 -->
    <section>
      <h2>4. 按键修饰符</h2>
      <input
        @keyup.enter="log('按下了Enter键')"
        placeholder="按Enter键触发"
      >
      <input
        @keyup.ctrl.enter="log('按下了Ctrl+Enter')"
        placeholder="按Ctrl+Enter触发"
      >
    </section>

    <!-- 5. 系统修饰键 -->
    <section>
      <h2>5. 系统修饰键</h2>
      <button @click.ctrl="log('按住Ctrl点击')">Ctrl+点击</button>
      <button @click.shift.exact="log('只按住Shift点击')">仅Shift+点击</button>
    </section>

    <!-- 6. 鼠标按钮修饰符 -->
    <section>
      <h2>6. 鼠标按钮修饰符</h2>
      <button @click.right="log('右键点击')">右键点击我</button>
      <button @click.middle="log('中键点击')">中键点击我</button>
    </section>

    <!-- 7. 事件对象 -->
    <section>
      <h2>7. 事件对象</h2>
      <button @click="handleEventObject">获取事件对象</button>
      <input
        @input="handleInputEvent"
        placeholder="输入时获取事件对象"
      >
    </section>

    <!-- 8. 自定义事件 -->
    <section>
      <h2>8. 自定义事件</h2>
      <ChildComponent
        @custom-event="handleCustomEvent"
        @custom-event-with-data="handleCustomEventWithData"
      />
    </section>

    <!-- 9. 动态事件名 -->
    <section>
      <h2>9. 动态事件名</h2>
      <button @[dynamicEvent]="log('动态事件触发')">动态事件绑定</button>
      <select v-model="dynamicEvent">
        <option value="click">click</option>
        <option value="mouseover">mouseover</option>
        <option value="dblclick">dblclick</option>
      </select>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

// 1. 基本事件绑定
const clickCount = ref(0)
function handleClick() {
  clickCount.value++
  log(`按钮被点击了 ${clickCount.value} 次`)
}

// 2. 带参数的方法
function sayHello(name: string) {
  log(`你好，${name}！`)
}

// 3. 事件对象处理方法
function handleEventObject(event: MouseEvent) {
  log('事件对象:', event)
  log('触发元素:', event.target)
}

// 4. 输入事件处理
function handleInputEvent(event: Event) {
  const target = event.target as HTMLInputElement
  log('输入值:', target.value)
}

// 5. 自定义事件处理
function handleCustomEvent() {
  log('自定义事件被触发')
}
function handleCustomEventWithData(data: any) {
  log('带数据的自定义事件:', data)
}

// 6. 动态事件名
const dynamicEvent = ref('click')

// 辅助方法
function log(...args: any[]) {
  console.log(...args)
}

// 事件修饰符表单提交处理（防止报错）
function handleSubmit(e: Event) {
  e.preventDefault()
  log('表单已提交（默认行为已阻止）')
}

// 删除重复声明的ChildComponent
// const ChildComponent = defineComponent({ ... })
</script>

<style scoped>
.event-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
section {
  margin: 30px 0;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
}
h1 {
  color: #2c3e50;
  text-align: center;
}
h2 {
  color: #42b983;
  margin-top: 0;
}
button {
  margin: 5px;
  padding: 8px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #3aa876;
}
.modifier-box {
  padding: 15px;
  background-color: #f5f5f5;
  margin: 10px 0;
}
.child-component {
  padding: 10px;
  background-color: #f0f8ff;
  margin: 10px 0;
}
input, select {
  padding: 8px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>