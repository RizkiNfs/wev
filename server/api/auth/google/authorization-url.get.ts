import { getGoogleAutUrl } from '~/server/utils/googleAuth'

export default defineEventHandler(async () => {
  
  const data = await getGoogleAutUrl()

  return {
    data
  }
})