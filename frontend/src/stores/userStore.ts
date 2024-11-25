// [r: User]

import { User } from "@/types/models/user.types";
import { create } from "zustand";

// Create store
export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
  isLoading: true,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

// Store type
interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
