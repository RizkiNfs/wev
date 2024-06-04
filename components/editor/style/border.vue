<script setup lang="ts">
import type { StyleValue } from '~/types/site'

const borderWidth = defineModel<StyleValue>('borderWidth')
const borderColor = defineModel<StyleValue>('borderColor')
const borderStyle = defineModel<StyleValue>('borderStyle')

defineEmits<{
  delete: []
}>()

const handleAdd = () => {
  borderWidth.value = { 
    value: '2',
    arbitrary: true,
    unit: 'px',
    prefix: 'border-'
  }
  borderColor.value = { 
    value: '#000000',
    arbitrary: true,
    prefix: 'border-'
  }
  borderStyle.value = { 
    value: 'solid',
    arbitrary: false,
    prefix: 'border-'
  }
}

</script>

<template>
  <editor-style-field
    :action="borderWidth?.value ? 'delete' : 'add'"
    @delete="$emit('delete')"
    @add="handleAdd"
  >
    <template #label>
      <span class="w-[150px] block text-right">
        Border
      </span>
    </template>

    <editor-input 
      v-if="borderWidth" 
      v-model="borderWidth.value"
      class="w-16"
      type="number"
      label="Border Width"
    />
    <editor-input-color 
      v-if="borderColor" 
      v-model="borderColor.value"
      class="w-16"
      label="Border Color"
    />
    <editor-input-select 
      v-if="borderStyle" 
      v-model="borderStyle.value"
      :options="[
        {value: 'solid', label: 'Solid'},
        {value: 'dashed', label: 'Dashed'},
        {value: 'dotted', label: 'Dotted'},
        {value: 'double', label: 'Double'},
      ]"
      label="Border Style"
    />
  </editor-style-field>
</template>