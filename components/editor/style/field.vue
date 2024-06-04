<script setup lang="ts">

interface Props {
  action?: 'add' | 'delete'
  label?: string
}

defineProps<Props>()

defineEmits<{
  delete: []
  add: []
}>()


</script>

<template>
  <div class="flex items-center">
    <p class="text-nowrap mr-4">
      <slot name="label" >
        {{label}}
      </slot>
    </p>
    <div class="flex">
      <button
        v-if="action === 'delete'" 
        :aria-label="`Remove ${label}`"
        class="mx-2 h-8 w-8 flex items-center justify-center bg-neutral-200 rounded text-neutral-600 hover:bg-neutral-300 hover:text-neutral-700"
        @click="$emit('delete')"
      >
        <ui-icon icon="iconamoon:trash-bold" />
        
      </button>
      <button 
        v-else
        :aria-label="`Add ${label}`"
        class="mx-2 h-8 w-8 flex items-center justify-center bg-neutral-200 rounded text-neutral-600 hover:bg-neutral-300 hover:text-neutral-700"
        @click="$emit('add')"
      >
        <ui-icon icon="iconamoon:sign-plus-bold" />
      </button>
      <slot />
    </div>
  </div>
</template>