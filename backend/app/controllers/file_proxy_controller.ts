import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import { s3Client } from '#config/aws'
import { DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { Readable } from 'node:stream'

export default class FileProxyController {
  // 🪣 GET a file
  public async get({ params, response }: HttpContext) {
    try {
      // ex. valuer/masouivan-gmail-com/certificate-cg5aj38xgg2dqzofyhwzdy8x.jpg
      const key = params['*'].join('/')

      // 🪣 Get the file from S3
      const s3Response = await s3Client.send(
        new GetObjectCommand({
          Bucket: env.get('AWS_S3_BUCKET'),
          Key: key,
        })
      )

      // Check if the Body is a ReadableStream and return it
      if (s3Response.Body instanceof Readable) {
        return response.stream(s3Response.Body)
      } else {
        return response.badRequest('Invalid file format.')
      }

      // Error handling
    } catch (error) {
      console.error(error)
      if (error.Code === 'NoSuchKey') {
        return response.notFound('The requested file was not found.')
      } else if (error.Code === 'AccessDenied') {
        return response.forbidden('You do not have permission to access this file.')
      } else {
        return response.internalServerError(
          'There was an issue retrieving the file. Please try again later.'
        )
      }
    }
  }

  // 🪣 DELETE a file
  public async delete({ params, response }: HttpContext) {
    try {
      // ex. valuer/masouivan-gmail-com/certificate-cg5aj38xgg2dqzofyhwzdy8x.jpg
      const key = params['*'].join('/')

      // 🪣 Delete the file in S3
      await s3Client.send(
        new DeleteObjectCommand({
          Bucket: process.env.AWS_S3_BUCKET,
          Key: key,
        })
      )

      return response.noContent()

      // Error handling
    } catch (error) {
      console.error(error)
      if (error.Code === 'NoSuchKey') {
        return response.notFound('The requested file was not found.')
      } else if (error.Code === 'AccessDenied') {
        return response.forbidden('You do not have permission to delete this file.')
      } else {
        return response.internalServerError(
          'There was an issue deleting the file. Please try again later.'
        )
      }
    }
  }
}
