// [r: Valuer]

import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { appConfig } from "@/config/appConfig";

export const useLogout = () => {
  const axios = useAxios();
  const { setValuer } = useValuerAuth();

  const logout = async () => {
    const response = await axios.post<void>("/valuer/auth/logout");

    if (response) {
      // clear valuer
      setValuer(null);

      // clear role in localStorage
      localStorage.removeItem(appConfig.USER_ROLE_KEY);
      // clear valuer{} in local storage
      localStorage.removeItem(appConfig.USER_DATA_KEY);

      return true;
    }
    return false;
  };

  return { logout };
};
