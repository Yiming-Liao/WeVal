import { useAuth } from "@/contexts/AuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { appConfig } from "@/config/appConfig";

export const useLogout = () => {
  const axios = useAxios();
  const { setUser } = useAuth();

  const logout = async () => {
    const response = await axios.post<void>("/user/auth/logout");

    if (response) {
      // clear user
      setUser(null);

      // clear user{} in local storage
      localStorage.removeItem(appConfig.USER_DATA_KEY);

      return true;
    }
    return false;
  };

  return { logout };
};
