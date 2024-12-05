// [r: Admin]

import { useAxiosStore } from "@/stores/axiosStore";
import { useAdminStore } from "@/stores/adminStore";
import { useMutation } from "@tanstack/react-query";

export const useLogout = () => {
  const { axios } = useAxiosStore();
  const { clearAdmin } = useAdminStore();

  // ⚡ Logout
  const logout = async (): Promise<boolean> => {
    const response = await axios.post<void>("/admin/auth/logout");
    if (!response) return false;

    // Clear admin{...data} & role from global store
    clearAdmin();

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: logout });

  return {
    logout: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
