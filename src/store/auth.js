import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(persist(
    (set) => ({
        token: null,
        userId: null,
        isAuth: false,
        gymStatus: null,
        setToken: (token) => set({ token, isAuth: true }),
        setUserId: (userId) => set({ userId }),
        setGymStatus: (gymStatus) => set({ gymStatus }),
        logout: () => set({ token: null, userId: null, isAuth: false }),
    }), {
    name: "auth-storage",
}
));

