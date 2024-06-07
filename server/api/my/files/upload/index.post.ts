import type { PutObjectCommandInput } from '@aws-sdk/client-s3'
import { nanoid } from 'nanoid'
import { ObjectId } from 'mongodb'

import { createFile } from '~/server/db/file'

import sharp from 'sharp'

export interface Query {
  extension: string
}

const toKb = (bytes: number) => bytes / 1024

export default defineEventHandler(async (event) => {

  try {

    const payload = await verifyToken(event)

    const files = await readMultipartFormData(event)
    
    if(!files) throw createError({ statusCode: 400, message: 'No files found' })

    const file = files[0]

    if(!file.type?.includes('image')) {
      throw createError({ statusCode: 400, message: 'Only image file is supported' })
    }

    const metadata = await sharp(file.data).metadata()

    let fileSize = toKb(metadata.size as number)

    if(fileSize > 3072) {
      throw createError({ statusCode: 400, message: 'File size should be less than 3MB' })
    }

    const extension = file.type?.split('/')[1]

    const fileName = nanoid(30)
    
    const key = `${payload._id}/${fileName}.${extension}`

    const input: PutObjectCommandInput = {
      Bucket: 'assets',
      Key: key,
      Body: file.data,
      ContentType: file.type,
    }

    const fileCompressed = await sharp(file.data)
      .resize((metadata.width || 0) > 1024 ? { width: 1024 } : {})
      .jpeg({ quality: 80 })
      .toBuffer()
    input.Body = fileCompressed

    fileSize = toKb(fileCompressed.byteLength)

    await s3.putObject(input)

    const runtimeConfig = useRuntimeConfig()

    const data = await createFile({
      fileExtension: extension,
      fileName: fileName,
      fileSize: fileSize,
      mimeType: file.type,
      link: `${runtimeConfig.S3_ENDPOINT}/${input.Bucket}/${input.Key}`,
      title: file.name ||  nanoid(),
      owner: {
        _id: new ObjectId(payload._id)
      }, 
    })

    return {
      data,
    }
    
  } catch(err) {
    if((err as { statusCode: number }).statusCode) throw err
    throw createError({ statusCode: 500 })
  }
})