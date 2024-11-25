import { envConfig } from "@/config/envConfig";
import { User } from "@/types/user/model";
import { Valuer } from "@/types/models/valuer.types";
import { Admin } from "@/types/admin/model";

export default class AuthLocalStorage {
  static set({ userData, role }: SetProps) {
    // set role in local storage
    localStorage.setItem(envConfig.USER_ROLE_KEY, role);

    // set user{...data} in local storage
    localStorage.setItem(envConfig.USER_DATA_KEY, JSON.stringify(userData));
  }

  static remove() {
    // clear role in local storage
    localStorage.removeItem(envConfig.USER_ROLE_KEY);

    // clear user{...data} in local storage
    localStorage.removeItem(envConfig.USER_DATA_KEY);
  }
}

interface SetProps {
  role: "user" | "valuer" | "admin";
  userData: User | Valuer | Admin;
}
