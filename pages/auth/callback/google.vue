<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const token = useTokenStorage()

const code = route.query.code as string

onMounted(async () => {
  if(!code) {
    router.push('/')
    return
  }

  try {
    const response = await postGoogleAuthCode(code)
  
    token.value = response.data.token

    router.push('/dashboard')

  } catch(e) {
    router.push('/')
  }

})

</script>

<template>
  <div class="h-full flex-center">
    <h1>. . . tunggu sebentar </h1>
  </div>
</template>