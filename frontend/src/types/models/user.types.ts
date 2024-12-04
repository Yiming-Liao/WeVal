// [r: User]

import { Order } from "./order.types";

export interface User {
  email: string;
  username: string;
  phone?: string;
  orders: Order[];
}
