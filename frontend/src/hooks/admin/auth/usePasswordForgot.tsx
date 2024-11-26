// [r: Admin]

import { useAxiosStore } from "@/stores/axiosStore";
import { PasswordForgotProps } from "@/types/admin/auth_hooks.types";
import { useMutation } from "@tanstack/react-query";

export const usePasswordForgot = () => {
  const { axios } = useAxiosStore();

  // ⚡ Forgot password
  const passwordForgot = async ({
    email,
  }: PasswordForgotProps): Promise<boolean> => {
    const response = await axios.post<void>("/admin/auth/password-forgot", {
      email,
    });
    if (!response) return false;

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: passwordForgot });

  return {
    passwordForgot: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
