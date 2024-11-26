// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { useMutation } from "@tanstack/react-query";
import { RegisterEmailVerifyProps } from "@/types/valuer/auth_hooks.types";

// ⚡ Verify SMS code for registration
export const useRegisterEmailVerify = () => {
  const { axios } = useAxiosStore();

  const registerEmailVerify = async ({
    email,
    emailVerifyCode,
  }: RegisterEmailVerifyProps): Promise<boolean> => {
    const response = await axios.post<void>(
      "/valuer/auth/register-email-verify",
      { email, emailVerifyCode }
    );
    if (!response) return false;

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: registerEmailVerify });

  return {
    registerEmailVerify: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
