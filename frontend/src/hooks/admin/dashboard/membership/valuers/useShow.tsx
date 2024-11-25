// [r: Admin]

import { useAxiosStore } from "@/stores/axiosStore";
import { Valuer } from "@/types/models/valuer.types";

export const useShow = () => {
  const { axios } = useAxiosStore();

  const show = async ({ email }: { email: string }) => {
    const response = await axios.get<{ valuer: Valuer }>(
      `/admin/membership/valuers/${email}`
    );

    if (response) {
      const { valuer } = response.data;
      return valuer;
    }
    return false;
  };

  return { show };
};
