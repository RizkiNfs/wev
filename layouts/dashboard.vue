<script setup lang="ts">

const route = useRoute()

const sidebarLinks = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'iconamoon:home-bold'
  }
]

const showSidebar = ref(false)

</script>

<template>
  <div>
    <Teleport to="body">
      <aside 
        :class="[
          'fixed z-30 -left-64 md:!left-0 top-0 h-full w-64',
          'border-r px-2 md:px-4 overflow-y-auto bg-neutral-100',
          'transition-transform duration-300 ease-in-out',
          'data-[state=open]:translate-x-64 -data-[state=close]:translate-x-64',
        ]"
        :data-state="showSidebar ? 'open' : 'close'"
      >
        <h2 class="text-[33px] font-bold">weev</h2>
        <ul class="mt-8 flex flex-col gap-y-2">
          <li v-for="link in sidebarLinks" :key="link.path">
            <nuxt-link 
              :to="link.path" 
              active-class="bg-primary-50 text-primary"
              class="flex px-2 py-3 items-center rounded-md hover:bg-primary-50 hover:text-primary"
            >
              <ui-icon :icon="link.icon" class="mr-3 text-xl"/>
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <div 
        v-if="showSidebar" 
        @click="showSidebar = false" 
        :style="{opacity: showSidebar ? 0.5 : 0}"
        role="button"
        class="fixed inset-0 bg-black transition-opacity z-20 md:hidden"
      />
    </Teleport>
    <header class="md:ml-64 py-2 sticky top-0 z-10 bg-neutral-100 flex justify-between px-2">
      <div class="flex items-center">
        <button @click="showSidebar = !showSidebar" class="md:hidden">
          <ui-icon icon="iconamoon:menu-burger-horizontal-bold" class="text-xl"/>
        </button>
      </div>
      <div class="min-w-[50%] p-2 bg-white rounded-md shadow-sm">
        <p class="text-center">
          {{route.meta.title}}
        </p>
      </div>
      <div/>
    </header>
    <main class="md:ml-64 p-4">
      <slot/>
    </main>
  </div>
</template>