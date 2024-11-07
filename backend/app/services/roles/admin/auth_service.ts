// [r: Admin]

import Admin from '#models/admin'
import crypto, { randomUUID } from 'node:crypto'
import { DateTime } from 'luxon'

export class AuthService {
  /**
   * 🔑 Generate Refresh Token and Save
   */
  static async generateRefreshToken(admin: Admin): Promise<string> {
    // Generate refreshToken
    const refreshToken = crypto.randomBytes(20).toString('hex')
    const refreshTokenExpiresAt = DateTime.now().plus({ days: 30 }) // Expires in 30 days

    // Save
    await admin.merge({ refreshToken, refreshTokenExpiresAt }).save()

    return refreshToken
  }

  /**
   * 🔑 Generate Password Reset Token and Save
   */
  static async generatePasswordResetToken(admin: Admin): Promise<string> {
    // Generate passwordResetToken
    const passwordResetToken = crypto.randomBytes(20).toString('hex')
    const passwordResetTokenExpiresAt = DateTime.now().plus({ minutes: 10 }) // Expires in 10 minutes

    // Save
    await admin.merge({ passwordResetToken, passwordResetTokenExpiresAt }).save()

    return passwordResetToken
  }

  /**
   * 🔢 Generate Email Verify Code and Save
   */
  static async generateEmailVerifyCode(admin: Admin): Promise<string> {
    // Generate emailVerifyCode [Random 6 digits]
    const emailVerifyCode = Math.floor(100000 + Math.random() * 900000).toString()
    const emailVerifyCodeExpiresAt = DateTime.now().plus({ minutes: 10 }) // Expires in 10 minutes

    // Save
    await admin.merge({ emailVerifyCode, emailVerifyCodeExpiresAt }).save()

    return emailVerifyCode
  }

  /**
   * 🔢 Generate Phone Verify Code and Save
   */
  static async generatePhoneVerifyCode(admin: Admin): Promise<string> {
    // Generate phoneVerifyCode [Random 6 digits]
    const phoneVerifyCode = Math.floor(100000 + Math.random() * 900000).toString()
    const phoneVerifyCodeExpiresAt = DateTime.now().plus({ minutes: 10 }) // Expires in 10 minutes

    // Save
    await admin.merge({ phoneVerifyCode, phoneVerifyCodeExpiresAt }).save()

    return phoneVerifyCode
  }

  /**
   * 🏷️ Generate admin UUID and Save
   */
  static async generateUuid(admin: Admin): Promise<string> {
    // Generate UUID
    const uuid = randomUUID()

    // Save
    await admin.merge({ uuid }).save()

    return uuid
  }
}
