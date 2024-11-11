// [r: Valuer]

import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import AuthLocalStorage from "@/services/AuthLocalStorage";

export const useLogout = () => {
  const axios = useAxios();
  const { setValuer } = useValuerAuth();

  const logout = async () => {
    const response = await axios.post<void>("/valuer/auth/logout");

    if (response) {
      // Clear user{...data} from context
      setValuer(null);

      // Remove user{...data} & role in local storage
      AuthLocalStorage.remove();

      return true;
    }
    return false;
  };

  return { logout };
};
