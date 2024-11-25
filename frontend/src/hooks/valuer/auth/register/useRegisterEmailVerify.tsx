// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { RegisterEmailVerifyProps } from "@/types/valuer/auth_hooks";
import { useState } from "react";

export const useRegisterEmailVerify = () => {
  const { axios } = useAxiosStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerEmailVerify = async ({
    email,
    emailVerifyCode,
  }: RegisterEmailVerifyProps): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.post<void>(
      "/valuer/auth/register-email-verify",
      { email, emailVerifyCode }
    );

    setIsLoading(false);

    if (response) {
      return true;
    }
    return false;
  };

  return { registerEmailVerify, isLoading };
};
