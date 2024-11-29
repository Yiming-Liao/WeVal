// [r: Admin]

import { useAxiosStore } from "@/stores/axiosStore";
import { LoginProps } from "@/types/admin/auth_hooks.types";
import { useAdminStore } from "@/stores/adminStore";
import { Admin } from "@/types/models/admin.types";
import { useMutation } from "@tanstack/react-query";
import LocalStorageService from "@/services/LocalStorageService";
import { useRoleStore } from "@/stores/roleStore";

export const useLogin = () => {
  const { axios } = useAxiosStore();
  const { setAdmin, setIsLoading } = useAdminStore();
  const { setRole } = useRoleStore();

  // ⚡ Login
  const login = async ({ email, password }: LoginProps): Promise<boolean> => {
    const response = await axios.post<{ admin: Admin }>("/admin/auth/login", {
      email,
      password,
    });
    if (!response) return false;

    const { admin } = response.data;
    // Set user{...data}
    setAdmin(admin);

    // Set role & set in local storage
    setRole("admin");
    LocalStorageService.setRole({ role: "admin" });

    setIsLoading(false);

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: login });

  return {
    login: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
