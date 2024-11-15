import { useUserAuth } from "@/contexts/UserAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import AuthLocalStorage from "@/services/AuthLocalStorage";
import { useState } from "react";

export const useLogout = () => {
  const axios = useAxios();
  const { setUser } = useUserAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const logout = async (): Promise<boolean> => {
    setIsLoading(true);

    const response = await axios.post<void>("/user/auth/logout");

    setIsLoading(false);

    if (response) {
      // Clear user{...data} from context
      setUser(null);

      // Remove user{...data} & role in local storage
      AuthLocalStorage.remove();

      return true;
    }
    return false;
  };

  return { logout, isLoading };
};
