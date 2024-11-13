// [r: Valuer]

import { useAxios } from "@/contexts/AxiosContext";
import { RegisterPhoneVerifySendProps } from "@/types/valuer/auth_hooks";
import { useState } from "react";

export const useRegisterPhoneVerifySend = () => {
  const axios = useAxios();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerPhoneVerifySend = async ({
    email,
    phone,
  }: RegisterPhoneVerifySendProps): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.post<void>(
      "/valuer/auth/register-phone-verify-send",
      {
        email,
        phone,
      }
    );

    setIsLoading(false);

    if (response) {
      return true;
    }

    return false;
  };

  return { registerPhoneVerifySend, isLoading };
};
