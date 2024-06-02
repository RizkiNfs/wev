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

const { data: templates } = useFetch('/api/templates')

const route = useRoute()
const router = useRouter()

const path = ref('') 

const { request: createSite, isLoading } = useRequest((path: string) => $fetch('/api/sites', {
  method: 'POST',
  body: JSON.stringify({
    template: route.query.template,
    path: path
  })
}))

const handleSubmit = () => {

  createSite(path.value)
    .then(() => {
      router.push(`/editor/${path.value}`)
    })
}
</script>

<template>
  <div>
    <ui-tabs :items="options" label="Choose template">
      <template #trigger="{ label }">
        <div class="py-2 text-nowrap">
          {{ label }}
        </div>
      </template>
      <template #solo>
        <div class="p-4 bg-white rounded-b-md">
          <div v-if="!templates?.data"/>
          <template v-else>
            <ul class="flex gap-6 w-full flex-wrap justify-center">
              <li v-for="t in templates.data" :key="t._id">
                <nuxt-link :to="`${route.path}?template=${t._id}`" class="w-40 md:w-64 block">
                  <aspect-ratio :ratio="9/16">
                    <div class="w-full h-full bg-neutral-200 rounded-md" />
                  </aspect-ratio>
                </nuxt-link>
                <p class="text-center my-2">{{t.name}}</p>
              </li>
            </ul>
          </template>
        </div>
      </template>
    </ui-tabs>
    <ui-sheet 
      :open="!!route.query.template" 
      side="right"
      @update:open="router.push(route.path)"
    >
      <ui-sheet-content
        title="Chose Url"
        description="Choose a url for your site"
        class="w-[90%] md:w-[600px]"
      >
        <form @submit.prevent="handleSubmit">
          <ui-label class="sr-only" for="url">url</ui-label>
          <div class="flex gap-x-1 items-center">
            <p>weev.site/</p>
            <ui-input id="url" v-model="path" />
          </div>
          <ui-button 
            class="mt-4 w-full" 
            type="submit"
            :loading="isLoading"
          >
            Create
          </ui-button>
        </form>
      </ui-sheet-content>
    </ui-sheet>
  </div>
</template>