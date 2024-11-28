export interface Order {
  // 🆔 Primary Key
  id: string;

  // 🆔 Order ID
  orderId: string;

  // 📋 Basic Info
  username: string;
  ownerName: string;
  ownerPhone: string;
  region: string;
  address: string;
  priceRange: string;

  // 💰 Payment
  sessionId: string;
  paymentUrl: string;
  status: string;
  amount: string;

  // 🗓️ Timestamps
  createdAt: string;
  updatedAt: string;
  expiresAt: string;

  // 🔗 belognsTo: User
  userId: string;
}
