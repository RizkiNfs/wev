import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {},
  plugins: [],
  content: [
    './components/**/*.{vue,ts,tsx}',
    './layouts/**/*.{vue,ts,tsx}',
    './pages/**/*.{vue,ts,tsx}',
    './composables/**/*.{ts,tsx}',
    './plugins/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
    './app.{js,ts,vue}',
  ]
}