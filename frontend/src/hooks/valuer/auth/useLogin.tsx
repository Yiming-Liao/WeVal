// [r: Valuer]

import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { Valuer } from "@/types/valuer/model";
import { LoginProps } from "@/types/user/auth_hooks";
import AuthLocalStorage from "@/services/AuthLocalStorage";

export const useLogin = () => {
  const axios = useAxios();
  const { setValuer } = useValuerAuth();

  const login = async ({
    email,
    password,
  }: LoginProps): Promise<
    boolean | { isValuerQualificationCreated: boolean }
  > => {
    const response = await axios.post<{ valuer: Valuer }>(
      "/valuer/auth/login",
      { email, password }
    );

    if (response) {
      const { valuer } = response.data;

      // Set user{...data} for context
      setValuer(valuer);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ userData: valuer, role: "valuer" });

      return {
        isValuerQualificationCreated: valuer.isValuerQualificationCreated,
      };
    }

    return false;
  };

  return { login };
};
