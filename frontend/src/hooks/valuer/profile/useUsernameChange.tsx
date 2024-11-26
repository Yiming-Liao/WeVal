import { useUserStore } from "@/stores/userStore";
import { useAxiosStore } from "@/stores/axiosStore";
// import { envConfig } from "@/config/envConfig";
import { User } from "@/types/models/user.types";
import { UsernameChangeProps } from "@/types/user/profile_hooks";

export const useUsernameChange = () => {
  const { axios } = useAxiosStore();
  const { setUser } = useUserStore();

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

      // // set user{} in localStorage
      // localStorage.setItem(envConfig.USER_DATA_KEY, JSON.stringify(user));

      return true;
    }

    return false;
  };

  return { usernameChange };
};
