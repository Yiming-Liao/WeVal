// [r: Valuer]

import { useAxios } from "@/contexts/AxiosContext";
import { PasswordForgotProps } from "@/types/user/auth_hooks";
import { useState } from "react";

export const usePasswordForgot = () => {
  const axios = useAxios();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const passwordForgot = async ({
    email,
  }: PasswordForgotProps): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.post<void>("/valuer/auth/password-forgot", {
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
