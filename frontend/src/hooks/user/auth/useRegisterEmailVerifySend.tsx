import { useAxios } from "@/contexts/AxiosContext";
import { RegisterEmailVerifySendProps } from "@/types/user/user_auth_hooks";

export const useRegisterEmailVerifySend = () => {
  const axios = useAxios();

  const registerEmailVerifySend = async ({
    email,
  }: RegisterEmailVerifySendProps): Promise<boolean> => {
    const response = await axios.post<void>(
      "/user/auth/register-email-verify-send",
      { email }
    );

    if (response) {
      return true;
    }
    return false;
  };

  return { registerEmailVerifySend };
};
