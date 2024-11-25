// [r: Admin]

import { useAxiosStore } from "@/stores/axiosStore";
import { Valuer } from "@/types/models/valuer.types";

export const useApprove = () => {
  const { axios } = useAxiosStore();

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
