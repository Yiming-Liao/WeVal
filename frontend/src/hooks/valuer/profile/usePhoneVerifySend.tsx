import { useAxiosStore } from "@/stores/axiosStore";
import { PhoneVerifySendProps } from "@/types/valuer/profile_hooks";

export const usePhoneVerifySend = () => {
  const { axios } = useAxiosStore();

  const phoneVerifySend = async ({
    phone,
  }: PhoneVerifySendProps): Promise<boolean> => {
    const response = await axios.post<void>(
      "/valuer/profile/phone-verify-send",
      {
        phone,
      }
    );

    if (response) {
      return true;
    }

    return false;
  };

  return { phoneVerifySend };
};
