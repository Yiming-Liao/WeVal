import { useUserAuth } from "@/contexts/UserAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { appConfig } from "@/config/appConfig";

export const useLogout = () => {
  const axios = useAxios();
  const { setUser } = useUserAuth();

  const logout = async () => {
    const response = await axios.post<void>("/user/auth/logout");

    if (response) {
      // clear user
      setUser(null);

      // clear role in localStorage
      localStorage.removeItem(appConfig.USER_ROLE_KEY);
      // clear user{} in local storage
      localStorage.removeItem(appConfig.USER_DATA_KEY);

      return true;
    }
    return false;
  };

  return { logout };
};
