import env from '#start/env'
import Stripe from 'stripe'

// 🆂 Stripe
export const stripe = new Stripe(env.get('STRIPE_SECRET_KEY'))

// 🆂 Stripe product IDs
export const PRODUCT_IDS: Record<PriceRange, string> = {
  '0M_to_1M': 'prod_RIFDGhNMWaYhsz',
  '1M_to_1.5M': 'prod_RIFERVFHULtaSN',
  '1.5M_to_2M': 'prod_RIXJn9uNbeCIl5',
  '2M_to_2.5M': 'null',
  '2.5M_to_3M': 'null',
  '3M_to_3.5M': 'null',
  '3.5M_to_4M': 'null',
  '4M_to_4.5M': 'null',
  '4.5M_to_5M': 'null',
  '5M_to_5.5M': 'null',
  '5.5M_to_6M': 'null',
  '6M_to_6.5M': 'null',
  '6.5M_to_7M': 'null',
  '7M_to_7.5M': 'null',
  '7.5M_to_8M': 'null',
  '8M_to_8.5M': 'null',
  '8.5M_to_9M': 'null',
  '9M_to_9.5M': 'null',
  '9.5M_to_10M': 'null',
}

// Commission amounts
export const COMMISSION_AMOUNT: Record<PriceRange, number> = {
  '0M_to_1M': 550,
  '1M_to_1.5M': 600,
  '1.5M_to_2M': 650,
  '2M_to_2.5M': 700,
  '2.5M_to_3M': 750,
  '3M_to_3.5M': 800,
  '3.5M_to_4M': 850,
  '4M_to_4.5M': 900,
  '4.5M_to_5M': 950,
  '5M_to_5.5M': 1000,
  '5.5M_to_6M': 1050,
  '6M_to_6.5M': 1100,
  '6.5M_to_7M': 1150,
  '7M_to_7.5M': 1200,
  '7.5M_to_8M': 1250,
  '8M_to_8.5M': 1300,
  '8.5M_to_9M': 1350,
  '9M_to_9.5M': 1400,
  '9.5M_to_10M': 1450,
}

// Type: ENUM
export enum PriceRange {
  '0M_to_1M' = '0M_to_1M',
  '1M_to_1.5M' = '1M_to_1.5M',
  '1.5M_to_2M' = '1.5M_to_2M',
  '2M_to_2.5M' = '2M_to_2.5M',
  '2.5M_to_3M' = '2.5M_to_3M',
  '3M_to_3.5M' = '3M_to_3.5M',
  '3.5M_to_4M' = '3.5M_to_4M',
  '4M_to_4.5M' = '4M_to_4.5M',
  '4.5M_to_5M' = '4.5M_to_5M',
  '5M_to_5.5M' = '5M_to_5.5M',
  '5.5M_to_6M' = '5.5M_to_6M',
  '6M_to_6.5M' = '6M_to_6.5M',
  '6.5M_to_7M' = '6.5M_to_7M',
  '7M_to_7.5M' = '7M_to_7.5M',
  '7.5M_to_8M' = '7.5M_to_8M',
  '8M_to_8.5M' = '8M_to_8.5M',
  '8.5M_to_9M' = '8.5M_to_9M',
  '9M_to_9.5M' = '9M_to_9.5M',
  '9.5M_to_10M' = '9.5M_to_10M',
}
