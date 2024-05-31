<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import {
  type DialogContentEmits,
  type DialogContentProps,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogDescription,
  useForwardPropsEmits,
} from 'radix-vue'
import { type VariantProps, cva } from 'class-variance-authority'

const sheetVariants = cva(
  'fixed z-50 gap-4 p-2 md:p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
            'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        right:
            'inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

export type SheetVariants = VariantProps<typeof sheetVariants>

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: SheetVariants['side']
  title?: string
  description?: string
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <dialog-portal>
    <dialog-overlay
      class="fixed inset-0 z-50 bg-neutral/50  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />

    <dialog-content
      :class="[sheetVariants({ side }), props.class, 'bg-neutral-100 min-w-[25%]']"
      v-bind="{ ...forwarded, ...$attrs }"
      :aria-describedby="props.description"
    >
      <dialog-description class="sr-only">
        {{ props.description }}
      </dialog-description>
      <div>
        <dialog-title class="text-lg font-semibold font-sans text-neutral-900 text-center mb-6">
          <slot name="title" >
            {{ props.title }}
          </slot>
        </dialog-title>
      </div>
      <slot />
    </dialog-content>
  </dialog-portal>
</template>