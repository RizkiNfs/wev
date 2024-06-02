import { getTemplates } from '~/server/db/site'

export default defineEventHandler(async () => {

  try {
    const templates = await getTemplates()
    return {
      data: templates
    }

  } catch (e: any) { 
    throw createError({
      message: 'Something went wrong',
      status: 500
    })
  }
})