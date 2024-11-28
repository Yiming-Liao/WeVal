// [r: User]

import { useAxiosStore } from "@/stores/axiosStore";
import { Order } from "@/types/models/order.types";
import { useQuery } from "@tanstack/react-query";

export const useOrderIndex = () => {
  const { axios } = useAxiosStore();

  // ⚡ Order: index
  const fetcher = async (): Promise<Order[]> => {
    const response = await axios.get<{ orders: Order[] }>("/user/orders");
    return response.data.orders;
  };

  // 🌀 React Query
  const { data: orders = [], isPending } = useQuery({
    queryKey: ["user:orders"],
    queryFn: fetcher,
  });

  return {
    orders,
    isLoading: isPending,
  };
};
