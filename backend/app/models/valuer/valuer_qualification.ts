import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

/**
 * ValuerQualification
 */
export default class ValuerQualification extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  @column()
  declare serviceArea: string // Service area

  @column()
  declare address: string // Address

  @column()
  declare abn: string // ABN

  @column()
  declare certificatePath: string // Certificate file path

  // Timestamp
  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime | null

  // Foreign Key
  @column()
  declare valuerId: number // Connect to Valuer
}
