// [r: Valuer]

import { Valuer } from "@/types/models/valuer.types";
import { create } from "zustand";
import { useRoleStore } from "./roleStore";
import { Role } from "@/types/role.types";

// Create store
export const useValuerStore = create<ValuerStore>((set) => ({
  // valuer{...data}
  valuer: null,
  // Set valuer{...data} & role
  setValuer: (valuer: Valuer | null) => {
    set({ valuer });
    const setRole = useRoleStore.getState().setRole;
    setRole(Role.VALUER);
  },
  // Clear valuer{...data} & role
  clearValuer: () => {
    set({ valuer: null });
    const setRole = useRoleStore.getState().setRole;
    setRole(Role.DEFAULT);
  },
}));

// Store type
interface ValuerStore {
  valuer: Valuer | null;
  setValuer: (valuer: Valuer | null) => void;
  clearValuer: () => void;
}
