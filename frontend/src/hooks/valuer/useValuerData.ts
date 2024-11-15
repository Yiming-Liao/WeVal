// [r: Valuer]

import { useAxios } from "@/contexts/AxiosContext";
import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import AuthLocalStorage from "@/services/AuthLocalStorage";
import { Valuer } from "@/types/valuer/model";

export const useValuerData = () => {
  const axios = useAxios();
  const { setValuer } = useValuerAuth();

  const valuerData = async (): Promise<Valuer | boolean> => {
    const response = await axios.get<{ valuer: Valuer }>("/valuer");

    if (response) {
      const { valuer } = response.data;

      // Set user{...data} for context
      setValuer(valuer);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ userData: valuer, role: "valuer" });

      return valuer;
    }

    return false;
  };

  return { valuerData };
};
