// [r: User]

import { useUserStore } from "@/stores/userStore";
import { useAxiosStore } from "@/stores/axiosStore";
import { User } from "@/types/models/user.types";
import { LoginProps } from "@/types/user/auth_hooks";
import AuthLocalStorage from "@/services/AuthLocalStorage";
import { useState } from "react";

export const useLogin = () => {
  const { axios } = useAxiosStore();
  const { setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async ({ email, password }: LoginProps): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.post<{ user: User }>("/user/auth/login", {
      email,
      password,
    });

    setIsLoading(false);

    if (response) {
      const { user } = response.data;

      // Set user{...data}
      setUser(user);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ userData: user, role: "user" });

      return true;
    }

    return false;
  };

  return { login, isLoading };
};
