<script setup lang="ts">

useHead({
  title: 'Editor Page',
  script: [
    {
      src: 'https://cdn.tailwindcss.com',
      defer: true,
      async: true,
    },
  ],
})

</script>

<template>
  <main>
    <client-only>
      <slot />
    </client-only>
  </main>
</template>