import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

type DatabaseClient = 'mysql2' | 'pg'
const dbConnection = env.get('DB_CONNECTION') as string

const dbConfig = defineConfig({
  connection: env.get('DB_CONNECTION'),
  connections: {
    [dbConnection]: {
      client: env.get('DB_CLIENT') as DatabaseClient,
      connection: {
        host: env.get('DB_HOST'),
        port: env.get('DB_PORT'),
        user: env.get('DB_USER'),
        password: env.get('DB_PASSWORD'),
        database: env.get('DB_DATABASE'),
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
