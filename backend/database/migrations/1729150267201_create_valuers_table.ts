import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'valuers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      // Basic Info
      table.string('email', 254).notNullable().unique()
      table.string('username', 48).nullable()
      table.string('phone', 16).nullable().unique()
      table
        .enu('status', [
          'noQualificationCreated',
          'qualificationCreated',
          'qualificationRejected',
          'approved',
          'disabled',
        ])
        .defaultTo('noQualificationCreated')
      table.text('qualification_rejection_message').nullable()

      table.string('password', 256).nullable()

      // Timestamp
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      // Email verification
      table.string('email_verify_code', 6).nullable()
      table.timestamp('email_verified_at').nullable()
      table.timestamp('email_verify_code_expires_at').nullable()

      // Phone verification
      table.string('phone_verify_code', 6).nullable()
      table.timestamp('phone_verified_at').nullable()
      table.timestamp('phone_verify_code_expires_at').nullable()

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
