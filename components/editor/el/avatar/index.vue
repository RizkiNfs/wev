<script setup lang="ts">
import type {AvatarEl} from '~/components/el/avatar'

const el = useSelectedElement<AvatarEl>()

const show = ref(false)

</script>

<template>
  <div v-if="el">
    <ui-dialog v-model:open="show" title="File list">
      <file-list 
        @pick="[
          show=false,
          el.props.src=$event.link,
          el.props.alt=$event.title
        ]"
      />
    </ui-dialog>

    <div class="flex justify-center">
      <button 
        aria-label="select avatar" 
        class="relative" 
        @click="show=true"
      >
        <img
          :src="el.props.src" 
          alt="avatar" class="w-40 h-40 rounded-full bg-neutral-400 object-cover"
        >
        <span class="absolute top-0 right-0 p-2 bg-white rounded-full shadow-sm border">
          <ui-icon 
            icon="akar-icons:camera" 
            class="text-2xl"
          />
        </span>
      </button>
    </div>
  </div>
</template>