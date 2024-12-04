import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import {
  column,
  BaseModel,
  belongsTo,
  beforeCreate,
  afterFetch,
  afterFind,
} from '@adonisjs/lucid/orm'
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
  declare orderStatus: OrderStatus // Order status
  @column()
  declare ownerName: string
  @column()
  declare ownerPhone: string
  @column()
  declare region: Region
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
  declare paymentStatus: PaymentStatus // Payment status
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
    let isUnique = false
    while (!isUnique) {
      const orderId = IdGeneratorService.generateOrderId()
      if (!(await Order.query().where('orderId', orderId).first())) {
        order.orderId = orderId
        isUnique = true
      }
    }
    // Set expiresAt
    order.expiresAt = DateTime.local().plus({ hours: 24 })
  }

  /**
   * 🪝 Set CANCELLED status for expired orders
   */
  @afterFetch() // When using Order.all()
  public static async afterFetch(orders: Order[]) {
    for (const order of orders) {
      await this.checkAndCancelExpiredOrder(order)
    }
  }
  @afterFind() // When using Order.findBy()
  public static async afterFind(order: Order) {
    await this.checkAndCancelExpiredOrder(order)
  }
  private static async checkAndCancelExpiredOrder(order: Order) {
    if (
      order.paymentStatus !== PaymentStatus.PAID &&
      order.expiresAt &&
      DateTime.local() > order.expiresAt
    ) {
      await order.merge({ orderStatus: OrderStatus.CANCELLED }).save()
    }
  }
}

// Types
export enum OrderStatus {
  UNPAID = 'unpaid', // PaymentStatus: 'pending', 'unpaid'
  AWAITING_VALUER = 'awaiting-valuer', // PaymentStatus: 'paid'
  IN_PROGRESS = 'in-progress', // PaymentStatus: 'paid'
  COMPLETED = 'completed', // PaymentStatus: 'paid'
  CANCELLED = 'cancelled', // PaymentStatus: 'expired'
}

export enum PaymentStatus {
  PENDING = 'pending',
  UNPAID = 'unpaid',
  PAID = 'paid',
  CANCELLED = 'cancelled',
  REQUIRES_PAYMENT_METHOD = 'requires_payment_method', // None
  NO_PAYMENT_REQUIRED = 'no_payment_required', // None
  EXPIRED = 'expired',
}

export enum Region {
  DEFAULT = '',
  WESTERN_AUSTRALIA = 'western_australia',
  NORTHERN_TERRITORY = 'northern_territory',
  QUEENSLAND = 'queensland',
  SOUTH_AUSTRALIA = 'south_australia',
  NEW_SOUTH_WALES = 'new_south_wales',
  VICTORIA = 'victoria',
  TASMANIA = 'tasmania',
}
