<script setup lang="ts">

defineOptions({
  inheritAttrs: false
})

const emit = defineEmits<{
  success: []
  error: [e: unknown]
}>()

const input = ref<HTMLInputElement>()


const { request: uploadFile, isLoading } = useRequest(
  (body : FormData) => $fetch('/api/my/files/upload', { body, method: 'POST' })
)

const handleChange = async () => {
  
  try {

    const file = input.value?.files?.[0]
  
    if(!file) return
    
    const formData = new FormData()

    formData.append(file.name, file)

    await uploadFile(formData)

    emit('success')
  } catch (error) {
    emit('error', error)
  } finally {
    input.value!.files = null
  }

}



</script>

<template>
  <slot :loading="isLoading" />
  <input
    v-bind="$attrs"
    ref="input" 
    class="hidden" 
    type="file" 
    @change="handleChange" 
  >
</template>