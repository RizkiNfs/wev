import type { TokenPayload } from 'google-auth-library'
import { OAuth2Client } from 'google-auth-library'
import { Issuer } from 'openid-client'


export const getGoogleClient = async () => {
  const config = useRuntimeConfig()

  const googleIssuer = await Issuer.discover(config.GOOGLE_AUTHORIZE_HOST)
  return new googleIssuer.Client({
    client_id: config.GOOGLE_CLIENT_ID,
    client_secret: config.GOOGLE_CLIENT_SECRET,
    redirect_uris: [config.GOOGLE_REDIRECT_URI],
    response_types: ['code'],
  })
}

let googleAuthorizationUrl =''

export const getGoogleAutUrl = async () => {
  if(googleAuthorizationUrl) return googleAuthorizationUrl

  googleAuthorizationUrl = (await getGoogleClient()).authorizationUrl({
    scope: 'profile',
    state: '3(#0/!~',
    prompt: 'consent',
  })

  return googleAuthorizationUrl

}


export const getGoogleAccessToken = async (code: string) => {
  const config = useRuntimeConfig()

  const client = await getGoogleClient()

  const token = await client.callback(config.GOOGLE_REDIRECT_URI, { code })
  
  return token
}

export const verifyGoogleIdToken = async (idToken: string): Promise<TokenPayload| undefined> => {
  
  const config = useRuntimeConfig()

  try {
    const client: OAuth2Client = new OAuth2Client(config.GOOGLE_CLIENT_ID)
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: config.GOOGLE_CLIENT_ID,
    })
    return ticket.getPayload()
  } catch(e) {
    return Promise.reject(e)
  }
}
