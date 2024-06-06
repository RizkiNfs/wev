<script setup lang="ts">
import { dragAndDrop } from '@formkit/drag-and-drop/vue'
import type { LinkListEl } from '~/components/el/link-list'

const el =  useSelectedElement<LinkListEl>()

const dragModel = computed({
  get(){
    return el.value?.props.items || []
  },
  set(value){
    if(el.value) el.value.props.items = value
  }
})

const parent = ref<any>(null)

dragAndDrop({
  parent: parent,
  values: dragModel,
  dragHandle: '.drag-handler',
})

</script>

<template>
  <div v-if="el">
    <p class="text-center mb-2 font-bold">Link items</p>
    <ul ref="parent">
      <li 
        v-for="(item, index) in el.props.items" :key="`${item.href}-${item.text}-${index}`" 
        class="flex mb-2 items-center"
      >
        <button class="drag-handler mr-2" aria-label="drag handler">
          <ui-icon icon="akar-icons:drag-vertical-fill" class="text-xl text-neutral-600 hover:text-primary-400"/>
        </button>
        <div class="flex flex-col gap-y-1 flex-1 border rounded p-1">
          <editor-input
            v-model="item.text"
            class="w-full" 
            label="Text"
            show-label
          />
          <editor-input 
            v-model="item.href"
            class="w-full"
            label="Link"
            show-label
          />
        </div>
        <button
          :aria-label="`Remove ${item.text}`"
          class="mx-2 h-8 w-8 flex items-center justify-center bg-neutral-200 rounded text-neutral-600 hover:bg-neutral-300 hover:text-neutral-700"
          @click="el.props.items.splice(index, 1)"
        >
          <ui-icon icon="iconamoon:trash-bold" />
        </button>
      </li>
      <li class="flex justify-center">
        <ui-button
          class=""
          @click="el.props.items.push({text: 'New Link', href: '#'})"
        >
          Add Link
        </ui-button>
      </li>
    </ul>

    <div class="flex flex-col gap-y-2 mt-5 pt-3 border-t">
      <p class="text-center mb-2 font-bold">Link style</p>

      <editor-style-font
        v-model:color="el.props.linkStyles.color"
        v-model:fontSize="el.props.linkStyles.fontSize"
        v-model:fontFamily="el.props.linkStyles.fontFamily"
        v-model:fontWeight="el.props.linkStyles.fontWeight"
        @delete="[
          delete el.props.linkStyles.fontSize, 
          delete el.props.linkStyles.color, 
          delete el.props.linkStyles.fontFamily,
          delete el.props.linkStyles.fontWeight,
        ]"
      />
      <editor-style-bg-color
        v-model="el.props.linkStyles.bgColor"
        @delete="delete el.props.linkStyles.bgColor"
      />
      <editor-style-rounded 
        v-model="el.props.linkStyles.borderRadius"
        @delete="delete el.props.linkStyles.borderRadius"
      />
      <editor-style-border 
        v-model:borderWidth="el.props.linkStyles.borderWidth"
        v-model:borderColor="el.props.linkStyles.borderColor"
        v-model:borderStyle="el.props.linkStyles.borderStyle"
        @delete="[
          delete el.props.linkStyles.borderWidth,
          delete el.props.linkStyles.borderColor,
          delete el.props.linkStyles.borderStyle
        ]"
      />
    </div>
  </div>
</template>