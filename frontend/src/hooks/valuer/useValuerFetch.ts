// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { Valuer } from "@/types/models/valuer.types";
import { useMutation } from "@tanstack/react-query";

export const useValuerFetch = () => {
  const { axios } = useAxiosStore();

  // ⚡ valuerFetch
  const valuerFetch = async (): Promise<Valuer | null> => {
    const response = await axios.get<{ valuer: Valuer }>("/valuer/auth");
    if (!response) return null;

    const { valuer } = response.data;
    return valuer;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: valuerFetch });

  return {
    valuerFetch: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
