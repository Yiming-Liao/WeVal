// [r: Valuer]

/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useAxios } from "@/contexts/AxiosContext";
import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import AuthLocalStorage from "@/services/AuthLocalStorage";
import { RegisterQualifyProps } from "@/types/valuer/auth_hooks";
import { Valuer } from "@/types/valuer/model";
import { useState } from "react";

export const useRegisterQualify = () => {
  const axios = useAxios();
  const { setValuer } = useValuerAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerQualify = async ({
    email,
    serviceArea,
    address,
    abn,
    certificateFile,
  }: RegisterQualifyProps): Promise<boolean> => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("serviceArea", serviceArea);
    formData.append("address", address);
    formData.append("abn", abn);
    certificateFile && formData.append("certificateFile", certificateFile);

    const response = await axios.post<{ valuer: Valuer }>(
      "/valuer/auth/register-qualify",
      formData
    );

    setIsLoading(false);

    if (response) {
      const { valuer } = response.data;

      // Set user{...data} for context
      setValuer(valuer);

      // Set user{...data} & role in local storage
      AuthLocalStorage.set({ userData: valuer, role: "valuer" });

      return true;
    }

    return false;
  };

  return { registerQualify, isLoading };
};
