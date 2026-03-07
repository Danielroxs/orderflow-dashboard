import { create } from "zustand";

interface UIStore {
  isSidebarOpen: boolean;
  selectedOrderId: string | null;
  isOrderDetailOpen: boolean;
  toggleSidebar: () => void;
  openOrderDetail: (id: string) => void;
  closeOrderDetail: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isSidebarOpen: true,
  selectedOrderId: null,
  isOrderDetailOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openOrderDetail: (id: string) =>
    set({ selectedOrderId: id, isOrderDetailOpen: true }),
  closeOrderDetail: () =>
    set({ selectedOrderId: null, isOrderDetailOpen: false }),
}));
