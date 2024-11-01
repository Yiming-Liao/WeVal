import { useAxios } from "@/contexts/AxiosContext"; // 使用 useAxios
import { PasswordResetProps } from "@/types/user/user_auth_hooks";

export const usePasswordReset = () => {
  const axios = useAxios(); // 獲取 Axios 實例

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
