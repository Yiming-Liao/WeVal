// [r: User]

import { User } from "@/types/models/user.types";
import { create } from "zustand";
import { useRoleStore } from "./roleStore";
import { Role } from "@/types/role.types";

// Create store
export const useUserStore = create<UserStore>((set) => ({
  // user{...data}
  user: null,
  // Set user{...data} & role
  setUser: (user: User | null) => {
    set({ user });
    const setRole = useRoleStore.getState().setRole;
    setRole(Role.USER);
  },
  // Clear user{...data} & role
  clearUser: () => {
    set({ user: null });
    const setRole = useRoleStore.getState().setRole;
    setRole(Role.DEFAULT);
  },
}));

// Store type
interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}
