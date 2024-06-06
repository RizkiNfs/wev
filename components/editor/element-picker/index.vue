<script setup lang="ts">
import type { Element } from '~/types/site'
import { nanoid } from 'nanoid'

const elements: Element[] = [
  {
    el: 'el-avatar',
    props: {
      src: '',
    },
    id: nanoid(8),
  },
  {
    el: 'el-link-list',
    props: {
      items: [
        { href: '#', text: 'My Link' },
      ],
      linkStyles: {}
    },
    id: nanoid(8),
  },
  {
    el: 'el-social-media-icons',
    props: {
      items: [
        {href: '#', type: 'twitter'},
      ]
    },
    id: nanoid(8),
  },
  {
    el: 'el-text',
    props: {
      content: 'Hello World',
      styles: {}
    },
    id: nanoid(8),
  }
]

const emit = defineEmits<{
  add: [el: Element]
}>()

const handleAdd = (element: Element) => {
  emit('add', structuredClone({...element, id: nanoid(8)}))
}

</script>

<template>
  <p class="text-center font-bold mb-2">Add element</p>
  <ul class="flex gap-4 flex-wrap">
    <li v-for="element in elements" :key="element.id">
      <ui-button 
        class="text-nowrap"
        variant="outline"
        @click="handleAdd(element)"
      >
        {{ element.el }}
      </ui-button>
    </li>
  </ul>
</template>