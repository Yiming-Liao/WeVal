// [r: Admin]

import { Admin } from "@/types/models/admin.types";
import { create } from "zustand";

// Create store
export const useAdminStore = create<AdminStore>((set) => ({
  admin: null,
  setAdmin: (admin: Admin | null) => set({ admin }),
  isLoading: true,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

// Store type
interface AdminStore {
  admin: Admin | null;
  setAdmin: (admin: Admin | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
