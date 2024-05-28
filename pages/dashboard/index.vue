<script setup lang="ts">
definePageMeta({
  middleware: () => {
    const isLogin = useIsLogin()
    if(!isLogin.value) {
      return navigateTo('/')
    }

  }
})
</script>

<template>
  <div class="flex">
    <h1>berhasil</h1>
  </div>
</template>