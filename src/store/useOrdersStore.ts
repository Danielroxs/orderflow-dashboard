import { create } from "zustand";
import type { Order, OrderStatus } from "../types/order";
import { mockOrders } from "../data/mockOrders";

interface OrdersStore {
  orders: Order[];
  searchTerm: string;
  statusFilter: OrderStatus | "all";
  sortBy: "date" | "total" | "customer";
  sortDirection: "asc" | "desc";
  currentPage: number;
  pageSize: number;
  isLoading: boolean;
  error: string | null;
  setSearchTerm: (term: string) => void;
  setStatusFilter: (status: OrderStatus | "all") => void;
  setSorting: (
    by: "date" | "total" | "customer",
    direction: "asc" | "desc",
  ) => void;
  setCurrentPage: (page: number) => void;
  updateOrderStatus: (orderId: string, newStatus: OrderStatus) => void;
}

export const useOrdersStore = create<OrdersStore>((set) => ({
  orders: mockOrders,
  searchTerm: "",
  statusFilter: "all",
  sortBy: "date",
  sortDirection: "desc",
  currentPage: 1,
  pageSize: 10,
  isLoading: false,
  error: null,
  setSearchTerm: (term: string) => set({ searchTerm: term, currentPage: 1 }),
  setStatusFilter: (status: OrderStatus | "all") =>
    set({ statusFilter: status, currentPage: 1 }),
  setSorting: (by: "date" | "total" | "customer", direction: "asc" | "desc") =>
    set({ sortBy: by, sortDirection: direction }),
  setCurrentPage: (page: number) => set({ currentPage: page }),
  updateOrderStatus: (orderId: string, newStatus: OrderStatus) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order,
      ),
    })),
}));
