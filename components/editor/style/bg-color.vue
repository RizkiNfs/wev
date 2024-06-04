<script setup lang="ts">
import type { StyleValue } from '~/types/site'
const model = defineModel<StyleValue>()

defineEmits<{
  delete: []
}>()

defineProps<{
  label?: string
}>()

</script>

<template>
  <editor-style-field
    :action="model?.value ? 'delete' : 'add'"
    @delete="$emit('delete')"
    @add="model = { 
      value: '#fafafa',
      arbitrary: true,
      prefix: 'bg-',
    }"
  >
    <template #label>
      <span class="w-[150px] block text-right">
        Background Color
      </span>
    </template>
    <editor-input-color 
      v-if="model" 
      v-model="model.value"
      class="w-16"
      label="Background Color"
    />
  </editor-style-field>
</template>