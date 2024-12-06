import { useAxiosStore } from "@/stores/axiosStore";
import { PhoneVerifySendProps } from "@/types/valuer/profile_hooks";
import { useMutation } from "@tanstack/react-query";

export const usePhoneVerifySend = () => {
  const { axios } = useAxiosStore();

  // ⚡ Send verification SMS
  const phoneVerifySend = async ({
    phone,
  }: PhoneVerifySendProps): Promise<boolean> => {
    const response = await axios.post<void>(
      "/valuer/profile/phone-verify-send",
      {
        phone,
      }
    );
    if (!response) return false;

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: phoneVerifySend });

  return {
    phoneVerifySend: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
