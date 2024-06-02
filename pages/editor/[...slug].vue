<script setup lang="ts">
import type { Page } from '~/types/site'

const route = useRoute()
const [ sitePath, ...slug ] = route.params.slug as string[]
const { state } = useSiteEditor()
const currentPath = slug.join('/') || '/'

onMounted(() => {

  $fetch(`/api/my/site/${sitePath}`)
    .then((res) => {
      state.value.pages = (res.data?.pages || []) as unknown as Page[]
    })

  state.value._id = 'site-id-1'
})

</script>

<template>
  <nuxt-layout name="editor">
    <template-editor 
      :page="state.pages?.find(i => (i.path || '/') === currentPath) || ({} as Page)" 
    />
  </nuxt-layout>
</template>