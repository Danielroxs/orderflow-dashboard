export type OrderStatus =
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled";
export type PaymentMethod = "Card" | "PayPal" | "Transfer";

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  date: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  total: number;
  shippingAddress: string;
  items: OrderItem[];
}
