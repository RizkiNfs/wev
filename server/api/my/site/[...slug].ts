import { ObjectId } from 'mongodb'
import { getSite } from '~/server/db/site'

export default defineEventHandler(async (event) => {

  try {

    const payload = await verifyToken(event)

    const site = await getSite({
      path: event.context.params?.slug,
      owner: {
        _id: new ObjectId(payload._id)
      }
    })

    
    return {
      data: site
    }

  } catch (e: any) { 

    throw createError({
      message: 'Something went wrong',
      status: 500
    })
  }
})