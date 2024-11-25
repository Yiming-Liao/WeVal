// [r: Valuer]

import { useValuerStore } from "@/stores/valuerStore";
import { useAxiosStore } from "@/stores/axiosStore";
import { Valuer } from "@/types/models/valuer.types";
import { LoginProps } from "@/types/user/auth_hooks";
import AuthLocalStorage from "@/services/AuthLocalStorage";
import { useState } from "react";

export const useLogin = () => {
  const { axios } = useAxiosStore();
  const { setValuer } = useValuerStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async ({
    email,
    password,
  }: LoginProps): Promise<boolean | Valuer> => {
    setIsLoading(true);

    const response = await axios.post<{ valuer: Valuer }>(
      "/valuer/auth/login",
      { email, password }
    );

    setIsLoading(false);

    if (response) {
      const { valuer } = response.data;

      // Set user{...data}
      setValuer(valuer);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ userData: valuer, role: "valuer" });

      return valuer;
    }

    return false;
  };

  return { login, isLoading };
};
