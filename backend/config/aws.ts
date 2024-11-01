import { SNSClient } from '@aws-sdk/client-sns'
import env from '#start/env'

export const snsClient = new SNSClient({
  region: env.get('AWS_REGION'),
  credentials: {
    accessKeyId: env.get('AWS_ACCESS_KEY'),
    secretAccessKey: env.get('AWS_SECRET_KEY'),
  },
})
