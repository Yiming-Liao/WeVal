import { useAxios } from "@/contexts/AxiosContext";
import { PhoneVerifySendProps } from "@/types/user/user_profile_hooks";

export const usePhoneVerifySend = () => {
  const axios = useAxios();

  const phoneVerifySend = async ({
    phone,
  }: PhoneVerifySendProps): Promise<boolean> => {
    const response = await axios.post<void>("/user/profile/phone-verify-send", {
      phone,
    });

    if (response) {
      return true;
    }

    return false;
  };

  return { phoneVerifySend };
};
