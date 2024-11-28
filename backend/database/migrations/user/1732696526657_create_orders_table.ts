import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // 🆔 Primary Key
      table.increments('id')

      // 🆔 Order ID
      table.string('order_id')

      // 📋 Basic Info
      table.string('owner_name').notNullable()
      table.string('owner_phone').notNullable()
      table.string('region').notNullable()
      table.string('address', 1000).notNullable()
      table.string('price_range').notNullable()

      // 💰 Payment Info
      table.string('session_id', 500).nullable()
      table.string('payment_url', 1000).nullable()
      table.enu('status', ['unpaid', 'completed', 'failed']).defaultTo('unpaid')
      table.decimal('amount', 10, 2).nullable() // Decimal (e.g., 750.00)

      // 🗓️ Timestamps
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.timestamp('expires_at')

      // 🔗 Foreign Key: User
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE') // delete post when user is deleted
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
