// [r: Valuer]

import { useAxios } from "@/contexts/AxiosContext";
import { RegisterEmailVerifyProps } from "@/types/valuer/auth_hooks";

export const useRegisterEmailVerify = () => {
  const axios = useAxios();

  const registerEmailVerify = async ({
    email,
    emailVerifyCode,
  }: RegisterEmailVerifyProps): Promise<boolean> => {
    const response = await axios.post<void>(
      "/valuer/auth/register-email-verify",
      { email, emailVerifyCode }
    );

    if (response) {
      return true;
    }
    return false;
  };

  return { registerEmailVerify };
};
