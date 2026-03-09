import type { Order, OrderStatus } from "../types/order";

export interface RevenuePoint {
  date: string;
  revenue: number;
}

export interface StatusPoint {
  status: OrderStatus;
  count: number;
}

export const buildRevenueSeries = (orders: Order[]): RevenuePoint[] => {
  const revenueByDate = orders.reduce<Record<string, number>>((acc, order) => {
    const key = order.date;
    acc[key] = (acc[key] ?? 0) + order.total;
    return acc;
  }, {});

  return Object.entries(revenueByDate)
    .map(([date, revenue]) => ({ date, revenue }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const buildStatusDistribution = (orders: Order[]): StatusPoint[] => {
  const countByStatus = orders.reduce<Record<OrderStatus, number>>(
    (acc, order) => {
      acc[order.status] = (acc[order.status] ?? 0) + 1;
      return acc;
    },
    {
      Pending: 0,
      Processing: 0,
      Shipped: 0,
      Delivered: 0,
      Cancelled: 0,
    },
  );

  return Object.entries(countByStatus).map(([status, count]) => ({
    status: status as OrderStatus,
    count,
  }));
};
