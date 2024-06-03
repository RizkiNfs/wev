/* eslint-disable no-console */
import { mongo } from '../db/mongo'

export default defineNitroPlugin(async () => {

  const runtimeConfig = useRuntimeConfig()

  try {
    await mongo.connect(runtimeConfig.MONGO_URI)
    s3.init({
      endpoint: runtimeConfig.S3_ENDPOINT,
      credentials: {
        accessKeyId: runtimeConfig.S3_ACCESS_KEY_ID,
        secretAccessKey: runtimeConfig.S3_SECRET_ACCESS_KEY,
      }
    })
    console.log('initialization finished')
  } catch(e) {
    console.log('initialization error  : ', e)
  }

})