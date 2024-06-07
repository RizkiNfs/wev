import type { Filter, Document } from 'mongodb'
import { ObjectId } from 'mongodb'
import { mongo } from '../mongo'

export interface File {
  createdAt: string | Date
  _id: string | ObjectId
  fileExtension: string
  fileName: string
  fileSize: number
  mimeType: string
  title: string
  link: string
  owner: {
    _id: string | ObjectId
  },
}


export const getFiles = async (file: Partial<File>) => {
  
  const query:Partial<File> = {
    ...file
  }


  return mongo.File.find<File>(query as Filter<Document>).toArray()

}

export const createFile = (file: Omit<File, 'createdAt' | '_id'>) => {
  
  return mongo.File?.insertOne({
    ...file,
    createdAt: new Date(),
    _id: new ObjectId()
  })


}
