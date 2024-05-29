<script setup lang="ts">
definePageMeta({
  title: 'Sites'
})

const sites = [
  {
    path: '/my-profile',
  },
  {
    path: '/my-profile-2',
  },
  {
    path: '/my-profile-3',
  },
  {
    path: '/my-profile-4',
  },
  {
    path: '/my-profile-5',
  },
  {
    path: '/my-profile-6',
  },
  {
    path: '/my-profile-7',
  },
  {
    path: '/my-profile-8',
  },
  {
    path: '/my-profile-9',
  },
  {
    path: '/my-profile-10',
  },
]

</script>

<template>
  <div>
    <ui-data-table 
      :data="sites"
      :get-row-id="(row, index) => `${row.path}-${index}`"
      :columns="[
        { label: 'Sites', key: 'site' },
        { label: 'actions', key: 'actions', align: 'right' },
      ]"
    >
    <template #header>
      <div class="flex flex-col md:flex-row gap-4 justify-between">
        <ui-button to="/dashboard/sites/new">
          Create Site
        </ui-button>
        <input class="p-2 border rounded-lg focus:ring-2 ring-primary-300 ring-offset-2 ring-offset-white bg-neutral-50 focus:bg-white" placeholder="search" >
      </div>
    </template>
    <template #column-site="slotProps">
      <span class="font-bold text-primary">
        https://wiv.site{{ slotProps.path }}
      </span>
    </template>
    <template #column-actions>
      <ui-button variant="outline">
        Edit
      </ui-button>
    </template>
    </ui-data-table>
  </div>
</template>