import { defineConfig, presetUno, presetAttributify, presetIcons, presetTypography, presetWebFonts } from "unocss";

export default defineConfig({
  // 预设配置
  presets: [
    presetUno(), // 默认预设，包含所有基础工具类
    presetAttributify(), // 属性化模式支持
    presetIcons(), // 图标支持
    presetTypography(), // 排版预设
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        mono: 'Fira Code',
      },
    }),
  ],

  // 自定义规则
  rules: [
    // 自定义间距
    [/^space-([xy])-(\d+)$/, ([, d, s]) => ({
      [`margin-${d}`]: `${s * 0.25}rem`,
    })],

    // 自定义渐变
    [/^bg-gradient-(\w+)$/, ([, direction]) => ({
      'background-image': `linear-gradient(to ${direction}, var(--tw-gradient-stops))`,
    })],

    // 自定义阴影
    [/^shadow-(\w+)$/, ([, size]) => ({
      'box-shadow': `var(--tw-shadow-${size})`,
    })],
  ],

  // 自定义快捷方式
  shortcuts: {
    // 布局快捷方式
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',
    'flex-col-center': 'flex flex-col items-center justify-center',
    'absolute-center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    'fixed-center': 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',

    // 按钮样式
    'btn': 'px-4 py-2 rounded-lg font-medium transition-all duration-200',
    'btn-primary': 'btn bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
    'btn-secondary': 'btn bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700',
    'btn-success': 'btn bg-green-500 text-white hover:bg-green-600 active:bg-green-700',
    'btn-danger': 'btn bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
    'btn-warning': 'btn bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700',
    'btn-info': 'btn bg-cyan-500 text-white hover:bg-cyan-600 active:bg-cyan-700',
    'btn-outline': 'btn border-2 border-current hover:bg-current hover:text-white',

    // 卡片样式
    'card': 'bg-white rounded-lg shadow-md p-6',
    'card-hover': 'card hover:shadow-lg transition-shadow duration-200',

    // 输入框样式
    'input': 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
    'input-error': 'input border-red-500 focus:ring-red-500',
    'input-success': 'input border-green-500 focus:ring-green-500',

    // 文本样式
    'text-title': 'text-2xl font-bold text-gray-900',
    'text-subtitle': 'text-xl font-semibold text-gray-800',
    'text-body': 'text-base text-gray-700',
    'text-caption': 'text-sm text-gray-500',

    // 响应式容器
    'container-fluid': 'w-full px-4 mx-auto',
    'container-sm': 'container-fluid max-w-sm',
    'container-md': 'container-fluid max-w-md',
    'container-lg': 'container-fluid max-w-lg',
    'container-xl': 'container-fluid max-w-xl',
    'container-2xl': 'container-fluid max-w-2xl',

    // 网格系统
    'grid-auto': 'grid grid-cols-1 gap-4',
    'grid-2': 'grid grid-cols-1 md:grid-cols-2 gap-4',
    'grid-3': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    'grid-4': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4',

    // 动画快捷方式
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'scale-in': 'animate-scale-in',
    'bounce-in': 'animate-bounce-in',

    // 常用组合
    'nav-link': 'text-gray-600 hover:text-gray-900 transition-colors duration-200',
    'nav-link-active': 'text-blue-600 font-medium',
    'sidebar': 'w-64 bg-gray-50 border-r border-gray-200 p-4',
    'main-content': 'flex-1 p-6',
    'header': 'bg-white border-b border-gray-200 px-6 py-4',
    'footer': 'bg-gray-100 border-t border-gray-200 px-6 py-4',
  },

  // 主题配置
  theme: {
    colors: {
      // 扩展颜色系统
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      success: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
      warning: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
      danger: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
      },
      info: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
    },

    // 扩展间距
    spacing: {
      '18': '4.5rem',
      '88': '22rem',
      '128': '32rem',
    },

    // 扩展字体大小
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },

    // 扩展圆角
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'DEFAULT': '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      'full': '9999px',
    },

    // 扩展阴影
    boxShadow: {
      'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      'none': 'none',
    },

    // 扩展动画
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'slide-up': 'slideUp 0.3s ease-out',
      'slide-down': 'slideDown 0.3s ease-out',
      'scale-in': 'scaleIn 0.2s ease-out',
      'bounce-in': 'bounceIn 0.6s ease-out',
      'spin-slow': 'spin 3s linear infinite',
      'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },

    // 扩展过渡
    transitionProperty: {
      'all': 'all',
      'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      'opacity': 'opacity',
      'shadow': 'box-shadow',
      'transform': 'transform',
    },

    // 扩展变换
    transform: {
      'none': 'none',
      'gpu': 'translate3d(0, 0, 0)',
      'scale-0': 'scale(0)',
      'scale-50': 'scale(.5)',
      'scale-75': 'scale(.75)',
      'scale-90': 'scale(.9)',
      'scale-95': 'scale(.95)',
      'scale-100': 'scale(1)',
      'scale-105': 'scale(1.05)',
      'scale-110': 'scale(1.1)',
      'scale-125': 'scale(1.25)',
      'scale-150': 'scale(1.5)',
    },
  },

  // 自定义 CSS 变量
  cssVariables: {
    '--primary-color': '#3b82f6',
    '--secondary-color': '#64748b',
    '--success-color': '#22c55e',
    '--warning-color': '#f59e0b',
    '--danger-color': '#ef4444',
    '--info-color': '#06b6d4',
  },

  // 安全列表（强制包含的类）
  safelist: [
    // 布局类
    'container', 'mx-auto', 'px-4',
    // 颜色类
    'text-primary-500', 'bg-primary-500', 'border-primary-500',
    'text-secondary-500', 'bg-secondary-500', 'border-secondary-500',
    'text-success-500', 'bg-success-500', 'border-success-500',
    'text-warning-500', 'bg-warning-500', 'border-warning-500',
    'text-danger-500', 'bg-danger-500', 'border-danger-500',
    'text-info-500', 'bg-info-500', 'border-info-500',
    // 状态类
    'hover:bg-primary-600', 'active:bg-primary-700',
    'focus:ring-2', 'focus:ring-primary-500',
    // 响应式类
    'md:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4',
    // 动画类
    'animate-fade-in', 'animate-slide-up', 'animate-scale-in',
  ],
});