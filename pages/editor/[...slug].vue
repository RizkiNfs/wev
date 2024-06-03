<script setup lang="ts">
import type { Page } from '~/types/site'

const route = useRoute()
const [ sitePath, ...slug ] = route.params.slug as string[]
const { state } = useSiteEditor()
const currentPath = slug.join('/') || '/'

onMounted(() => {

  $fetch(`/api/my/site/${sitePath}`)
    .then((res) => {
      if(res.data){
        state.value = res.data
      }
    })

})

</script>

<template>
  <nuxt-layout name="editor">
    <template-editor 
      :page="state.pages?.find(i => (i.path || '/') === currentPath) || ({} as Page)" 
    />
  </nuxt-layout>
</template>