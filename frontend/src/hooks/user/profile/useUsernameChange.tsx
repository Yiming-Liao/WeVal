import { useAuth } from "@/contexts/AuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { appConfig } from "@/config/appConfig";
import { User } from "@/types/user/user_model";
import { UsernameChangeProps } from "@/types/user/user_profile_hooks";

export const useUsernameChange = () => {
  const axios = useAxios();
  const { setUser } = useAuth();

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
