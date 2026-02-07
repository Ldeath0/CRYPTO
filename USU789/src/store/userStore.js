import { create } from 'zustand';

export const useUserStore = create((set) => ({
    user: null,
    balance: 0,
    vipLevel: 1,
    setUser: (user) => set({ user }),
    setBalance: (balance) => set({ balance }),
    setVipLevel: (level) => set({ vipLevel: level }),
    logout: () => set({ user: null, balance: 0 }),
}));
