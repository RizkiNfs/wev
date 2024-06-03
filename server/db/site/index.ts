import type { Filter, Document } from 'mongodb'
import { ObjectId } from 'mongodb'
import { mongo } from '../mongo'
import type { Site } from '~/types/site'



export const getSite = async (site: Partial<Site>): Promise<Site|null> => {
  
  const query:Partial<Site> = {
    ...site
  }

  return mongo.Site?.findOne<Site>(query as Filter<Document>)

}

export const getSites = async (site: Partial<Site>) => {
  
  const query:Partial<Site> = {
    ...site
  }

  return mongo.Site?.find<Site>(query as Filter<Document>).toArray()

}

export const getTemplate = async (site: Partial<Site>): Promise<Site|null> => {
  
  const query:Partial<Site> = {
    _id: new ObjectId(site._id),
    isPublicTemplate: true
  }

  return mongo.Site?.findOne<Site>(query as Filter<Document>)

}


export const getTemplates = async () => {
  
  const query:Partial<Site> = {
    isPublicTemplate: true
  }

  return mongo.Site?.find<Site>(query as Filter<Document>).toArray()

}

export const createSite = async (site: Partial<Omit<Site, '_id' >>): Promise<Site> => {
  
  const createdSite = await mongo.Site?.insertOne({
    ...site,
    _id: new ObjectId(),
  })

  const res = (await mongo.Site?.findOne<Site>({ _id: createdSite.insertedId })) as Site

  return res


}


export const updateSite = async (site: Partial<Site>) => {

  const { path, owner, _id:_, ...value } = site

  const res = await mongo.Site?.updateOne({ path: path, owner }, {
    $set: {
      ...value
    }
  })

  return res


}
