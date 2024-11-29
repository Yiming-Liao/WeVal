import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo, beforeCreate } from '@adonisjs/lucid/orm'
import User from './user.js'
import { PriceRange } from '#config/stripe'
import IdGeneratorService from '#services/id_generator_service'

/**
 * Order
 */
export default class Order extends BaseModel {
  // 🆔 Primary Key
  @column({ isPrimary: true })
  declare id: number

  // 🆔 Order ID
  @column()
  declare orderId: string

  // 📋 Basic Info
  @column()
  declare ownerName: string
  @column()
  declare ownerPhone: string
  @column()
  declare region: string
  @column()
  declare address: string
  @column()
  declare priceRange: PriceRange // '0M_to_1M', '1M_to_1.5M', ...

  // 💰 Payment
  @column()
  declare sessionId: string | null
  @column()
  declare paymentUrl: string | null
  @column()
  declare status: OrderStatus
  @column()
  declare amount: number | null // Amount in cents (AUD), eg. 500.00 -> 50000

  // 🗓️ Timestamps
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  @column.dateTime({ autoCreate: true })
  declare expiresAt: DateTime

  // 🔗 belognsTo: User
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
  @column()
  declare userId: number // Foreign key

  /**
   * 🪝 Set orderId & expiresAt & Clean up expired orders
   */
  @beforeCreate()
  public static async beforeCreate(order: Order) {
    // Set orderId
    order.orderId = IdGeneratorService.generateOrderId()
    // Set expiresAt
    order.expiresAt = DateTime.local().plus({ hours: 24 })
    // Clean up expired orders
    const now = DateTime.local()
    await Order.query()
      .where('expires_at', '<', now.toISO())
      .andWhere('status', '!=', OrderStatus.COMPLETED)
      .delete()
  }
}

// Type
export enum OrderStatus {
  UNPAID = 'unpaid',
  AWAITING_VALUER = 'awaiting-valuer',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  FAILED = 'failed',
}
