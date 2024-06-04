<script setup lang="ts">
import type { LinkListEl } from '~/components/el/link-list'

const el =  useSelectedElement<LinkListEl>()

</script>

<template>
  <div v-if="el">
    <div class="flex flex-col gap-y-2">
      <editor-style-bg-color
        v-model="el.props.linkStyles.bgColor"
        @delete="delete el.props.linkStyles.bgColor"
      />
      <editor-style-rounded 
        v-model="el.props.linkStyles.borderRadius"
        @delete="delete el.props.linkStyles.borderRadius"
      />
      <editor-style-border 
        v-model:borderWidth="el.props.linkStyles.borderWidth"
        v-model:borderColor="el.props.linkStyles.borderColor"
        v-model:borderStyle="el.props.linkStyles.borderStyle"
        @delete="[
          delete el.props.linkStyles.borderWidth,
          delete el.props.linkStyles.borderColor,
          delete el.props.linkStyles.borderStyle
        ]"
      />
    </div>
  </div>
</template>