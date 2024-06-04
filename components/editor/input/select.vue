<script lang="ts">
</script>

<script setup lang="ts" generic="OptionData">

import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'radix-vue'

interface Option<OptionData> {
  value: string
  label: string
  data?: OptionData
}

interface Props<OptionData> {
  options: Option<OptionData>[]
  placeholder?: string
  label: string
}


const model = defineModel<string>()

defineProps<Props<OptionData>>()

</script>

<template>
  <select-root v-model="model">
    <select-trigger
      :class="[
        'inline-flex min-w-[90px] items-center justify-between rounded-sm px-4 text-sm leading-none h-8',
        'hover:bg-white data-[placeholder]:text-neutral-500',
        'bg-transparent hover:bg-white outline outline-neutral-300 hover:outline-neutral-500 outline-1',
        'ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
      ]"
      :aria-label="label"
    >
      <select-value :placeholder="placeholder" />
      <ui-icon icon="radix-icons:chevron-down" class="ml-1" />
    </select-trigger>

    <select-portal>
      <select-content
        :class="[
          'relative z-50 bg-white max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
        ]"
        :side-offset="5"
      >
        <select-scroll-up-button class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <ui-icon icon="radix-icons:chevron-up" />
        </select-scroll-up-button>

        <select-viewport class="p-1">

          <select-group>
            <select-item
              v-for="(option) in options"
              :key="option.value"
              class="text-sm leading-none rounded-sm flex items-center h-[25px] pr-[25px] pl-[25px] relative select-none data-[disabled]:text-neutral-500 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary-50 data-[highlighted]:text-primary"
              :value="option.value"
            >
              <select-item-indicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <ui-icon icon="radix-icons:check" />
              </select-item-indicator>
              <select-item-text>
                <slot name="option" v-bind="option"> 
                  {{ option.label }} 
                </slot>
              </select-item-text>
            </select-item>
          </select-group>
        </select-viewport>

        <select-scroll-down-button class="flex items-center justify-center h-[25px] bg-white text-primary cursor-default">
          <ui-icon icon="radix-icons:chevron-down" />
        </select-scroll-down-button>
      </select-content>
    </select-portal>
  </select-root>
</template>