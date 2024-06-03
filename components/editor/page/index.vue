<script setup lang="ts">

import type { Element } from '~/types/site' 
const selectedElement = useSelectedElement<Element>()
const { state } = useSiteEditor()

</script>

<template>
  <editor-element-list v-model="state.pages[0].elements" />
  <ui-sheet 
    :open="!!selectedElement"
    side="right" 
    @update:open="selectedElement=null" 
  >
    <ui-sheet-content
      title="Element Settings"
      description="Customize your element"
      class="w-[90%] md:w-[600px]"
    >
      <component :is="`editor-${selectedElement?.el}`" v-if="selectedElement?.el" :props="selectedElement?.props" />
    </ui-sheet-content>
  </ui-sheet>
</template>