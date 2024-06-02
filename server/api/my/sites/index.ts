import { ObjectId } from 'mongodb'
import { getSites } from '~/server/db/site'

export default defineEventHandler(async (event) => {

  try {

    const payload = await verifyToken(event)

    const sites = await getSites({
      owner: {
        _id: new ObjectId(payload._id)
      }
    })
    
    return {
      data: sites
    }

  } catch (e: any) { 

    throw createError({
      message: 'Something went wrong',
      status: 500
    })
  }
})