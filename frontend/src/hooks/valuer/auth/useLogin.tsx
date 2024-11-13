// [r: Valuer]

import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { Valuer } from "@/types/valuer/model";
import { LoginProps } from "@/types/user/auth_hooks";
import AuthLocalStorage from "@/services/AuthLocalStorage";
import { useState } from "react";

export const useLogin = () => {
  const axios = useAxios();
  const { setValuer } = useValuerAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async ({
    email,
    password,
  }: LoginProps): Promise<boolean | { isQualified: boolean }> => {
    setIsLoading(true);

    const response = await axios.post<{ valuer: Valuer }>(
      "/valuer/auth/login",
      { email, password }
    );

    setIsLoading(false);

    if (response) {
      const { valuer } = response.data;

      // Set user{...data} for context
      setValuer(valuer);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ userData: valuer, role: "valuer" });

      return {
        isQualified: valuer.isQualified,
      };
    }

    return false;
  };

  return { login, isLoading };
};
