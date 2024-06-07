import { ObjectId } from 'mongodb'
import { getFiles } from '~/server/db/file'

export default defineEventHandler(async (event) => {

  try {

    const payload = await verifyToken(event)

    const files = await getFiles({
      owner: {
        _id: new ObjectId(payload._id)
      }
    })
    
    return {
      data: files
    }

  } catch (e: any) { 

    throw createError({
      message: 'Something went wrong',
      status: 500
    })
  }
})