<script setup lang="ts">

definePageMeta({
  middleware: () => {
    const isLogin = useIsLogin()
    if(isLogin.value) {
      return navigateTo('/dashboard')
    }

  }
})

const handleSignin = async () => {
  const response = await getGoogleAuthUrl()
  if(response.data) location.href = response.data
}

</script>

<template>
  <div class="h-full flex flex-col items-center justify-center">
    <header class="mb-16">
      <nuxt-link to="/" class="text-4xl font-bold font-serif text-primary">
        weev
      </nuxt-link>
    </header>
    
    <ui-button 
      variant="outline" 
      class="flex items-center"
      @click="handleSignin"
    >
      <ui-icon-google  class="mr-4"  />
      Sign in with google
    </ui-button>
    
    <footer class="mt-4 max-w-md text-center">
      Please read
      <nuxt-link href="#" class="font-semibold underline">
        Privacy Policy,  
      </nuxt-link>
      <nuxt-link href="#" class="font-semibold underline">
        Terms of Service,  
      </nuxt-link>
      before proceeding
    </footer>
  </div>
</template>