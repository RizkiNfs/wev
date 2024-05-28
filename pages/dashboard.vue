<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: () => {
    const isLogin = useIsLogin()
    if(!isLogin.value) {
      return navigateTo('/')
    }

  }
})
</script>

<template>
  <nuxt-layout>
    <nuxt-page/>
  </nuxt-layout>
</template>