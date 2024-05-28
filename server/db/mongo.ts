import type { Db, Collection, MongoClientOptions } from 'mongodb'
import { MongoClient } from 'mongodb'


class Mongo {
  private static instance: Mongo
  private client: MongoClient | null = null
  private options?: MongoClientOptions
  public db: Db | null = null

  constructor(options?: MongoClientOptions ) {
    if (Mongo.instance) {
      return Mongo.instance
    }

    this.options = options
  }

  public async connect(uri: string): Promise<void> {
    this.client = new MongoClient(uri, this.options)
    await this.client.connect()

    this.db = this.client.db()
    this.User = this.db.collection('users')

    await this.createIndex()
  }

  private async createIndex(): Promise<void> {
    this.User.createIndex({ 'googleProfile.sub': 1 }, { unique: true })
  }

  // @ts-expect-error strictPropertyInitialization
  public User: Collection

}

export const mongo = new Mongo()