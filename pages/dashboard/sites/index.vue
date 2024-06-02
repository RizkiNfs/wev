<script setup lang="ts">
definePageMeta({
  title: 'Sites'
})

const { data: sites } = useFetch('/api/my/sites', { server: false })

</script>

<template>
  <div>
    <ui-data-table 
      :data="sites?.data || []"
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
    <template #column-site="{path}">
      <span class="font-bold text-primary">
        https://wiv.site/{{ path }}
      </span>
    </template>
    <template #column-actions="{path}">
      <ui-button :to="`/editor/${path}`" variant="outline">
        Edit
      </ui-button>
    </template>
    </ui-data-table>
  </div>
</template>