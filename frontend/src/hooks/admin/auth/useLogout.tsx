// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import AuthLocalStorage from "@/services/AuthLocalStorage";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

export const useLogout = () => {
  const axios = useAxios();
  const { setAdmin } = useAdminAuth();

  const logout = async () => {
    const response = await axios.post<void>("/admin/auth/logout");

    if (response) {
      // Clear user{...data} from context
      setAdmin(null);

      // Remove user{...data} & role in local storage
      AuthLocalStorage.remove();

      return true;
    }
    return false;
  };

  return { logout };
};
