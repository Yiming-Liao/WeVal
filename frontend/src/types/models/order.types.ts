import { PriceRange } from "../stripe/priceRange.types";

export interface Order {
  // 🆔 Primary Key
  id: number;

  // 🆔 Order ID
  orderId: string;

  // 📋 Basic Info
  orderStatus: OrderStatus;
  ownerName: string;
  ownerPhone: string;
  region: string;
  address: string;
  priceRange: PriceRange;

  // 💰 Payment
  sessionId: string;
  paymentUrl: string;
  paymentStatus: PaymentStatus;
  amount: number;

  // 🗓️ Timestamps
  createdAt: string;
  updatedAt: string;
  expiresAt: string;

  // 🔗 belognsTo: User
  userId: number;
}

// Type
export enum OrderStatus {
  UNPAID = "unpaid", // PaymentStatus: 'pending', 'unpaid'
  AWAITING_VALUER = "awaiting-valuer", // PaymentStatus: 'paid'
  IN_PROGRESS = "in-progress", // PaymentStatus: 'paid'
  COMPLETED = "completed", // PaymentStatus: 'paid'
  CANCELLED = "cancelled", // PaymentStatus: 'expired'
}

export enum PaymentStatus {
  PENDING = "pending",
  UNPAID = "unpaid",
  PAID = "paid",
  CANCELLED = "cancelled",
  REQUIRES_PAYMENT_METHOD = "requires_payment_method", // None
  NO_PAYMENT_REQUIRED = "no_payment_required", // None
  EXPIRED = "expired",
}

// OrderStatus display for frontend
export const orderStatusDisplay: Record<OrderStatus, string> = {
  [OrderStatus.UNPAID]: "Unpaid",
  [OrderStatus.AWAITING_VALUER]: "Awaiting valuer",
  [OrderStatus.IN_PROGRESS]: "In progress",
  [OrderStatus.COMPLETED]: "Completed",
  [OrderStatus.CANCELLED]: "Cancelled",
};

// Status counts
export interface StatusCounts {
  orderStatus: OrderStatus;
  count: string;
}
