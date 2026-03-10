import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types/user";

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email: string, password: string) => {
        // Demo: simple validation
        if (email && password.length >= 6) {
          set({
            user: {
              id: "1",
              email,
              name: email.split("@")[0],
            },
            isAuthenticated: true,
          });
        }
      },
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        });
      },
    }),
    { name: "orderflow-auth" },
  ),
);
