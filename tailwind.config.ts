import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,ts,tsx}',
    './layouts/**/*.{vue,ts,tsx}',
    './pages/**/*.{vue,ts,tsx}',
    './composables/**/*.tsx',
    './plugins/**/*.tsx',
    './utils/**/*.tsx',
    './app.vue',
  ],
  plugins: [tailwindcssAnimate],
  theme: {
    fontFamily: {
      'sans': ['"Inter"', '-apple-system', 'BlinkMacSystemFont'],
      'serif': ['"PT Serif"', 'serif']
    },
    extend: {
      borderColor: (theme) => ({
        DEFAULT: theme.colors.neutral[300],
      }),
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#dfdfe2',
          300: '#cacace',
          400: '#aaaab1',
          500: '#6f6f78',
          600: '#62626a',
          700: '#4e4e55',
          800: '#3b3b40',
          900: '#27272a',
          DEFAULT: '#3b3b40'
        },
        primary: {
          25: '#f5f2f9',
          50: '#efe9f5',
          100: '#ded2eb',
          200: '#bda5d7',
          300: '#9c78c2',
          400: '#7b4bae',
          500: '#5a1e9a',
          600: '#48187b',
          700: '#36125c',
          800: '#240c3e',
          900: '#12061f',
          DEFAULT: '#5a1e9a',
        },
        danger: {
          50: '#fde8ed',
          100: '#fad2da',
          200: '#f5a5b5',
          300: '#f07791',
          400: '#eb4a6c',
          500: '#e61d47',
          600: '#b81739',
          700: '#8a112b',
          800: '#5c0c1c',
          900: '#2e060e',
          DEFAULT: '#e61d47',
        },
      },
    },
  },
}