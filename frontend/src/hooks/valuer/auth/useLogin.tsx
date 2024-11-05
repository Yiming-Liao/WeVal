import { useUserAuth } from "@/contexts/UserAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { appConfig } from "@/config/appConfig";
import { User } from "@/types/user/model";
import { LoginProps } from "@/types/user/auth_hooks";

export const useLogin = () => {
  const axios = useAxios();
  const { setUser } = useUserAuth();

  const login = async ({ email, password }: LoginProps): Promise<boolean> => {
    const response = await axios.post<{ user: User }>("/user/auth/login", {
      email,
      password,
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

  return { login };
};
