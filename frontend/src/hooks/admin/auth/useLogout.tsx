// [r: Admin]

import { useAxiosStore } from "@/stores/axiosStore";
import { useAdminStore } from "@/stores/adminStore";
import { useMutation } from "@tanstack/react-query";
import LocalStorageService from "@/services/LocalStorageService";
import { useRoleStore } from "@/stores/roleStore";

export const useLogout = () => {
  const { axios } = useAxiosStore();
  const { setAdmin } = useAdminStore();
  const { setRole } = useRoleStore();

  // ⚡ Logout
  const logout = async (): Promise<boolean> => {
    const response = await axios.post<void>("/admin/auth/logout");
    if (!response) return false;

    // Clear user{...data}
    setAdmin(null);

    // Clear role & remove from local storage
    setRole("");
    LocalStorageService.removeRole();

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: logout });

  return {
    logout: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
