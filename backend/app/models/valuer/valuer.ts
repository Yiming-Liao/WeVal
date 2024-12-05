import { DateTime } from 'luxon'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import hash from '@adonisjs/core/services/hash'
import ValuerQualification from './valuer_qualification.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Order from '#models/order'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

/**
 * Valuer
 */
export default class Valuer extends compose(BaseModel, AuthFinder) {
  // 🆔 Primary Key
  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  // 📋 Basic Info
  @column()
  declare email: string
  @column()
  declare username: string | null
  @column()
  declare phone: string | null
  @column()
  declare status: ValuerStatus
  @column()
  declare qualificationRejectionMessage: string | null // Rejection message

  @column({ serializeAs: null })
  declare password: string | null

  // ✉️ Email verification
  @column({ serializeAs: null })
  declare emailVerifyCode: string | null
  @column.dateTime({ serializeAs: null })
  declare emailVerifiedAt: DateTime | null // verifiedAt
  @column.dateTime({ serializeAs: null })
  declare emailVerifyCodeExpiresAt: DateTime | null // expiresAt

  // 💬 Phone verification
  @column({ serializeAs: null })
  declare phoneVerifyCode: string | null
  @column.dateTime({ serializeAs: null })
  declare phoneVerifiedAt: DateTime | null // verifiedAt
  @column.dateTime({ serializeAs: null })
  declare phoneVerifyCodeExpiresAt: DateTime | null // expiresAt

  // 🔐 Password reset
  @column({ serializeAs: null })
  declare passwordResetToken: string | null
  @column.dateTime({ serializeAs: null })
  declare passwordResetTokenExpiresAt: DateTime | null // expiresAt

  // 🔑 Refresh Token
  @column({ serializeAs: null })
  declare refreshToken: string | null
  @column.dateTime({ serializeAs: null })
  declare refreshTokenExpiresAt: DateTime | null

  // 🗓️ Timestamps
  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime | null

  // 🔑 OAT Access Token
  static accessTokens = DbAccessTokensProvider.forModel(Valuer, {
    expiresIn: '1h',
    table: 'valuer_auth_access_tokens',
  })

  // 🔗 Valuer qualification
  @hasOne(() => ValuerQualification)
  declare valuerQualification: HasOne<typeof ValuerQualification>

  // 🔗 hasMany: Order
  @hasMany(() => Order)
  declare orders: HasMany<typeof Order>
}

export enum ValuerStatus {
  NoQualificationCreated = 'noQualificationCreated',
  QualificationCreated = 'qualificationCreated',
  QualificationRejected = 'qualificationRejected',
  Approved = 'approved',
  Disabled = 'disabled',
}
