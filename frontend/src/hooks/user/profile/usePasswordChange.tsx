import { useAxiosStore } from "@/stores/axiosStore";
import { PasswordChangeProps } from "@/types/user/profile_hooks";

export const usePasswordChange = () => {
  const { axios } = useAxiosStore();

  const passwordChange = async ({
    password,
    newPassword,
    newPasswordConfirm,
  }: PasswordChangeProps): Promise<boolean> => {
    const response = await axios.put<void>("/user/profile/password", {
      password,
      newPassword,
      newPasswordConfirm,
    });

    if (response) {
      return true;
    }

    return false;
  };

  return { passwordChange };
};
