// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { LoginProps } from "@/types/valuer/auth_hooks.types";
import { useValuerStore } from "@/stores/valuerStore";
import { Valuer } from "@/types/models/valuer.types";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { axios } = useAxiosStore();
  const { setValuer } = useValuerStore();

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

    // Set valuer{...data} & role to global store
    setValuer(valuer);

    return valuer;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: login });

  return {
    login: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
