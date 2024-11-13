// [r: Valuer]

import { useAxios } from "@/contexts/AxiosContext";
import { RegisterEmailVerifySendProps } from "@/types/user/auth_hooks";
import { useState } from "react";

export const useRegisterEmailVerifySend = () => {
  const axios = useAxios();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerEmailVerifySend = async ({
    email,
  }: RegisterEmailVerifySendProps): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.post<void>(
      "/valuer/auth/register-email-verify-send",
      { email }
    );

    setIsLoading(false);

    if (response) {
      return true;
    }
    return false;
  };

  return { registerEmailVerifySend, isLoading };
};
