import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

/**
 * QualificationRejection
 */
export default class QualificationRejection extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  @column()
  declare reason: string

  // Timestamp
  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime | null

  // Foreign Key
  @column()
  declare valuerId: number // Connect to Valuer
}
