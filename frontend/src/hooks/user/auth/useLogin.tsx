// [r: User]

import { useUserAuth } from "@/contexts/UserAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { User } from "@/types/user/model";
import { LoginProps } from "@/types/user/auth_hooks";
import AuthLocalStorage from "@/services/AuthLocalStorage";
import { useState } from "react";

export const useLogin = () => {
  const axios = useAxios();
  const { setUser } = useUserAuth();
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

      // Set user{...data} for context
      setUser(user);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ userData: user, role: "user" });

      return true;
    }

    return false;
  };

  return { login, isLoading };
};
