// [r: User]

import { useUserStore } from "@/stores/userStore";
import { useAxiosStore } from "@/stores/axiosStore";
import { User } from "@/types/models/user.types";
import { UsernameChangeProps } from "@/types/user/profile_hooks";
import { useMutation } from "@tanstack/react-query";

export const useUsernameChange = () => {
  const { axios } = useAxiosStore();
  const { setUser } = useUserStore();

  // ⚡
  const usernameChange = async ({
    username,
  }: UsernameChangeProps): Promise<boolean> => {
    const response = await axios.put<{ user: User }>("/user/profile/username", {
      username,
    });
    if (!response) return false;

    const { user } = response.data;

    // Set user{...data}
    setUser(user);

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: usernameChange });

  return {
    usernameChange: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
