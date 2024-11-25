// [r: Admin]

import { useAxiosStore } from "@/stores/axiosStore";
import { PasswordChangeProps } from "@/types/admin/auth_hooks.types";
import { useMutation } from "@tanstack/react-query";

export const usePasswordChange = () => {
  const { axios } = useAxiosStore();

  // ⚡ passwordChange
  const passwordChange = async ({
    password,
    newPassword,
    newPasswordConfirm,
  }: PasswordChangeProps): Promise<boolean> => {
    const response = await axios.put<void>("/admin/auth/password-change", {
      password,
      newPassword,
      newPasswordConfirm,
    });
    if (!response) return false;

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: passwordChange });

  return {
    passwordChange: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
