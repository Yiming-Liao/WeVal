import { DateTime } from 'luxon'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import hash from '@adonisjs/core/services/hash'
import Order from './order.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

/**
 * User
 */
export default class User extends compose(BaseModel, AuthFinder) {
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

  /**
   * 🔑 OAT Access Token
   */
  static accessTokens = DbAccessTokensProvider.forModel(User, {
    expiresIn: '1h',
    table: 'user_auth_access_tokens',
  })

  // 🔗 hasMany: Order
  @hasMany(() => Order)
  declare orders: HasMany<typeof Order>
}
