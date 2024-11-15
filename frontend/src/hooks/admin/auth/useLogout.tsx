// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import AuthLocalStorage from "@/services/AuthLocalStorage";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { useState } from "react";

export const useLogout = () => {
  const axios = useAxios();
  const { setAdmin } = useAdminAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const logout = async (): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.post<void>("/admin/auth/logout");

    setIsLoading(false);

    if (response) {
      // Clear user{...data} from context
      setAdmin(null);

      // Remove user{...data} & role in local storage
      AuthLocalStorage.remove();

      return true;
    }
    return false;
  };

  return { logout, isLoading };
};
