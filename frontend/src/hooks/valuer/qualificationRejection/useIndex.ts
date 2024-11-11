import { useAxios } from "@/contexts/AxiosContext";
import { QualificationRejection } from "@/types/valuer/model";

export const useIndex = () => {
  const axios = useAxios();

  const index = async ({ email }: { email: string }) => {
    const response = await axios.get<{
      qualificationRejection: QualificationRejection;
    }>(`/valuer/qualification-rejections/${email}`);

    if (response) {
      const { qualificationRejection } = response.data;
      return qualificationRejection;
    }
    return false;
  };

  return { index };
};
