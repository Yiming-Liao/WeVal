// [r: User]

import { useState } from "react";
import { useUserStore } from "@/stores/userStore";
import { useAxiosStore } from "@/stores/axiosStore";
import { User } from "@/types/models/user.types";
import { RegisterProps } from "@/types/user/auth_hooks";
import AuthLocalStorage from "@/services/AuthLocalStorage";

export const useRegister = () => {
  const { axios } = useAxiosStore();
  const { setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const register = async ({
    email,
    username,
    password,
    passwordConfirm,
  }: RegisterProps): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.post<{ user: User }>("/user/auth/register", {
      email,
      username,
      password,
      passwordConfirm,
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

  return { register, isLoading };
};
