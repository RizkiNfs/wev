<script setup lang="ts">
import type {TextEl} from '~/components/el/text'

const el = useSelectedElement<TextEl>()

</script>

<template>
  <div v-if="el">
    <ui-textarea v-model="el.props.content"/>
    <editor-style-font
      class="mt-4"
      v-model:color="el.props.styles.color"
      v-model:fontSize="el.props.styles.fontSize"
      v-model:fontFamily="el.props.styles.fontFamily"
      v-model:fontWeight="el.props.styles.fontWeight"
      @delete="[
        delete el.props.styles.fontSize, 
        delete el.props.styles.color, 
        delete el.props.styles.fontFamily,
        delete el.props.styles.fontWeight,
      ]"
    />
  </div>
</template>