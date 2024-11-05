// [r: Valuer]

import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { appConfig } from "@/config/appConfig";
import { Valuer } from "@/types/valuer/model";
import { RegisterProps } from "@/types/valuer/auth_hooks";

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

      // set user
      setValuer(valuer);

      // set role in local storage
      localStorage.setItem(appConfig.USER_ROLE_KEY, "valuer");
      // set valuer{} in local storage
      localStorage.setItem(appConfig.USER_DATA_KEY, JSON.stringify(valuer));

      return true;
    }

    return false;
  };

  return { register };
};
