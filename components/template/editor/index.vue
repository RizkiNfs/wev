<script setup lang="ts">
import type { Page } from '~/types/site'

interface Props {
  page: Page
}

defineProps<Props>()

const open = ref(false)


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
      <div class="">
        <editor-page />
      </div>
    </ui-sheet>
  </nuxt-layout>
</template>