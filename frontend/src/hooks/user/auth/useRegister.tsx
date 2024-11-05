import { useUserAuth } from "@/contexts/UserAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { appConfig } from "@/config/appConfig";
import { User } from "@/types/user/model";
import { RegisterProps } from "@/types/user/auth_hooks";

export const useRegister = () => {
  const axios = useAxios();
  const { setUser } = useUserAuth();

  const register = async ({
    email,
    username,
    password,
    passwordConfirm,
  }: RegisterProps): Promise<boolean> => {
    const response = await axios.post<{ user: User }>("/user/auth/register", {
      email,
      username,
      password,
      passwordConfirm,
    });

    if (response) {
      const { user } = response.data;

      // set role in localStorage
      localStorage.setItem(appConfig.USER_ROLE_KEY, "user");

      // set user
      setUser(user);

      // set user{} in localStorage
      localStorage.setItem(appConfig.USER_DATA_KEY, JSON.stringify(user));

      return true;
    }

    return false;
  };

  return { register };
};
