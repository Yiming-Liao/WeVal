// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import { Valuer } from "@/types/valuer/model";
import { useState } from "react";

export const useIndex = () => {
  const axios = useAxios();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const index = async () => {
    setIsLoading(true);

    const response = await axios.get<{ valuers: Valuer[] }>(
      "/admin/membership/valuers"
    );

    setIsLoading(false);

    if (response) {
      const { valuers } = response.data;
      return valuers;
    }
    return false;
  };

  return { index, isLoading };
};
