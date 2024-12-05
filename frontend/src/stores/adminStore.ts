// [r: Admin]

import { Admin } from "@/types/models/admin.types";
import { create } from "zustand";
import { useRoleStore } from "./roleStore";
import { Role } from "@/types/role.types";

// Create store
export const useAdminStore = create<AdminStore>((set) => ({
  // admin{...data}
  admin: null,
  // Set admin{...data} & role
  setAdmin: (admin: Admin | null) => {
    set({ admin });
    const setRole = useRoleStore.getState().setRole;
    setRole(Role.ADMIN);
  },
  // Clear admin{...data} & role
  clearAdmin: () => {
    set({ admin: null });
    const setRole = useRoleStore.getState().setRole;
    setRole(Role.DEFAULT);
  },
}));

// Store type
interface AdminStore {
  admin: Admin | null;
  setAdmin: (admin: Admin | null) => void;
  clearAdmin: () => void;
}
