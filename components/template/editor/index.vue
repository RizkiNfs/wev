<script setup lang="ts">
import type { Page, Site } from '~/types/site'

interface Props {
  page: Page
}

const props = defineProps<Props>()

const open = ref(false)

const { state } = useSiteEditor()

const {request: updateSite, isLoading} = useRequest((body: Site) => $fetch(`/api/my/site/${body.path}`, {
  method: 'PATCH',
  body
}))


const link = computed<any[]>(() => {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    ...(props.page.fonts || []).map((font) => ({
      rel: 'stylesheet',
      href: `https://fonts.googleapis.com/css2?family=${font.family.replaceAll('_', '+').replaceAll('\'','')}:wght@${font.weight.join(';')}&display=swap`
    })),
  ]
})

useHead({
  link: link,
})


const handleSave = async () => {
  await updateSite(state.value)
  open.value = false
}


</script>

<template>
  <nuxt-layout name="editor">
    <div class="w-full min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div class="max-w-sm mx-auto pt-12">
        <el-renderer :elements="page.elements" />
      </div>
    </div>
    <Teleport to="body">
      <ui-button
        class="fixed bottom-4 !rounded-full right-4 shadow-2xl bg-white" 
        variant="outline"
        @click="open = true"
      >
        <ui-icon aria-label="edit" icon="iconoir:edit" class="text-3xl"/>
      </ui-button>
    </Teleport>
    <ui-sheet 
      v-model:open="open" 
      class="w-[90%] md:w-[600px]"
      side="right" 
      title="Customize your site"
      description="This is the editor panel"
    >
      <div class="relative h-full">
        <editor-page />
        <ui-button 
          :loading="isLoading"
          class="w-full absolute bottom-12"
          @click="handleSave" 
        >
          Finish
        </ui-button>
      </div>
    </ui-sheet>
  </nuxt-layout>
</template>