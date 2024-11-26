"use client";

import { envConfig } from "@/config/envConfig";

export default class LocalStorageService {
  static setRole({ role }: SetProps) {
    // set role in local storage
    return CSR() && localStorage.setItem(envConfig.USER_ROLE_KEY, role);
  }

  static removeRole() {
    // clear role in local storage
    return CSR() && localStorage.removeItem(envConfig.USER_ROLE_KEY);
  }

  static getRole() {
    // get role from local storage
    return (CSR() && localStorage.getItem(envConfig.USER_ROLE_KEY)) || "";
  }
}

interface SetProps {
  role: "" | "user" | "valuer" | "admin";
}

// Make sure is run in CSR
const CSR = () => (typeof window !== "undefined" ? true : false);
