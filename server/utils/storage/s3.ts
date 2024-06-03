import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import type { S3ClientConfig } from '@aws-sdk/client-s3'


class S3 {

  // @ts-expect-error strictPropertyInitialization
  client: S3Client

  init(config: S3ClientConfig) {
    this.client = new S3Client({
      tls: false,
      region: 'us-east-1',
      forcePathStyle: true,
      ...config
    })

  }

  putObject(input: PutObjectCommand['input']){
    const command = new PutObjectCommand(input)
    return this.client.send(command)
  }

}

export const s3 = new S3()
