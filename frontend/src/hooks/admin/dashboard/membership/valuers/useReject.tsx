// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import { Valuer } from "@/types/valuer/model";

export const useReject = () => {
  const axios = useAxios();

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
