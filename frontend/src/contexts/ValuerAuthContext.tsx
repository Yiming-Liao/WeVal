// [r: Valuer]

"use client";

import { envConfig } from "@/config/envConfig";
import { Valuer } from "@/types/valuer/model";
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
const ValuerAuthContext = createContext<ValuerAuthContextType | undefined>(
  undefined
);

// Provider
export const ValuerAuthProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [valuer, setValuer] = useState<Valuer | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading Valuer Data from Local Storage

  // Get Role & Valuer from local storage
  useEffect(() => {
    setIsLoading(true);

    // user | valuer | admin
    const role = localStorage.getItem(envConfig.USER_ROLE_KEY);

    const storedValuer = localStorage.getItem(envConfig.USER_DATA_KEY);
    const parsedValuer =
      storedValuer && storedValuer !== "undefined"
        ? JSON.parse(storedValuer)
        : null;

    // Check role
    if (role === "valuer") {
      setValuer(parsedValuer);
    } else {
      setValuer(null);
    }

    setIsLoading(false);
  }, []); // Run only once when mounted

  return (
    <ValuerAuthContext.Provider value={{ valuer, setValuer, isLoading }}>
      {children}
    </ValuerAuthContext.Provider>
  );
};

// Custom Hook for ValuerAuthContext
export const useValuerAuth = () => {
  const context = useContext(ValuerAuthContext);
  if (!context) {
    throw new Error("useValuerAuth must be used within an ValuerAuthProvider");
  }
  return context;
};

interface ValuerAuthContextType {
  valuer: Valuer | null;
  setValuer: Dispatch<SetStateAction<Valuer | null>>;
  isLoading: boolean;
}
