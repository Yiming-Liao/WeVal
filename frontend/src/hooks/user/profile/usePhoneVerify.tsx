import { envConfig } from "@/config/envConfig";
import { useUserStore } from "@/stores/userStore";
import { useAxiosStore } from "@/stores/axiosStore";
import { User } from "@/types/user/model";
import { PhoneVerifyProps } from "@/types/user/profile_hooks";

export const usePhoneVerify = () => {
  const { axios } = useAxiosStore();
  const { setUser } = useUserStore();

  const phoneVerify = async ({
    phone,
    phoneVerifyCode,
  }: PhoneVerifyProps): Promise<boolean> => {
    const response = await axios.post<{ user: User }>(
      "/user/profile/phone-verify",
      {
        phone,
        phoneVerifyCode,
      }
    );

    if (response) {
      const { user } = response.data;

      // set user
      setUser(user);

      // set user{} in localStorage
      localStorage.setItem(envConfig.USER_DATA_KEY, JSON.stringify(user));

      return true;
    }

    return false;
  };

  return { phoneVerify };
};
