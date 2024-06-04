<script setup lang="ts">
import type { StyleValue } from '~/types/site'

const model = defineModel<StyleValue>()

defineEmits<{
  delete: []
}>()

</script>

<template>
  <editor-style-field
    :action="model?.value ? 'delete' : 'add'"
    @delete="$emit('delete')"
    @add="model = { 
      value: '4',
      unit: 'px',
      arbitrary: true,
      prefix: 'rounded-',
    }"
  >
    <template #label>
      <span class="w-[150px] block text-right">
        <span class="text-nowrap">Rounded</span>
        <span class="text-neutral-500 text-xs">px </span>
      </span>
    </template>

    <editor-input 
      v-if="model" 
      v-model="model.value"
      class="w-16"
      type="number"
      label="Rounded"
    />
  </editor-style-field>
</template>