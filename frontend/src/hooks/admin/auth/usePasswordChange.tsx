// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import { PasswordChangeProps } from "@/types/user/profile_hooks";

export const usePasswordChange = () => {
  const axios = useAxios();

  const passwordChange = async ({
    password,
    newPassword,
    newPasswordConfirm,
  }: PasswordChangeProps): Promise<boolean> => {
    const response = await axios.put<void>("/admin/auth/password-change", {
      password,
      newPassword,
      newPasswordConfirm,
    });

    if (response) {
      return true;
    }

    return false;
  };

  return { passwordChange };
};
