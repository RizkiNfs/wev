
import { createUser, getUser } from '~/server/db/user'
import { getGoogleAccessToken, verifyGoogleIdToken } from '~/server/utils/googleAuth'
import { sign } from '~/server/utils/jwt'

type Body = {
  code: string
}

export default defineEventHandler(async (event) => {

  try{

    const body = await readBody<Body>(event)
    const googleToken = await getGoogleAccessToken(body.code)
  
    if(!googleToken?.id_token){
      throw createError({ statusCode: 400, statusMessage: 'invalid code' })  
    }
  
    const tokenPayload = await verifyGoogleIdToken(googleToken.id_token)
  
    if(!tokenPayload){
      throw createError({ statusCode: 400, statusMessage: 'invalid code' })
    }
  
    let user = await getUser({ googleProfile: { sub: tokenPayload.sub } })

    if(!user) {

      user = await createUser({
        username: tokenPayload.email || tokenPayload.name || tokenPayload.sub,
        avatar: tokenPayload.picture,
        googleProfile: {
          sub: tokenPayload.sub
        }
      
      })

    }
  
    const token = await sign({ 
      _id: user._id.toString()
    })
    
    
    return {
      data: {
        token
      }
    }
    
  } catch(err: any) {

    if(err.statusCode === 404) {
      throw createError(err)
    }
    throw createError({ statusCode: 400 })
  }
})