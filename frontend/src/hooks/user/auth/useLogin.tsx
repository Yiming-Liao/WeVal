import { useUserAuth } from "@/contexts/UserAuthContext";
import { useAxios } from "@/contexts/AxiosContext";
import { User } from "@/types/user/model";
import { LoginProps } from "@/types/user/auth_hooks";
import AuthLocalStorage from "@/utils/AuthLocalStorage";

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

      // Set user{...data} for context
      setUser(user);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ user, role: "user" });

      return true;
    }

    return false;
  };

  return { login };
};
