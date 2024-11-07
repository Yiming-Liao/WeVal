// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import { Valuer } from "@/types/valuer/model";

export const useIndex = () => {
  const axios = useAxios();

  const index = async () => {
    const response = await axios.get<{ valuers: Valuer[] }>(
      "/admin/membership/index"
    );

    if (response) {
      const { valuers } = response.data;
      return valuers;
    }
    return false;
  };

  return { index };
};
