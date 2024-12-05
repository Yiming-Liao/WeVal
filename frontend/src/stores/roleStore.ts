import { Role } from "@/types/role.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useRoleStore = create<RoleStore>()(
  persist(
    (set) => ({
      role: Role.DEFAULT,
      setRole: (role) => {
        set({ role });
      },
    }),
    {
      name: "role", // Key name
      storage: createJSONStorage(() => localStorage), // Local storage
    }
  )
);

// Store type
interface RoleStore {
  role: Role;
  setRole: (role: Role) => void;
}
