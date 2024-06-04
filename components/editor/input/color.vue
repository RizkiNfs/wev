<script setup lang="ts">

import type { InputHTMLAttributes } from 'vue'

defineOptions({
  inheritAttrs: false
})

const model = defineModel<InputHTMLAttributes['value']>()

const handleBlur = (event: Event) => {
  const target = event.target as HTMLInputElement
  model.value = target?.value
}

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
      v-bind="$attrs"
      :value="model"
      :class="[
        'flex h-8 ring-offset-wite placeholder:text-neutral-600',
        'bg-transparent hover:bg-white hover:outline hover:outline-neutral-500 hover:outline-1',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
      ]"
      type="color" 
      @blur="handleBlur"
    >
  </ui-label>
</template>