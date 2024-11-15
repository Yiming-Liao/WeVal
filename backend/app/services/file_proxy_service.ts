import { s3Client } from '#config/aws'
import { DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { Readable } from 'node:stream'
import env from '#start/env'

export default class FileProxyService {
  // 🪣 Get from S3
  static async get({ key }: { key: string }) {
    try {
      // 🪣 Get the file from S3
      const s3Response = await s3Client.send(
        new GetObjectCommand({
          Bucket: env.get('AWS_S3_BUCKET'),
          Key: key,
        })
      )

      if (s3Response.Body instanceof Readable) {
        return { file: s3Response.Body }
      } else {
        throw new Error('Invalid file format.')
      }
    } catch (error) {
      throw error
    }
  }

  // 🪣 Delete from S3
  static async delete({ key }: { key: string }) {
    try {
      // 🪣 Delete the file in S3
      await s3Client.send(
        new DeleteObjectCommand({
          Bucket: env.get('AWS_S3_BUCKET'),
          Key: key,
        })
      )
    } catch (error) {
      throw error
    }
  }
}
