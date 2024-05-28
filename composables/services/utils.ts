import type { UnwrapRef } from 'vue'

export const useRequest = <T,U>(fetcher: (payload:T) => Promise<U>) => {

  const isLoading = ref(false)
  const error = ref<unknown | null>(null)
  const data = ref<U | null>(null)

  const request = async (payload: T) => {
    try {
      isLoading.value = true
      const response = await fetcher(payload)
      data.value = response as UnwrapRef<U>
      return response
    } catch(err) {
      error.value = err
      throw err
    } finally {
      isLoading.value = false
    }
  } 

  return {
    request,
    isLoading,
    error,
    data
  }
}