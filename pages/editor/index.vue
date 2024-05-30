<script lang="ts">

import type { Props as RendererProps } from '~/components/el/renderer'

</script>


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

const elements = ref<RendererProps['elements']>([
  { 
    el: 'el-avatar', 
    props: {
      src: 'https://fastly.picsum.photos/id/660/300/300.jpg?hmac=UOozGJ9VjkIk9o_6J2qxfFNaj26dCQqgH0470waEKZg'
    }
  },
  { 
    el: 'el-text',
    props: {
      class: 'text-center text-xl font-bold text-[#fafafa]', 
      content: 'some user'
    } 
  },
  { 
    el: 'el-text', 
    props: {
      class: 'text-center text-lg text-[#fafafa] mb-6', 
      content: 'awesome'
    } 
  },
  { 
    el: 'el-link-list', 
    props: {
      linkStyle: 'text-white text-lg bg-indigo-600 hover:opacity-90 rounded-full text-center block px-4 py-3 cursor-pointer border-4 border-white',
      items: [
        { href: '#', title: 'Home' },
        { href: '#', title: 'About' },
        { href: '#', title: 'Contact' },
        { href: '#', title: 'FAQ' },
      ]
    }
  },
  {
    el: 'el-social-media-icons', 
    props: {
      class: 'mt-8',
      color: '#fafafa',
      items:  [
        {
          href: 'https://twitter.com/',
          type: 'twitter',
        },
        {
          href: 'https://linkedin.com/',
          type: 'linkedin',
        },
      ]
    }
  },
])

</script>

<template>
  <client-only>
    <div class="w-full min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div class="max-w-sm mx-auto pt-12">
        <el-renderer :elements="elements" />
      </div>
    </div>
    <Teleport to="body">
      <ui-button
        class="fixed bottom-4 right-4 rounded-full shadow-2xl bg-white" 
        variant="outline" 
        :style="{borderRadius: '999px'}"
      >
        <ui-icon aria-label="edit" icon="iconoir:edit" class="text-3xl"/>
      </ui-button>
    </Teleport>
  </client-only>
</template>