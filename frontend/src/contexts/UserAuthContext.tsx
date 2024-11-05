"use client";

import { appConfig } from "@/config/appConfig";
import { User } from "@/types/user/model";
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
const UserAuthContext = createContext<UserAuthContextType | undefined>(
  undefined
);

// Provider
export const UserAuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading User Data from Local Storage

  // Get Role & User from local storage
  useEffect(() => {
    setIsLoading(true);

    // User or Valuer
    const role = localStorage.getItem(appConfig.USER_ROLE_KEY);

    const storedUser = localStorage.getItem(appConfig.USER_DATA_KEY);
    const parsedUser =
      storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;

    // Check role
    if (role === "user") {
      setUser(parsedUser);
    } else {
      setUser(null);
    }

    setIsLoading(false);
  }, []); // Run only once when mounted

  return (
    <UserAuthContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserAuthContext.Provider>
  );
};

// Custom Hook for UserAuthContext
export const useUserAuth = () => {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within an UserAuthProvider");
  }
  return context;
};

interface UserAuthContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  isLoading: boolean;
}
