import type { H3Event } from 'h3'
import * as jose from 'jose'
import type { KeyLike } from 'jose'

const alg = 'RS256'

let privateKey: KeyLike

interface Payload {
  _id: string
}

const issuer = 'urn:weev:issuer'
const audience = 'urn:weev:audience'


export const sign = async (payload: Payload) => {

  if(!privateKey) {
    const config = useRuntimeConfig()
    privateKey = await jose.importPKCS8(config.JWT_PRIVATE_KEY, alg)
  }

  return new jose.SignJWT({ 'urn:weev:claim': true, ...payload })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer(issuer)
    .setAudience(audience)
    .setExpirationTime('24d')
    .sign(privateKey)
}


let publicKey: KeyLike

export const verify = async (jwt: string) => {
  
  if(!publicKey) {
    const config = useRuntimeConfig()
    publicKey = await jose.importSPKI(config.JWT_PUBLIC_KEY, alg)
  }

  return jose.jwtVerify<jose.JWTPayload & Payload>(jwt, publicKey, {
    issuer: issuer,
    audience: audience,
  })


}

export const verifyToken = async (event: H3Event) => {

  const token = getCookie(event, 'vv_a')

  if(!token) {
    throw createError({ statusCode: 401 })
  }

  try {
    const { payload } = await verify(token)
    return payload
  } catch {
    throw createError({ statusCode: 401 })
  }

}