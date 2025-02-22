import { useAxiosStore } from "@/stores/axiosStore";
import { PhoneVerifySendProps } from "@/types/user/profile_hooks";

export const usePhoneVerifySend = () => {
  const { axios } = useAxiosStore();

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
