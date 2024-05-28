/* eslint-disable no-console */
import { mongo } from '../db/mongo'

export default defineNitroPlugin(async () => {

  const runtimeConfig = useRuntimeConfig()

  try {
    await mongo.connect(runtimeConfig.MONGO_URI)
    console.log('initialization finished')
  } catch(e) {
    console.log('initialization error  : ', e)
  }

})