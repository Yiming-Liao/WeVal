import { PriceRange } from '#config/stripe'
import { Region } from '#models/order'
import vine from '@vinejs/vine'

const orderStoreValidator = vine.compile(
  vine.object({
    region: vine.enum(Object.values(Region)),
    address: vine.string().trim().maxLength(256), //  removed .minLength(6)
    priceRange: vine.enum(Object.values(PriceRange)),
    ownerName: vine.string().trim().minLength(3).maxLength(256),
    ownerPhone: vine
      .string()
      .trim()
      .regex(/^\+61\d{9}$/)
      .maxLength(12),
  })
)

export default orderStoreValidator
