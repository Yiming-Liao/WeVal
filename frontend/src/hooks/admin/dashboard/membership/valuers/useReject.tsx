// [r: Admin]

import { useAxiosStore } from "@/stores/axiosStore";
import { Valuer } from "@/types/models/valuer.types";

export const useReject = () => {
  const { axios } = useAxiosStore();

  const reject = async ({
    email,
    message,
  }: {
    email: string;
    message: string;
  }) => {
    const response = await axios.patch<{
      valuer: Valuer;
    }>(`/admin/membership/valuers/${email}/reject`, {
      message,
    });

    if (response) {
      return true;
    }
    return false;
  };

  return { reject };
};
