// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import { Valuer } from "@/types/valuer/model";

export const useShow = () => {
  const axios = useAxios();

  const show = async ({ email }: { email: string }) => {
    const response = await axios.get<{ valuer: Valuer }>(
      `/admin/membership/valuer/show/${email}`
    );

    if (response) {
      const { valuer } = response.data;
      return valuer;
    }
    return false;
  };

  return { show };
};
