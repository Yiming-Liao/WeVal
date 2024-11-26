// [r: Valuer]

import { useValuerStore } from "@/stores/valuerStore";
import { useAxiosStore } from "@/stores/axiosStore";
import { Valuer } from "@/types/models/valuer.types";
import { RegisterProps } from "@/types/valuer/auth_hooks.types";
import AuthLocalStorage from "@/services/LocalStorageService";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  const { axios } = useAxiosStore();
  const { setValuer } = useValuerStore();

  // ⚡ Register
  const register = async ({
    email,
    username,
    phone,
    phoneVerifyCode,
    password,
    passwordConfirm,
  }: RegisterProps): Promise<boolean> => {
    const response = await axios.post<{ valuer: Valuer }>(
      "/valuer/auth/register",
      {
        email,
        username,
        phone,
        phoneVerifyCode,
        password,
        passwordConfirm,
      }
    );
    if (!response) return false;

    const { valuer } = response.data;

    // Set user{...data}
    setValuer(valuer);

    AuthLocalStorage.setRole({ role: "valuer" });

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: register });

  return { register: mutation.mutateAsync, isLoading: mutation.isPending };
};
