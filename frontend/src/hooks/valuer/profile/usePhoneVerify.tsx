// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { PhoneVerifyProps } from "@/types/user/profile_hooks";
import { useMutation } from "@tanstack/react-query";
import { Valuer } from "@/types/models/valuer.types";
import { useValuerStore } from "@/stores/valuerStore";

export const usePhoneVerify = () => {
  const { axios } = useAxiosStore();
  const { setValuer } = useValuerStore();

  // ⚡ Verify phone number
  const phoneVerify = async ({
    phone,
    phoneVerifyCode,
  }: PhoneVerifyProps): Promise<boolean> => {
    const response = await axios.post<{ valuer: Valuer }>(
      "/valuer/profile/phone-verify",
      {
        phone,
        phoneVerifyCode,
      }
    );
    if (!response) return false;

    const { valuer } = response.data;

    // Set valuer{...data} & role to global store
    setValuer(valuer);

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: phoneVerify });

  return {
    phoneVerify: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
