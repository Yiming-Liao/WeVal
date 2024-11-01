import { appConfig } from "@/config/appConfig";
import { useAuth } from "@/contexts/AuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { User } from "@/types/user/user_model";
import { PhoneVerifyProps } from "@/types/user/user_profile_hooks";

export const usePhoneVerify = () => {
  const axios = useAxios();
  const { setUser } = useAuth();

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
      localStorage.setItem(appConfig.USER_DATA_KEY, JSON.stringify(user));

      return true;
    }

    return false;
  };

  return { phoneVerify };
};
