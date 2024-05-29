<script setup lang="ts">

definePageMeta({
  title: 'Chose template'
})

const options = [
  { label: 'Profile', value: 'profile' },
  { label: 'Landing Page', value: 'landingPage' },
  { label: 'Event', value: 'event' },
  { label: 'Wedding', value: 'wedding' },
]

</script>

<template>
  <ui-tabs :items="options" label="Choose template">
    <template #trigger="{ label }">
      <div class="py-2 text-nowrap">
        {{ label }}
      </div>
    </template>
    <template #solo>
      <div class="p-4 bg-white rounded-b-md">
        <ul class="flex gap-6 w-full flex-wrap justify-center">
          <li v-for="(_,index) in Array.from({length:6})" :key="index">
            <nuxt-link to="/editor" class="w-40 md:w-64 block">
              <aspect-ratio :ratio="9/16">
                <div class="w-full h-full bg-neutral-200 rounded-md" />
              </aspect-ratio>
              </nuxt-link>
            <p class="text-center my-2">Lorem ipsum</p>
          </li>
        </ul>
      </div>
    </template>
  </ui-tabs>
</template>