// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { useValuerStore } from "@/stores/valuerStore";
import { useMutation } from "@tanstack/react-query";
import LocalStorageService from "@/services/LocalStorageService";

export const useLogout = () => {
  const { axios } = useAxiosStore();
  const { setValuer } = useValuerStore();

  // ⚡ Logout
  const logout = async (): Promise<boolean> => {
    const response = await axios.post<void>("/valuer/auth/logout");
    if (!response) return false;

    // Clear user{...data}
    setValuer(null);

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
