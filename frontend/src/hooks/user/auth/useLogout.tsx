import { useUserAuth } from "@/contexts/UserAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import AuthLocalStorage from "@/utils/AuthLocalStorage";

export const useLogout = () => {
  const axios = useAxios();
  const { setUser } = useUserAuth();

  const logout = async () => {
    const response = await axios.post<void>("/user/auth/logout");

    if (response) {
      // Clear user{...data} from context
      setUser(null);

      // Remove user{...data} & role in local storage
      AuthLocalStorage.remove();

      return true;
    }
    return false;
  };

  return { logout };
};
