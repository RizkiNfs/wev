<script setup lang="ts">
import type { StyleValue, StyleValueNumber } from '~/types/site'

const color = defineModel<StyleValue>('color')
const fontFamily = defineModel<StyleValue>('fontFamily')
const fontSize = defineModel<StyleValueNumber>('fontSize')
const fontWeight = defineModel<StyleValue>('fontWeight')

defineEmits<{
  delete: []
}>()

const { updateFontCollection } = useSiteEditor()

const handleChangeFontFamily = (value: string) => {
  if(fontFamily?.value?.value) fontFamily.value.value = value
  else fontFamily.value = { value: value, arbitrary: true, prefix: 'font-' }
  updateFontCollection()
}

const handleChangeFontWeight = (value: string) => {
  if(fontWeight?.value?.value) fontWeight.value.value = value
  else fontWeight.value = { value: value, arbitrary: true, prefix: 'font-' }
  updateFontCollection()
}

</script>

<template>
  <div class="flex items-center">
    <p class="w-[150px] text-right">Font</p>
    <div class="ml-6 grid grid-cols-[64px_1fr] gap-2">
      <editor-input
        class="w-16"
        label="Font Size"
        type="number"
        :model-value="fontSize?.value || 16"
        @update:model-value="($event) => {
          if(fontSize?.value) fontSize.value = $event as number
          else fontSize = { value: $event as number, arbitrary: true, unit: 'px', prefix: 'text-' }
        }"
      />
      <editor-input-select
        class="w-16"
        label="Font Family"
        :model-value="fontFamily?.value || 'sans'"
        :options="[
          { label: 'Sans', value: 'sans' },
          { label: 'Serif', value: '\'serif\'' },
          { label: 'Arial', value: '\'arial\'' },
          { label: 'Ubuntu', value: '\'Ubuntu\'' },
          { label: 'Inter', value: '\'Inter\'' },
          { label: 'Plus Jakarta Sans', value: '\'Plus_Jakarta_Sans\'' },
        ]"
        @update:model-value="handleChangeFontFamily"
      />
      <editor-input-color
        class="w-16"
        label="Font Color"
        :model-value="color?.value || '#000000'"
        @update:model-value="($event) => {
          if(color?.value) color.value = $event
          else color = { value: $event, arbitrary: true, prefix: 'text-' }
        }"
      />
      <editor-input-select
        class="w-16"
        label="Font Weight"
        :model-value="fontWeight?.value || '400'"
        :options="[
          { label: 'light', value: '300' },
          { label: 'Reguler', value: '400' },
          { label: 'Medium', value: '500' },
          { label: 'Semi Bold', value: '600' },
          { label: 'Bold', value: '700' },
        ]"
        @update:model-value="handleChangeFontWeight"
      />
    </div>
  </div>
</template>