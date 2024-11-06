import { useUserAuth } from "@/contexts/UserAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { User } from "@/types/user/model";
import { RegisterProps } from "@/types/user/auth_hooks";
import AuthLocalStorage from "@/utils/AuthLocalStorage";

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

      // Set user{...data} for context
      setUser(user);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ user, role: "user" });

      return true;
    }

    return false;
  };

  return { register };
};
