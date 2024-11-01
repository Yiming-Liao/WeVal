"use client";

import { appConfig } from "@/config/appConfig";
import { User } from "@/types/user/user_model";
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
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider
export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading User Data from Local Storage

  // Get User Data from local storage
  useEffect(() => {
    setIsLoading(true);

    const storedUser = localStorage.getItem(appConfig.USER_DATA_KEY);
    setUser(
      storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null
    );

    setIsLoading(false);
  }, []); // Run only once when mounted

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  isLoading: boolean;
}
