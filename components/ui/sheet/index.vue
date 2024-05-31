<script setup lang="ts">

import { 
  type DialogRootEmits, 
  type DialogRootProps, 
  DialogRoot, 
  useForwardPropsEmits 
} from 'radix-vue'

interface Props extends DialogRootProps {
  side?: 'top' | 'bottom' | 'left' | 'right'
}

defineOptions({
  inheritAttrs: false
})

const { side,...props } = defineProps<Props>()
const emits = defineEmits<DialogRootEmits>()


const forwarded = useForwardPropsEmits(props, emits)

</script>

<template>
  <dialog-root v-bind="forwarded">
    <dialog-portal>
      <ui-sheet-content v-bind="$attrs" :side="side">
        <slot />
      </ui-sheet-content>
    </dialog-portal>
  </dialog-root>
</template>