import { useUserAuth } from "@/contexts/UserAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { appConfig } from "@/config/appConfig";
import { User } from "@/types/user/model";
import { UsernameChangeProps } from "@/types/user/profile_hooks";

export const useUsernameChange = () => {
  const axios = useAxios();
  const { setUser } = useUserAuth();

  const usernameChange = async ({
    username,
  }: UsernameChangeProps): Promise<boolean> => {
    const response = await axios.put<{ user: User }>("/user/profile/username", {
      username,
    });

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

  return { usernameChange };
};
