// [r: User]

import { useAxiosStore } from "@/stores/axiosStore";
import { LoginProps } from "@/types/user/auth_hooks.types";
import { User } from "@/types/models/user.types";
import { useUserStore } from "@/stores/userStore";
import { useMutation } from "@tanstack/react-query";
import LocalStorageService from "@/services/LocalStorageService";

export const useLogin = () => {
  const { axios } = useAxiosStore();
  const { setUser, setIsLoading } = useUserStore();

  // ⚡ Login
  const login = async ({ email, password }: LoginProps): Promise<boolean> => {
    const response = await axios.post<{ user: User }>("/user/auth/login", {
      email,
      password,
    });
    if (!response) return false;

    const { user } = response.data;
    // Set user{...data}
    setUser(user);

    LocalStorageService.removeRole();

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
