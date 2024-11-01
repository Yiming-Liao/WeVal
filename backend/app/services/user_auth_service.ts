import User from '#models/user'
import crypto from 'node:crypto'
import { DateTime } from 'luxon'

export class UserAuthService {
  /**
   * 🍪 Generate Refresh Token and Save
   */
  static async generateRefreshToken(user: User): Promise<string> {
    // Generate refreshToken
    const refreshToken = crypto.randomBytes(20).toString('hex')
    const refreshTokenExpiresAt = DateTime.now().plus({ days: 30 }) // Expires in 30 days

    // Save
    await user.merge({ refreshToken, refreshTokenExpiresAt }).save()

    return refreshToken
  }

  /**
   * 🍪 Generate Password Reset Token and Save
   */
  static async generatePasswordResetToken(user: User): Promise<string> {
    // Generate passwordResetToken
    const passwordResetToken = crypto.randomBytes(20).toString('hex')
    const passwordResetExpiresAt = DateTime.now().plus({ minutes: 10 }) // Expires in 10 minutes

    // Save
    await user.merge({ passwordResetToken, passwordResetExpiresAt }).save()

    return passwordResetToken
  }

  /**
   * 🔢 Generate Email Verify Code and Save
   */
  static async generateEmailVerifyCode(user: User): Promise<string> {
    // Generate emailVerifyCode [Random 6 digits]
    const emailVerifyCode = Math.floor(100000 + Math.random() * 900000).toString()
    const emailVerifyCodeExpiresAt = DateTime.now().plus({ minutes: 10 }) // Expires in 10 minutes

    // Save
    await user.merge({ emailVerifyCode, emailVerifyCodeExpiresAt }).save()

    return emailVerifyCode
  }

  /**
   * 🔢 Generate Phone Verify Code and Save
   */
  static async generatePhoneVerifyCode(user: User): Promise<string> {
    // Generate phoneVerifyCode [Random 6 digits]
    const phoneVerifyCode = Math.floor(100000 + Math.random() * 900000).toString()
    const phoneVerifyCodeExpiresAt = DateTime.now().plus({ minutes: 10 }) // Expires in 10 minutes

    // Save
    await user.merge({ phoneVerifyCode, phoneVerifyCodeExpiresAt }).save()

    return phoneVerifyCode
  }
}
