<script setup lang="ts">
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

const button = cva('text-center cursor-pointer disabled:cursor-not-allowed py-2 px-4 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white', {
  variants: {
    variant: {
      filled: 'text-white',
      outline: 'border-2',
      text: 'text-neutral-800'
    },
    color: {
      primary: 'focus:ring-primary-300',
      danger: 'focus:ring-danger-300',
      neutral: 'focus:ring-neutral-500'
    }
  },
  compoundVariants: [
    {
      variant: 'filled',
      color: 'primary',
      className: 'bg-primary hover:bg-primary-600 text-white'
    },
    {
      variant: 'filled',
      color: 'danger',
      className: 'bg-danger hover:bg-danger-600 text-white'
    },
    {
      variant: 'filled',
      color: 'neutral',
      className: 'bg-neutral-800 hover:bg-neutral-900 text-white'
    },
    {
      variant: 'outline',
      color: 'primary',
      className: 'border-primary hover:bg-primary-50 text-primary'
    },
    {
      variant: 'outline',
      color: 'danger',
      className: 'border-danger hover:bg-danger-50 text-danger'
    },
    {
      variant: 'outline',
      color: 'neutral',
      className: 'border-neutral-800 hover:bg-neutral-200 text-neutral'
    },
  ]
}) 

export type ButtonVariant = VariantProps<typeof button>;

interface Props {
  disabled?: boolean
  to?: string
  color?: ButtonVariant['color']
  variant?: ButtonVariant['variant'] 
  loading?: boolean
}

const Link = resolveComponent('nuxt-link')


const {
  disabled = false,
  to,
  color = 'primary',
  variant = 'filled',
  loading = false
} = defineProps<Props>()

</script>

<template>
  <component
    :is="to ? Link : 'button'"
    :to="to"
    :class="button({ color, variant })"
    :disabled="disabled || loading"
  >
    <div v-if="loading" class="flex items-center justify-center">
      <ui-spinner class="text-lg text-current" />
    </div>
    <slot v-else />
  </component>
</template>