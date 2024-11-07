// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import { PasswordForgotProps } from "@/types/admin/auth_hooks";

export const usePasswordForgot = () => {
  const axios = useAxios();

  const passwordForgot = async ({
    email,
  }: PasswordForgotProps): Promise<boolean> => {
    const response = await axios.post<void>("/admin/auth/password-forgot", {
      email,
    });

    if (response) {
      return true;
    }
    return false;
  };

  return { passwordForgot };
};
