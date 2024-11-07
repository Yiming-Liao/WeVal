import { useAxios } from "@/contexts/AxiosContext";
import { PasswordResetProps } from "@/types/user/auth_hooks";

export const usePasswordReset = () => {
  const axios = useAxios();

  const passwordReset = async ({
    passwordResetToken,
    password,
    passwordConfirm,
  }: PasswordResetProps): Promise<boolean> => {
    const response = await axios.post<void>("/user/auth/password-reset", {
      passwordResetToken,
      password,
      passwordConfirm,
    });

    if (response) {
      return true;
    }
    return false;
  };

  return { passwordReset };
};
