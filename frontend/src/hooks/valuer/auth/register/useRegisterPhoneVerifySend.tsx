// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { useMutation } from "@tanstack/react-query";
import { RegisterPhoneVerifySendProps } from "@/types/valuer/auth_hooks.types";

export const useRegisterPhoneVerifySend = () => {
  const { axios } = useAxiosStore();

  // ⚡ Send verification SMS for registration
  const registerPhoneVerifySend = async ({
    email,
    phone,
  }: RegisterPhoneVerifySendProps): Promise<boolean> => {
    const response = await axios.post<void>(
      "/valuer/auth/register-phone-verify-send",
      { email, phone }
    );
    if (!response) return false;

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: registerPhoneVerifySend });

  return {
    registerPhoneVerifySend: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
