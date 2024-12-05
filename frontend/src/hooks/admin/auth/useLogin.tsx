// [r: Admin]

import { useAxiosStore } from "@/stores/axiosStore";
import { LoginProps } from "@/types/admin/auth_hooks.types";
import { useAdminStore } from "@/stores/adminStore";
import { Admin } from "@/types/models/admin.types";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { axios } = useAxiosStore();
  const { setAdmin } = useAdminStore();

  // ⚡ Login
  const login = async ({ email, password }: LoginProps): Promise<boolean> => {
    const response = await axios.post<{ admin: Admin }>("/admin/auth/login", {
      email,
      password,
    });
    if (!response) return false;

    const { admin } = response.data;

    // Set admin{...data} & role to global store
    setAdmin(admin);

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: login });

  return {
    login: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
