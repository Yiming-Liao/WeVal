// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { PasswordChangeProps } from "@/types/valuer/profile_hooks";
import { useMutation } from "@tanstack/react-query";

export const usePasswordChange = () => {
  const { axios } = useAxiosStore();

  // ⚡ Change password
  const passwordChange = async ({
    password,
    newPassword,
    newPasswordConfirm,
  }: PasswordChangeProps): Promise<boolean> => {
    const response = await axios.patch<void>("/valuer/profile/password", {
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
