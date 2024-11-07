import { Env } from '@adonisjs/core/env'

export const envCustom = {
  APP_NAME: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Role's cookie name
  |----------------------------------------------------------
  */
  USER_ROLE_NAME: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Authentication tokens' cookie name
  |----------------------------------------------------------
  */
  USER_ACCESS_TOKEN_NAME: Env.schema.string(),
  USER_REFRESH_TOKEN_NAME: Env.schema.string(),
  VALUER_ACCESS_TOKEN_NAME: Env.schema.string(),
  VALUER_REFRESH_TOKEN_NAME: Env.schema.string(),
  ADMIN_ACCESS_TOKEN_NAME: Env.schema.string(),
  ADMIN_REFRESH_TOKEN_NAME: Env.schema.string(),
  ADMIN_UUID_NAME: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | URLs
  |----------------------------------------------------------
  */
  BACKEND_URL: Env.schema.string(),
  API_URL: Env.schema.string(),
  FRONTEND_URL: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | AWS SNS
  |----------------------------------------------------------
  */
  AWS_SNS_REGION: Env.schema.string(),
  AWS_SNS_ACCESS_KEY: Env.schema.string(),
  AWS_SNS_SECRET_KEY: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | AWS S3 
  |----------------------------------------------------------
  */
  AWS_S3_REGION: Env.schema.string(),
  AWS_S3_BUCKET: Env.schema.string(),
  AWS_S3_ACCESS_KEY: Env.schema.string(),
  AWS_S3_SECRET_KEY: Env.schema.string(),
}
