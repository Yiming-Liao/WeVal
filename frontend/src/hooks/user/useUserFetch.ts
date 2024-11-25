// [r: User]

import { useAxiosStore } from "@/stores/axiosStore";
import { User } from "@/types/models/user.types";
import { useMutation } from "@tanstack/react-query";

export const useUserFetch = () => {
  const { axios } = useAxiosStore();

  // ⚡ userFetch
  const userFetch = async (): Promise<User | null> => {
    const response = await axios.get<{ user: User }>("/user/auth");
    if (!response) return null;

    const { user } = response.data;
    return user;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: userFetch });

  return {
    userFetch: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
