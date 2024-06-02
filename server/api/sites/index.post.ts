import { ObjectId } from 'mongodb'
import { createSite, getTemplate } from '~/server/db/site'
import type { Page } from '~/types/site'

export default defineEventHandler(async (event) => {

  try {

    const payload = await verifyToken(event)


    const {path, template} = await readBody<{path: string, template: string}>(event)

    let pages = [] as Page[]
    if(template){
      const site = await getTemplate({ _id: template })
      if(site){
        pages = site.pages
      }
    }

    const site = await createSite({
      owner: {
        _id: new ObjectId(payload._id)
      },
      path,
      pages
    })

    return {
      data: site
    }

  } catch (e: any) {
    throw createError({
      message: 'Something went wrong',
      status: 400
    })
  }

})