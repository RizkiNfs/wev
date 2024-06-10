<script setup lang="ts">

import type { File } from '~/types/file'

const { data: files, refresh } = useFetch('/api/my/files')

const emit = defineEmits<{
  pick: [file: File]
}>()

</script>

<template>
  <div>
    <div class="mb-2 flex gap-4 bg-white p-4 rounded-md shadow-sm">
      <ui-input placeholder="Search" />
      <ui-uploader 
        id="uploader" 
        v-slot="{loading}" 
        accept=".png,.jpg,.jpeg,.webp" 
        @success="refresh"
      >
        <ui-button as="label" :loading="loading" for="uploader">
          <ui-icon icon="akar-icons:cloud-upload" class="mr-2" />
          Upload
        </ui-button>
      </ui-uploader>
    </div>
    <ul class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center bg-white p-4 rounded-md shadow-sm">
      <li 
        v-for="file in files?.data" 
        :key="file._id"
        class="shadow-sm rounded-b-lg border"
      >
        <button @click="emit('pick',file)">
          <img 
            :src="file.link" 
            :alt="file.title" 
            class="aspect-[16/12] object-cover"
          >
        </button>
        <div class="p-2 flex gap-x-2 items-center">
          <ui-icon icon="akar-icons:image" class=" text-sm md:text-xl text-neutral-600" />
          <p class="flex-1 text-sm md:text-base text-nowrap text-ellipsis overflow-hidden">{{file.title}}</p>
          <button aria-label="More action" class="bg-neutral-200 p-1 rounded">
            <ui-icon icon="akar-icons:more-vertical-fill" class="text-sm md:text-xl text-neutral-600" />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>