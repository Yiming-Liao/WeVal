// [r: Valuer]

import { useAxios } from "@/contexts/AxiosContext";
import { RegisterQualifyProps } from "@/types/valuer/auth_hooks";

export const useRegisterQualify = () => {
  const axios = useAxios();

  const registerQualify = async ({
    email,
    serviceArea,
    address,
    abn,
    certificateFile,
    agreement1,
    agreement2,
  }: RegisterQualifyProps): Promise<boolean> => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("serviceArea", serviceArea);
    formData.append("address", address);
    formData.append("abn", abn);
    formData.append("certificateFile", certificateFile);
    formData.append("agreement1", String(agreement1));
    formData.append("agreement2", String(agreement2));

    const response = await axios.post<void>(
      "/valuer/auth/register-qualify",
      formData
    );

    if (response) {
      return true;
    }

    return false;
  };

  return { registerQualify };
};
