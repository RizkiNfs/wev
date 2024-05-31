<script setup lang="ts">
import type {TextEl} from '~/components/el/text'

const selectedContent =  useSelectedElement<TextEl>()

</script>

<template>
  <div>
    <ui-textarea v-model="selectedContent!.props.content"/>
  </div>
</template>