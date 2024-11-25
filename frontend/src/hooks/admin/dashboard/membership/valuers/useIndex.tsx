// [r: Admin]

import { useAxiosStore } from "@/stores/axiosStore";
import { Valuer } from "@/types/models/valuer.types";
import { useState } from "react";

export const useIndex = () => {
  const { axios } = useAxiosStore();
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
