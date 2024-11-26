// [r: User]

import { useUserStore } from "@/stores/userStore";
import { useAxiosStore } from "@/stores/axiosStore";
import { User } from "@/types/models/user.types";
import { RegisterProps } from "@/types/user/auth_hooks.types";
import AuthLocalStorage from "@/services/LocalStorageService";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  const { axios } = useAxiosStore();
  const { setUser } = useUserStore();

  // ⚡ Register
  const register = async ({
    email,
    username,
    password,
    passwordConfirm,
  }: RegisterProps): Promise<boolean> => {
    const response = await axios.post<{ user: User }>("/user/auth/register", {
      email,
      username,
      password,
      passwordConfirm,
    });
    if (!response) return false;

    const { user } = response.data;

    // Set user{...data}
    setUser(user);

    AuthLocalStorage.setRole({ role: "valuer" });

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: register });

  return { register: mutation.mutateAsync, isLoading: mutation.isPending };
};
