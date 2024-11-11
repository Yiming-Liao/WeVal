// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import { LoginProps } from "@/types/admin/auth_hooks";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Admin } from "@/types/admin/model";
import AuthLocalStorage from "@/services/AuthLocalStorage";

export const useLogin = () => {
  const axios = useAxios();
  const { setAdmin } = useAdminAuth();

  const login = async ({
    email,
    password,
  }: LoginProps): Promise<boolean | { uuid: string }> => {
    const response = await axios.post<{ admin: Admin }>("/admin/auth/login", {
      email,
      password,
    });

    if (response) {
      const { admin } = response.data;

      // Set user{...data} for context
      setAdmin(admin);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ userData: admin, role: "admin" });

      return { uuid: admin.uuid! };
    }

    return false;
  };

  return { login };
};
