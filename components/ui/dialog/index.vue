<script setup lang="ts">
import { 
  DrawerContent, 
  DrawerOverlay, 
  DrawerPortal, 
  DrawerRoot, 
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription
} from 'vaul-vue'

import {
  DialogRoot,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from 'radix-vue'


defineProps<{
  title?: string
  description?: string
}>()

const isDesktop = useMediaQuery('(min-width: 768px)')

const open = defineModel<boolean>('open')

defineSlots<{
  default(): any
  title(): any
  trigger(): any
}>()

</script>

<template>
  <dialog-root v-if="isDesktop" v-model:open="open">
    <dialog-trigger v-if="$slots.trigger">
      <slot name="trigger" />

    </dialog-trigger>
    <dialog-portal>
      <dialog-overlay class="fixed inset-0 z-50 bg-neutral/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <dialog-content 
        :class="[
          'fixed left-1/2 top-1/2 z-50 grid w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 gap-4 p-6 shadow-sm bg-neutral-100 rounded-[14px]',
          'duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
          'max-h-[calc(100vh-96px)] overflow-y-auto',
        ]"
      >
        <dialog-title>
          <slot name="title" >
            <p class="font-bold text-lg font-sans">
              {{title}}
            </p>
          </slot>
        </dialog-title>
        <dialog-description class="sr-only">
          {{ description }}
        </dialog-description>
        <slot/>
      </dialog-content>
    </dialog-portal>
  </dialog-root>

  <drawer-root v-else v-model:open="open">
    <drawer-trigger v-if="$slots.trigger">
      <slot name="trigger" />
    </drawer-trigger>
    <drawer-portal>
      <drawer-overlay class="fixed inset-0 z-50 bg-neutral-600/80" />
      <drawer-content 
        :class="[
          ' p-4 fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[18px] border bg-neutral-100',
        ]"
      >
        <div class="mx-auto mt-0 h-2 w-[100px] rounded-full bg-neutral-300" />
        <drawer-title>
          <slot name="title" >
            <span class="font-bold text-lg font-sans">
              {{title}}
            </span>
          </slot>
        </drawer-title>
        <drawer-description class="sr-only">
          {{ description }}
        </drawer-description>
        <slot />
      </drawer-content>
    </drawer-portal>
  </drawer-root>
</template>