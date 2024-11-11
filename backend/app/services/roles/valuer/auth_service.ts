// [r: Valuer]

import Valuer from '#models/valuer/valuer'
import crypto from 'node:crypto'
import { DateTime } from 'luxon'

export class AuthService {
  /**
   * 🔑 Generate Refresh Token and Save
   */
  static async generateRefreshToken(valuer: Valuer): Promise<string> {
    // Generate refreshToken
    const refreshToken = crypto.randomBytes(20).toString('hex')
    const refreshTokenExpiresAt = DateTime.now().plus({ days: 30 }) // Expires in 30 days

    // Save
    await valuer.merge({ refreshToken, refreshTokenExpiresAt }).save()

    return refreshToken
  }

  /**
   * 🔑 Generate Password Reset Token and Save
   */
  static async generatePasswordResetToken(valuer: Valuer): Promise<string> {
    // Generate passwordResetToken
    const passwordResetToken = crypto.randomBytes(20).toString('hex')
    const passwordResetTokenExpiresAt = DateTime.now().plus({ minutes: 10 }) // Expires in 10 minutes

    // Save
    await valuer.merge({ passwordResetToken, passwordResetTokenExpiresAt }).save()

    return passwordResetToken
  }

  /**
   * 🔢 Generate Email Verify Code and Save
   */
  static async generateEmailVerifyCode(valuer: Valuer): Promise<string> {
    // Generate emailVerifyCode [Random 6 digits]
    const emailVerifyCode = Math.floor(100000 + Math.random() * 900000).toString()
    const emailVerifyCodeExpiresAt = DateTime.now().plus({ minutes: 10 }) // Expires in 10 minutes

    // Save
    await valuer.merge({ emailVerifyCode, emailVerifyCodeExpiresAt }).save()

    return emailVerifyCode
  }

  /**
   * 🔢 Generate Phone Verify Code and Save
   */
  static async generatePhoneVerifyCode(valuer: Valuer): Promise<string> {
    // Generate phoneVerifyCode [Random 6 digits]
    const phoneVerifyCode = Math.floor(100000 + Math.random() * 900000).toString()
    const phoneVerifyCodeExpiresAt = DateTime.now().plus({ minutes: 10 }) // Expires in 10 minutes

    // Save
    await valuer.merge({ phoneVerifyCode, phoneVerifyCodeExpiresAt }).save()

    return phoneVerifyCode
  }
}
