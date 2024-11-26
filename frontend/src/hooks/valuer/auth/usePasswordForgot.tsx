// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { useMutation } from "@tanstack/react-query";
import { PasswordForgotProps } from "@/types/valuer/auth_hooks.types";

export const usePasswordForgot = () => {
  const { axios } = useAxiosStore();

  // ⚡ Forgot password
  const passwordForgot = async ({
    email,
  }: PasswordForgotProps): Promise<boolean> => {
    const response = await axios.post<void>("/valuer/auth/password-forgot", {
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
