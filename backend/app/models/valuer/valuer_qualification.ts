import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Valuer from './valuer.js'
import { Region } from '#models/order'

/**
 * ValuerQualification
 */
export default class ValuerQualification extends BaseModel {
  // 🆔 Primary Key
  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  // 📋 Basic Info
  @column()
  declare region: Region // Region
  @column()
  declare address: string // Address
  @column()
  declare abn: string // ABN
  @column()
  declare certificatePath: string // Certificate file path

  // 🗓️ Timestamps
  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime | null

  // 🔗 belognsTo: Valuer
  @belongsTo(() => Valuer)
  declare valuer: BelongsTo<typeof Valuer>
  @column()
  declare valuerId: number // Connect to Valuer
}
