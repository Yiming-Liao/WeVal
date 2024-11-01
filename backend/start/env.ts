/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),

  /*
  |----------------------------------------------------------
  | Variables for configuring database connection
  |----------------------------------------------------------
  */

  DB_CONNECTION: Env.schema.string(),
  DB_CLIENT: Env.schema.string(),

  DB_HOST: Env.schema.string({ format: 'host' }),
  DB_PORT: Env.schema.number(),
  DB_USER: Env.schema.string(),
  DB_PASSWORD: Env.schema.string.optional(),
  DB_DATABASE: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Variables for configuring the mail package
  |----------------------------------------------------------
  */
  SMTP_HOST: Env.schema.string(),
  SMTP_PORT: Env.schema.string(),

  MAIL_FROM_ADDRESS: Env.schema.string(),
  MAIL_FROM_NAME: Env.schema.string(),
  MAIL_REPLYTO_ADDRESS: Env.schema.string(),
  MAIL_REPLYTO_NAME: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Variables for configuring tokens name
  |----------------------------------------------------------
  */
  APP_NAME: Env.schema.string(),
  ACCESS_TOKEN_NAME: Env.schema.string(),
  REFRESH_TOKEN_NAME: Env.schema.string(),

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
  AWS_ACCESS_KEY: Env.schema.string(),
  AWS_SECRET_KEY: Env.schema.string(),
  AWS_REGION: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Redis
  |----------------------------------------------------------
  */
  REDIS_HOST: Env.schema.string({ format: 'host' }),
  REDIS_PORT: Env.schema.number(),
  REDIS_PASSWORD: Env.schema.string.optional(),

  /*
 |----------------------------------------------------------
 | Variables for configuring the limiter package
 |----------------------------------------------------------
 */
  LIMITER_STORE: Env.schema.enum(['redis', 'memory'] as const),
})
