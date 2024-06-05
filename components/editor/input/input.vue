<script setup lang="ts">

defineOptions({
  inheritAttrs: false
})

const model = defineModel<string|number>()

defineProps<{label: string}>()

</script>

<template>
  <ui-label>
    <slot name="label">
      <span class="sr-only">
        {{ label }}
      </span>
    </slot>
    <input 
      v-model="model"
      v-bind="$attrs"
      :class="[
        'flex h-8 rounded-sm px-3 py-2 text-sm placeholder:text-neutral-600',
        'bg-transparent hover:bg-white outline outline-neutral-300 hover:outline-neutral-500 outline-1',
        'ring-offset-wite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
      ]" 
    >
  </ui-label>
</template>