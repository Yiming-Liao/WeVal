// [r: Valuer]

import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { Valuer } from "@/types/valuer/model";
import { RegisterProps } from "@/types/valuer/auth_hooks";
import AuthLocalStorage from "@/utils/AuthLocalStorage";

export const useRegister = () => {
  const axios = useAxios();
  const { setValuer } = useValuerAuth();

  const register = async ({
    email,
    username,
    phone,
    phoneVerifyCode,
    password,
    passwordConfirm,
  }: RegisterProps): Promise<boolean> => {
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

    if (response) {
      const { valuer } = response.data;

      // Set user{...data} for context
      setValuer(valuer);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ user: valuer, role: "valuer" });

      return true;
    }

    return false;
  };

  return { register };
};
