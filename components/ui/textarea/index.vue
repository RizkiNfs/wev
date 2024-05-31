<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <textarea
    v-model="model" 
    class="flex w-full rounded-md border bg-wite px-3 py-2 text-sm ring-offset-wite placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
  />
</template>