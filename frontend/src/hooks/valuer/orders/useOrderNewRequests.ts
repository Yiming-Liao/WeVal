// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { Order } from "@/types/models/order.types";
import { useQuery } from "@tanstack/react-query";

export const useOrderNewRequests = () => {
  const { axios } = useAxiosStore();

  // ⚡ Order: index
  const fetcher = async (): Promise<FetcherResponse> => {
    const response = await axios.get<FetcherResponse>(
      `/valuer/orders/new-requests`
    );

    return {
      orders: response.data.orders,
      count: response.data.count,
    };
  };

  // 🌀 React Query
  const { data, isPending } = useQuery<FetcherResponse>({
    queryKey: [`valuer:orders/new-requests`],
    queryFn: fetcher,
  });

  return {
    orders: data?.orders || [],
    count: data?.count || 0,
    isLoading: isPending,
  };
};

// Types
interface FetcherResponse {
  orders: Order[];
  count: number;
}
