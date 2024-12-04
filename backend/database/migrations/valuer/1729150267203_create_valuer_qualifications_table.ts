import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'valuer_qualifications'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // 🆔 Primary Key
      table.increments('id').primary()

      // 📋 Basic Info
      table.string('region').notNullable()
      table.string('address').notNullable()
      table.string('abn').notNullable()
      table.string('certificate_path').notNullable()

      // 🗓️ Timestamps
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      // 🔗 Foreign Key: Valuer
      table.integer('valuer_id').unsigned().references('valuers.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
