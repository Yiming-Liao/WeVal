// [r: Valuer]

import { useValuerStore } from "@/stores/valuerStore";
import { useAxiosStore } from "@/stores/axiosStore";
import { Valuer } from "@/types/models/valuer.types";
import { RegisterProps } from "@/types/valuer/auth_hooks";
import AuthLocalStorage from "@/services/AuthLocalStorage";
import { useState } from "react";

export const useRegister = () => {
  const { axios } = useAxiosStore();
  const { setValuer } = useValuerStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const register = async ({
    email,
    username,
    phone,
    phoneVerifyCode,
    password,
    passwordConfirm,
  }: RegisterProps): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.post<{ valuer: Valuer }>(
      "/valuer/auth/register",
      {
        email,
        username,
        phone,
        phoneVerifyCode,
        password,
        passwordConfirm,
      }
    );

    setIsLoading(false);

    if (response) {
      const { valuer } = response.data;

      // Set user{...data}
      setValuer(valuer);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ userData: valuer, role: "valuer" });

      return true;
    }

    return false;
  };

  return { register, isLoading };
};
