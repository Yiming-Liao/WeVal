// [r: User]

import { useAxiosStore } from "@/stores/axiosStore";
import { PasswordForgotProps } from "@/types/user/auth_hooks";
import { useState } from "react";

export const usePasswordForgot = () => {
  const { axios } = useAxiosStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const passwordForgot = async ({
    email,
  }: PasswordForgotProps): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.post<void>("/user/auth/password-forgot", {
      email,
    });

    setIsLoading(false);

    if (response) {
      return true;
    }
    return false;
  };

  return { passwordForgot, isLoading };
};
