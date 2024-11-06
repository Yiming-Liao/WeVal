import { User } from "@/types/user/model";
import { appConfig } from "@/config/appConfig";
import { Valuer } from "@/types/valuer/model";

export default class AuthLocalStorage {
  static set({ user, role }: SetProps) {
    // set role in local storage
    localStorage.setItem(appConfig.USER_ROLE_KEY, role);

    // set user{...data} in local storage
    localStorage.setItem(appConfig.USER_DATA_KEY, JSON.stringify(user));
  }

  static remove() {
    // clear role in local storage
    localStorage.removeItem(appConfig.USER_ROLE_KEY);

    // clear user{...data} in local storage
    localStorage.removeItem(appConfig.USER_DATA_KEY);
  }
}

interface SetProps {
  role: "user" | "valuer" | "admin";
  user: User | Valuer;
}
