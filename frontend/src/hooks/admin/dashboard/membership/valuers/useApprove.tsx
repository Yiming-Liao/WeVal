// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import { Valuer } from "@/types/valuer/model";

export const useApprove = () => {
  const axios = useAxios();

  const approve = async ({ email }: { email: string }) => {
    const response = await axios.patch<{ valuer: Valuer }>(
      `/admin/membership/valuers/${email}/approve`
    );

    if (response) {
      const { valuer } = response.data;
      return valuer;
    }
    return false;
  };

  return { approve };
};
