// [r: Valuer]

import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import AuthLocalStorage from "@/services/AuthLocalStorage";
import { useState } from "react";

export const useLogout = () => {
  const axios = useAxios();
  const { setValuer } = useValuerAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const logout = async (): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.post<void>("/valuer/auth/logout");

    setIsLoading(false);

    if (response) {
      // Clear user{...data} from context
      setValuer(null);

      // Remove user{...data} & role in local storage
      AuthLocalStorage.remove();

      return true;
    }
    return false;
  };

  return { logout, isLoading };
};
