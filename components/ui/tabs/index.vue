<script setup lang="ts" generic="Props">
import { TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

interface Item {
  label: string
  value: string
  props?: Props
}

defineProps<{
  label: string
  items: Array<Item>
}>()

const model = defineModel<string>()

</script>

<template>
  <TabsRoot v-model="model" class="flex flex-col w-full shadow-sm" :default-value="items[0].value">
    <TabsList class="relative shrink-0 flex border-b overflow-y-auto" aria-label="Manage your account">
      <TabsIndicator class="absolute left-0 h-[4px] bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300">
        <div class="bg-primary-400 w-full h-full rounded-md" />
      </TabsIndicator>
      <TabsTrigger
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        class="bg-white p-2 flex-1 flex items-center justify-center leading-none select-none  rounded-tl-md  hover:text-primary data-[state=active]:text-primary outline-none cursor-default"
      >
        <slot name="trigger" v-bind="item" >
          {{ item.label }}
        </slot>
      </TabsTrigger>
    </TabsList>
    <slot v-if="$slots.solo" name="solo"/>
    <slot v-else/>
  </TabsRoot>
</template>