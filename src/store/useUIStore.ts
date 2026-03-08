import { create } from "zustand";

interface UIStore {
  isSidebarOpen: boolean;
  selectedOrderId: string | null;
  isOrderDetailOpen: boolean;
  toggleSidebar: () => void;
  openOrderDetail: (id: string) => void;
  closeOrderDetail: () => void;
}

const isDesktop =
  typeof window !== "undefined" ? window.innerWidth >= 1024 : true;

export const useUIStore = create<UIStore>((set) => ({
  isSidebarOpen: isDesktop,
  selectedOrderId: null,
  isOrderDetailOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openOrderDetail: (id: string) =>
    set({ selectedOrderId: id, isOrderDetailOpen: true }),
  closeOrderDetail: () =>
    set({ selectedOrderId: null, isOrderDetailOpen: false }),
}));
