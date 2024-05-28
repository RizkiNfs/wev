// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_AUTHORIZE_HOST: process.env.GOOGLE_AUTHORIZE_HOST,
    GOOGLE_AUTHORIZE_PATH: process.env.GOOGLE_AUTHORIZE_PATH,
    GOOGLE_TOKEN_HOST: process.env.GOOGLE_TOKEN_HOST,
    GOOGLE_TOKEN_PATH: process.env.GOOGLE_TOKEN_PATH,
    GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
    JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY,
  },
  vue: {
    propsDestructure: true,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'radix-vue/nuxt'
  ],
  imports: {
    dirs: [
      'composables',
      'composables/**',
    ]
  },
  googleFonts: {
    families: {
      'Inter': [400,700],
      'Nunito Sans': [400,700],
    }
  },
})