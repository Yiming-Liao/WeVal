import { create } from "zustand";
import LocalStorageService from "@/services/LocalStorageService";

// Type guard
const isValidRole = (
  role: string
): role is "" | "user" | "valuer" | "admin" => {
  return ["", "user", "valuer", "admin"].includes(role);
};

// Create store
export const useRoleStore = create<RoleStore>((set) => {
  const storedRole = LocalStorageService.getRole();
  const initialRole = isValidRole(storedRole) ? storedRole : "";

  return {
    role: initialRole,
    setRole: (role) => {
      LocalStorageService.setRole({ role });
      set({ role });
    },
  };
});

// Store type
interface RoleStore {
  role: "" | "user" | "valuer" | "admin";
  setRole: (role: "" | "user" | "valuer" | "admin") => void;
}
