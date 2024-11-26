// [r: User]

import { useAxiosStore } from "@/stores/axiosStore";
import { useUserStore } from "@/stores/userStore";
import { useMutation } from "@tanstack/react-query";

export const useLogout = () => {
  const { axios } = useAxiosStore();
  const { setUser } = useUserStore();

  // ⚡ Logout
  const logout = async (): Promise<boolean> => {
    const response = await axios.post<void>("/user/auth/logout");
    if (!response) return false;

    // Clear user{...data}
    setUser(null);

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: logout });

  return {
    logout: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
