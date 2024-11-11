// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import { QualificationRejection } from "@/types/valuer/model";

export const useStore = () => {
  const axios = useAxios();

  const store = async ({
    email,
    reason,
  }: {
    email: string;
    reason: string;
  }) => {
    const response = await axios.post<{
      qualificationRejection: QualificationRejection;
    }>(`/valuer/qualification-rejections/${email}`, { reason });

    if (response) {
      const { qualificationRejection } = response.data;
      return qualificationRejection;
    }
    return false;
  };

  return { store };
};
