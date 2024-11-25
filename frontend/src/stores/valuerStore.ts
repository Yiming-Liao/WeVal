// [r: Valuer]

import { Valuer } from "@/types/models/valuer.types";
import { create } from "zustand";

// Create store
export const useValuerStore = create<ValuerStore>((set) => ({
  valuer: null,
  setValuer: (valuer: Valuer | null) => set({ valuer }),
  isLoading: true,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

// Store type
interface ValuerStore {
  valuer: Valuer | null;
  setValuer: (valuer: Valuer | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
