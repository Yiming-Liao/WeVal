// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import { PasswordChangeProps } from "@/types/user/profile_hooks";
import { useState } from "react";

export const usePasswordChange = () => {
  const axios = useAxios();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const passwordChange = async ({
    password,
    newPassword,
    newPasswordConfirm,
  }: PasswordChangeProps): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.put<void>("/admin/auth/password-change", {
      password,
      newPassword,
      newPasswordConfirm,
    });

    setIsLoading(false);

    if (response) {
      return true;
    }

    return false;
  };

  return { passwordChange, isLoading };
};
