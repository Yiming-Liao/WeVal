// [r: Valuer]

import { useValuerStore } from "@/stores/valuerStore";
import { useAxiosStore } from "@/stores/axiosStore";
import { UsernameChangeProps } from "@/types/user/profile_hooks";
import { Valuer } from "@/types/models/valuer.types";
import { useMutation } from "@tanstack/react-query";

export const useUsernameChange = () => {
  const { axios } = useAxiosStore();
  const { setValuer } = useValuerStore();

  // ⚡ Change username
  const usernameChange = async ({
    username,
  }: UsernameChangeProps): Promise<boolean> => {
    const response = await axios.patch<{ valuer: Valuer }>(
      "/valuer/profile/username",
      {
        username,
      }
    );
    if (!response) return false;

    const { valuer } = response.data;

    // Set valuer{...data} & role to global store
    setValuer(valuer);

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: usernameChange });

  return {
    usernameChange: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
