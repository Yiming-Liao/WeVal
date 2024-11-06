import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'admins'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      // 📋 Basic Info
      table.string('email', 254).notNullable().unique()
      table.string('username', 48).nullable()
      table.string('password', 256).nullable()

      // Timestamp
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      // Password reset
      table.string('password_reset_token', 128).nullable()
      table.timestamp('password_reset_token_expires_at').nullable()

      // Refresh Token
      table.string('refresh_token', 128).nullable()
      table.timestamp('refresh_token_expires_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
