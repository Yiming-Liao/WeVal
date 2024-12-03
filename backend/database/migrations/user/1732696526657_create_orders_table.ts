import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // 🆔 Primary Key
      table.increments('id')

      // 🆔 Order ID
      table.string('order_id').notNullable().unique()

      // 📋 Basic Info
      table
        .enu('order_status', ['unpaid', 'awaiting-valuer', 'in-progress', 'completed', 'cancelled'])
        .defaultTo('unpaid')
        .notNullable()
      table.string('owner_name').notNullable()
      table.string('owner_phone').notNullable()
      table.string('region').notNullable()
      table.string('address', 1000).notNullable()
      table.string('price_range').notNullable()

      // 💰 Payment Info
      table.string('session_id', 500).nullable()
      table.string('payment_url', 1000).nullable()
      table
        .enu('payment_status', [
          'pending',
          'unpaid',
          'paid',
          'cancelled',
          'requires_payment_method',
          'no_payment_required',
          'expired',
        ])
        .defaultTo('pending')
        .notNullable()
      table.decimal('amount', 10, 2).nullable() // Storing amount in cents for precision (e.g., 75000 for $750.00)

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
