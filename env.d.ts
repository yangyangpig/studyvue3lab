/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Vue 3 类型声明
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // 这里可以声明全局组件
  }
}

// 声明 Vue 模板中的内置元素
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
