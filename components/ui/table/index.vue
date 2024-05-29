<script lang="ts">

interface Column {
  label: string
  align?: 'left' | 'right' | 'center'
  width?: string
}

interface ColumnWithKey extends Column {
  key: string
}

interface ColumnWithAccessor<DataKey> extends Column {
  accessorKey: DataKey
}

export type Columns<DataKey> = Array<ColumnWithAccessor<DataKey> | ColumnWithKey>

export interface Props<Data, DataKey> {
  data?: Data[]
  getRowId?: (row: Data, index: number) => string
  columns?: Columns<DataKey>
}

export type ColSlot<Data> = Record<`column-${string}`, (props: Data) => any>

</script>


<script setup lang="ts" generic="Data, DataKey extends keyof Data">

const props = defineProps<Props<Data,DataKey>>()

interface Slot extends ColSlot<Data> {}

defineSlots<Slot>()

</script>

<template>
  <ui-table-root>
    <ui-table-header>
      <ui-table-row>
        <ui-table-head 
          v-for="(c,i) in props.columns" 
          :key="i" 
          :style="{...(c.width ? {width: c.width} : {}), ...(c.align ? {textAlign: c.align} : {})}"
        >
          {{ c.label }}
        </ui-table-head>
      </ui-table-row>
    </ui-table-header>
    <ui-table-body>
      <ui-table-row v-for="(item, index) in props.data" :key="getRowId?.(item,index) || index">
        <ui-table-cell 
          v-for="c in props.columns" 
          :key="`${(((c as ColumnWithKey).key || (c as ColumnWithAccessor<DataKey>).accessorKey) as string)}-${index}`"
          :style="{...(c.align ? {textAlign: c.align} : {})}"
        >
          <slot :name="`column-${((c as ColumnWithKey).key as string)}`" v-bind="item">
            {{ item[(c as ColumnWithAccessor<DataKey>).accessorKey] }}
          </slot>
        </ui-table-cell>
      </ui-table-row>
    </ui-table-body>
  </ui-table-root>
</template>