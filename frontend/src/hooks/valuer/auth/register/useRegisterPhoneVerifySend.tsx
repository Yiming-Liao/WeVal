// [r: Valuer]

import { useAxios } from "@/contexts/AxiosContext";
import { RegisterPhoneVerifySendProps } from "@/types/valuer/auth_hooks";

export const useRegisterPhoneVerifySend = () => {
  const axios = useAxios();

  const registerPhoneVerifySend = async ({
    email,
    phone,
  }: RegisterPhoneVerifySendProps): Promise<boolean> => {
    const response = await axios.post<void>(
      "/valuer/auth/register-phone-verify-send",
      {
        email,
        phone,
      }
    );

    if (response) {
      return true;
    }

    return false;
  };

  return { registerPhoneVerifySend };
};
