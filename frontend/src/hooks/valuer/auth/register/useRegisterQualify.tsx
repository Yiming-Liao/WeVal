// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { useValuerStore } from "@/stores/valuerStore";
import { RegisterQualifyProps } from "@/types/valuer/auth_hooks.types";
import { Valuer } from "@/types/models/valuer.types";
import { useMutation } from "@tanstack/react-query";

export const useRegisterQualify = () => {
  const { axios } = useAxiosStore();
  const { setValuer } = useValuerStore();

  // ⚡ Submit qualification information for registration
  const registerQualify = async ({
    email,
    serviceArea,
    address,
    abn,
    certificateFile,
  }: RegisterQualifyProps): Promise<boolean> => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("serviceArea", serviceArea);
    formData.append("address", address);
    formData.append("abn", abn);
    if (certificateFile) formData.append("certificateFile", certificateFile);

    const response = await axios.post<{ valuer: Valuer }>(
      "/valuer/auth/register-qualify",
      formData
    );

    if (!response) return false;

    const { valuer } = response.data;

    // Set user{...data}
    setValuer(valuer);

    return true;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: registerQualify });

  return {
    registerQualify: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
