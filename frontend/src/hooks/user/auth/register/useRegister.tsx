// [r: User]

import { useUserStore } from "@/stores/userStore";
import { useAxiosStore } from "@/stores/axiosStore";
import { User } from "@/types/models/user.types";
import { RegisterProps } from "@/types/user/auth_hooks.types";
import { useMutation } from "@tanstack/react-query";
import LocalStorageService from "@/services/LocalStorageService";
import { useRoleStore } from "@/stores/roleStore";

export const useRegister = () => {
  const { axios } = useAxiosStore();
  const { setUser } = useUserStore();
  const { setRole } = useRoleStore();

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

    // Set role & set in local storage
    setRole("user");
    LocalStorageService.setRole({ role: "user" });

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: register });

  return { register: mutation.mutateAsync, isLoading: mutation.isPending };
};
