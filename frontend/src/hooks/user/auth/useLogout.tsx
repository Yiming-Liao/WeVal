// [r: User]

import { useAxiosStore } from "@/stores/axiosStore";
import { useUserStore } from "@/stores/userStore";
import { useMutation } from "@tanstack/react-query";

export const useLogout = () => {
  const { axios } = useAxiosStore();
  const { clearUser } = useUserStore();

  // ⚡ Logout
  const logout = async (): Promise<boolean> => {
    const response = await axios.post<void>("/user/auth/logout");
    if (!response) return false;

    // Clear user{...data} & role from global store
    clearUser();

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: logout });

  return {
    logout: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
