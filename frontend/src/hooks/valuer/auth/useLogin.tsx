// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { LoginProps } from "@/types/valuer/auth_hooks.types";
import { useValuerStore } from "@/stores/valuerStore";
import { Valuer } from "@/types/models/valuer.types";
import { useMutation } from "@tanstack/react-query";
import LocalStorageService from "@/services/LocalStorageService";

export const useLogin = () => {
  const { axios } = useAxiosStore();
  const { setValuer, setIsLoading } = useValuerStore();

  // ⚡ Login
  const login = async ({
    email,
    password,
  }: LoginProps): Promise<Valuer | boolean> => {
    const response = await axios.post<{ valuer: Valuer }>(
      "/valuer/auth/login",
      { email, password }
    );
    if (!response) return false;

    const { valuer } = response.data;
    // Set user{...data}
    setValuer(valuer);

    LocalStorageService.setRole({ role: "valuer" });

    setIsLoading(false);

    return valuer;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: login });

  return {
    login: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
