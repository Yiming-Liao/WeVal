// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { PasswordResetProps } from "@/types/valuer/auth_hooks.types";
import { useMutation } from "@tanstack/react-query";

export const usePasswordReset = () => {
  const { axios } = useAxiosStore();

  // ⚡ Reset password
  const passwordReset = async ({
    passwordResetToken,
    password,
    passwordConfirm,
  }: PasswordResetProps): Promise<boolean> => {
    const response = await axios.post<void>("/valuer/auth/password-reset", {
      passwordResetToken,
      password,
      passwordConfirm,
    });
    if (!response) return false;

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: passwordReset });

  return {
    passwordReset: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
