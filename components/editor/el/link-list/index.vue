<script setup lang="ts">
import type { LinkListEl } from '~/components/el/link-list'

const el =  useSelectedElement<LinkListEl>()

</script>

<template>
  <div v-if="el">
    <div class="flex flex-col gap-y-2">
      <editor-style-font
        v-model:color="el.props.linkStyles.color"
        v-model:fontSize="el.props.linkStyles.fontSize"
        v-model:fontFamily="el.props.linkStyles.fontFamily"
        v-model:fontWeight="el.props.linkStyles.fontWeight"
        @delete="[
          delete el.props.linkStyles.fontSize, 
          delete el.props.linkStyles.color, 
          delete el.props.linkStyles.fontFamily,
          delete el.props.linkStyles.fontWeight,
        ]"
      />
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