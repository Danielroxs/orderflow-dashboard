import type { Order } from "../types/order";

export const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    date: "2026-03-05",
    status: "Delivered",
    paymentMethod: "Card",
    total: 299.99,
    shippingAddress: "123 Main St, New York, NY 10001",
    items: [
      { id: "1", name: "Laptop Stand", price: 49.99, quantity: 1 },
      { id: "2", name: "USB-C Cable", price: 15.99, quantity: 2 },
    ],
  },
  {
    id: "ORD-002",
    customerName: "Jane Smith",
    customerEmail: "jane@example.com",
    date: "2026-03-04",
    status: "Shipped",
    paymentMethod: "PayPal",
    total: 159.99,
    shippingAddress: "456 Oak Ave, Los Angeles, CA 90001",
    items: [
      { id: "3", name: "Wireless Mouse", price: 29.99, quantity: 2 },
      { id: "4", name: "Keyboard", price: 99.99, quantity: 1 },
    ],
  },
  {
    id: "ORD-003",
    customerName: "Bob Johnson",
    customerEmail: "bob@example.com",
    date: "2026-03-03",
    status: "Processing",
    paymentMethod: "Card",
    total: 89.99,
    shippingAddress: "789 Pine Rd, Chicago, IL 60601",
    items: [
      { id: "5", name: "Monitor Arm", price: 79.99, quantity: 1 },
      { id: "6", name: "Phone Stand", price: 9.99, quantity: 1 },
    ],
  },
  {
    id: "ORD-004",
    customerName: "Alice Brown",
    customerEmail: "alice@example.com",
    date: "2026-03-02",
    status: "Pending",
    paymentMethod: "Transfer",
    total: 549.99,
    shippingAddress: "321 Elm St, Houston, TX 77001",
    items: [
      { id: "7", name: '27" Monitor', price: 349.99, quantity: 1 },
      { id: "8", name: "HDMI Cable", price: 12.99, quantity: 2 },
    ],
  },
  {
    id: "ORD-005",
    customerName: "Charlie Davis",
    customerEmail: "charlie@example.com",
    date: "2026-03-01",
    status: "Cancelled",
    paymentMethod: "Card",
    total: 199.99,
    shippingAddress: "654 Birch Lane, Phoenix, AZ 85001",
    items: [
      { id: "9", name: "Desk Lamp", price: 39.99, quantity: 1 },
      { id: "10", name: "Power Strip", price: 24.99, quantity: 2 },
    ],
  },
];
