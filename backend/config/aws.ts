import env from '#start/env'
import { SNSClient } from '@aws-sdk/client-sns'
import { S3Client } from '@aws-sdk/client-s3'

// AWS SNS
export const snsClient = new SNSClient({
  region: env.get('AWS_SNS_REGION'),
  credentials: {
    accessKeyId: env.get('AWS_SNS_ACCESS_KEY'),
    secretAccessKey: env.get('AWS_SNS_SECRET_KEY'),
  },
})

// AWS S3
export const s3Client = new S3Client({
  region: env.get('AWS_S3_REGION'),
  credentials: {
    accessKeyId: env.get('AWS_S3_ACCESS_KEY'),
    secretAccessKey: env.get('AWS_S3_SECRET_KEY'),
  },
})
