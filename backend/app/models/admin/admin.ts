import { DateTime } from 'luxon'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import hash from '@adonisjs/core/services/hash'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

/**
 * Admin
 */
export default class Admin extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  // 📋 Basic Info
  @column()
  declare email: string
  @column()
  declare username: string | null

  @column({ serializeAs: null })
  declare password: string | null

  // Timestamp
  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime | null

  // Password reset
  @column({ serializeAs: null })
  declare passwordResetToken: string | null
  @column.dateTime({ serializeAs: null })
  declare passwordResetTokenExpiresAt: DateTime | null // expiresAt

  // 🔑 Refresh Token
  @column({ serializeAs: null })
  declare refreshToken: string | null
  @column.dateTime({ serializeAs: null })
  declare refreshTokenExpiresAt: DateTime | null

  // 🔑 OAT Access Token
  static accessTokens = DbAccessTokensProvider.forModel(Admin, {
    expiresIn: '1h',
    table: 'admin_auth_access_tokens',
  })
}
