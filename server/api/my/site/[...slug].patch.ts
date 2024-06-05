import { ObjectId } from 'mongodb'
import { updateSite } from '~/server/db/site'
import { generatePage } from '~/server/utils/site/generate'
import type { Site } from '~/types/site'

export default defineEventHandler(async (event) => {

  try {

    const payload = await verifyToken(event)

    const body = await readBody<Site>(event)

    const site = await updateSite({
      ...body,
      owner: {
        _id: new ObjectId(payload._id)
      }
    })

    const page = await generatePage(body.pages[0])

    s3.putObject({
      Bucket: 'webs',
      Key: `${body.path}/index.html`,
      Body: page,
      ContentType: 'text/html',
      ACL: 'public-read',
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