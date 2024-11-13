// [r: User]

import { useAxios } from "@/contexts/AxiosContext";
import { PasswordResetProps } from "@/types/user/auth_hooks";
import { useState } from "react";

export const usePasswordReset = () => {
  const axios = useAxios();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const passwordReset = async ({
    passwordResetToken,
    password,
    passwordConfirm,
  }: PasswordResetProps): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.post<void>("/user/auth/password-reset", {
      passwordResetToken,
      password,
      passwordConfirm,
    });

    setIsLoading(false);

    if (response) {
      return true;
    }
    return false;
  };

  return { passwordReset, isLoading };
};
