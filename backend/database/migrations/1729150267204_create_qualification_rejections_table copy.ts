import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'qualification_rejections'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('reason').notNullable()

      // Timestamp
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      // Foreign Key
      table.integer('valuer_id').unsigned().references('valuers.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
