// [r: User]

import { useAxiosStore } from "@/stores/axiosStore";
import { Order, StatusCounts } from "@/types/models/order.types";
import { useQuery } from "@tanstack/react-query";

export const useOrderIndex = ({ status }: { status: string | null }) => {
  const { axios } = useAxiosStore();

  // ⚡ Order: index
  const fetcher = async (): Promise<FetcherResponse> => {
    const response = await axios.get<FetcherResponse>(
      `/user/orders?status=${status}`
    );

    return {
      orders: response.data.orders,
      statusCounts: response.data.statusCounts,
    };
  };

  // 🌀 React Query
  const { data, isPending } = useQuery<FetcherResponse>({
    queryKey: [`user:orders?status=${status}`],
    queryFn: fetcher,
  });

  return {
    orders: data?.orders || [],
    statusCounts: data?.statusCounts || [],
    isLoading: isPending,
  };
};

// Types
interface FetcherResponse {
  orders: Order[];
  statusCounts: StatusCounts[];
}
