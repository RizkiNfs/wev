<script setup lang="ts" generic="Data, DataKey extends keyof Data">

import type { ColSlot, Props as TableProps } from '../table/index.vue'

interface Props extends TableProps<Data, DataKey> {}

const props = defineProps<Props>()


interface Slot extends ColSlot<Data> {
  header(): any
  footer(): any
}

const slots = defineSlots<Slot>()

const colSlots = Object.keys(slots).filter(key=> key.startsWith('column-')) as Array<keyof ColSlot<Data>>

</script>


<template>
  <div>
    <header v-if="$slots['header']" class="bg-white rounded-lg shadow-sm p-4 mb-2">
      <slot name="header" />
    </header>
    <ui-table 
      :data="props.data" 
      :get-row-id="props.getRowId"
      :columns="props.columns" 
      class="bg-white rounded-lg shadow-sm" 
    >
      <template v-for="key in colSlots" #[key]="slotProps">
        <slot :name="(key as `column-${string}`)" v-bind="slotProps" />
      </template>
    </ui-table>
    <footer class="bg-white rounded-lg shadow-sm mt-2 p-4">
      <slot name="footer" />
    </footer>
  </div>
</template>