import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(persist(
    (set) => ({
        token: null,
        userId: null,
        setToken: (token) => set({ token }),
        setUserId: (userId) => set({ userId }),
    
    }),{
        name: "auth-storage",
    }
));

