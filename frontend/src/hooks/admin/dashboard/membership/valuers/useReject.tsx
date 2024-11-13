// [r: Admin]

import { useAxios } from "@/contexts/AxiosContext";
import { QualificationRejection } from "@/types/valuer/model";

export const useReject = () => {
  const axios = useAxios();

  const reject = async ({
    email,
    reason,
  }: {
    email: string;
    reason: string;
  }) => {
    const response = await axios.post<{
      rejectionReason: QualificationRejection;
    }>(`/admin/membership/valuers/${email}/valuer-rejection-reasons`, {
      reason,
    });

    if (response) {
      const { rejectionReason } = response.data;
      return rejectionReason;
    }
    return false;
  };

  return { reject };
};
