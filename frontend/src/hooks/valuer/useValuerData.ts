// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { useValuerStore } from "@/stores/valuerStore";
import AuthLocalStorage from "@/services/AuthLocalStorage";
import { Valuer } from "@/types/models/valuer.types";

export const useValuerData = () => {
  const { axios } = useAxiosStore();
  const { setValuer } = useValuerStore();

  const valuerData = async (): Promise<Valuer | boolean> => {
    const response = await axios.get<{ valuer: Valuer }>("/valuer");

    if (response) {
      const { valuer } = response.data;

      // Set user{...data}
      setValuer(valuer);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ userData: valuer, role: "valuer" });

      return valuer;
    }

    return false;
  };

  return { valuerData };
};
