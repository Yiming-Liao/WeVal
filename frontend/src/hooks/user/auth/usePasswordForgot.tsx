import { useAxios } from "@/contexts/AxiosContext"; // 使用 useAxios
import { PasswordForgotProps } from "@/types/user/user_auth_hooks";

export const usePasswordForgot = () => {
  const axios = useAxios(); // 獲取 Axios 實例

  const passwordForgot = async ({
    email,
  }: PasswordForgotProps): Promise<boolean> => {
    const response = await axios.post<void>("/user/auth/password-forgot", {
      email,
    });

    if (response) {
      return true;
    }
    return false;
  };

  return { passwordForgot };
};
