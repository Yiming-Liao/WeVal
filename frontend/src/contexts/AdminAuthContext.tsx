// [r: Admin]

"use client";

import { envConfig } from "@/config/envConfig";
import { Admin } from "@/types/admin/model";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  FC,
  useEffect,
} from "react";

// Create Context
const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined
);

// Provider
export const AdminAuthProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading Admin Data from Local Storage

  // Get Role & Admin from local storage
  useEffect(() => {
    setIsLoading(true);

    // user | valuer | admin
    const role = localStorage.getItem(envConfig.USER_ROLE_KEY);

    const storedAdmin = localStorage.getItem(envConfig.USER_DATA_KEY);
    const parsedAdmin =
      storedAdmin && storedAdmin !== "undefined"
        ? JSON.parse(storedAdmin)
        : null;

    // Check role
    if (role === "admin") {
      setAdmin(parsedAdmin);
    } else {
      setAdmin(null);
    }

    setIsLoading(false);
  }, []); // Run only once when mounted

  return (
    <AdminAuthContext.Provider value={{ admin, setAdmin, isLoading }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

// Custom Hook for AdminAuthContext
export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
};

interface AdminAuthContextType {
  admin: Admin | null;
  setAdmin: Dispatch<SetStateAction<Admin | null>>;
  isLoading: boolean;
}
