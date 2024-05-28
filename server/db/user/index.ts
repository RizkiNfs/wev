import type { Filter, Document } from 'mongodb'
import { ObjectId } from 'mongodb'
import { mongo } from '../mongo'

export interface User {
  createdAt: string | Date
  updatedAt: string | Date
  _id: string | ObjectId
  username: string
  displayName?: string
  googleProfile?: {
    sub: string
  }
  avatar?: string
  badges?: string[]
  verified?: boolean
  blocked?: boolean
}

export const getUser = async (user: Partial<User>): Promise<User|null> => {
  
  let query:Partial<User> = {}

  if(user.googleProfile?.sub) {
    query = {
      googleProfile: { sub: user.googleProfile?.sub }
    }
  }

  if(user.username) {
    query.username = user.username
  }

  return mongo.User?.findOne<User>(query as Filter<Document>)

}

export const createUser = async (user: Pick<User, 'username' | 'googleProfile' | 'avatar'>): Promise<User> => {
  
  const createdUser = await mongo.User?.insertOne({
    ...user,
    createdAt: new Date(),
    _id: new ObjectId()
  })

  const data = (await mongo.User?.findOne<User>({ _id: createdUser.insertedId })) as User

  return data


}
