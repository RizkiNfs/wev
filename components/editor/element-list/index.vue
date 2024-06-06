<script setup lang="ts">
import type { Element } from '~/types/site' 
import { dragAndDrop } from '@formkit/drag-and-drop/vue'

const elements = defineModel<Element[]>({
  required: false,
  default: []
})

const selectedElement = useSelectedElement<Element>()

const parent = ref<any>(null)
dragAndDrop({
  parent: parent,
  values: elements as Ref<Element[]>,
  dragHandle: '.drag-handler',
})


const handleDelete = (id: string) => {
  elements.value = elements.value.filter(e => e.id !== id)
}

</script>

<template>
  <ul ref="parent">
    <li v-for="e in elements" :key="e.id" class="flex items-center mb-2">
      <button class="drag-handler mr-2" aria-label="drag handler">
        <ui-icon icon="akar-icons:drag-vertical-fill" class="text-xl text-neutral-600 hover:text-primary-400"/>
      </button>
      <ui-button
        variant="outline"
        class="flex justify-between flex-1 bg-white shadow-sm"
        @click="selectedElement = e"
      >
        {{e.el}}
        <ui-icon icon="iconamoon:arrow-right-2-bold" class="text-xl"/>
      </ui-button>
      <button
        :aria-label="`Remove ${e.el}`"
        class="mx-2 h-8 w-8 flex items-center justify-center bg-neutral-200 rounded text-neutral-600 hover:bg-neutral-300 hover:text-neutral-700"
        @click="handleDelete(e.id)"
      >
        <ui-icon icon="iconamoon:trash-bold" />
        
      </button>
    </li>
  </ul>
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