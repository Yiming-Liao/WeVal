// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { useMutation } from "@tanstack/react-query";
import { RegisterEmailVerifySendProps } from "@/types/user/auth_hooks.types";

export const useRegisterEmailVerifySend = () => {
  const { axios } = useAxiosStore();

  // ⚡ Send verification email for registration
  const registerEmailVerifySend = async ({
    email,
  }: RegisterEmailVerifySendProps): Promise<boolean> => {
    const response = await axios.post<void>(
      "/valuer/auth/register-email-verify-send",
      { email }
    );
    if (!response) return false;

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: registerEmailVerifySend });

  return {
    registerEmailVerifySend: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
