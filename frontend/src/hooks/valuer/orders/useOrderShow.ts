// [r: Valuer]

import { useAxiosStore } from "@/stores/axiosStore";
import { Order } from "@/types/models/order.types";
import { useQuery } from "@tanstack/react-query";

export const useOrderShow = ({ id }: { id: string }) => {
  const { axios } = useAxiosStore();

  // ⚡ Order: show
  const fetcher = async (): Promise<Order> => {
    const response = await axios.get<{ order: Order }>(`/valuer/orders/${id}`);
    return response.data.order;
  };

  // 🌀 React Query
  const { data: order, isPending } = useQuery({
    queryKey: [`valuer:order/${id}`],
    queryFn: fetcher,
  });

  return {
    order,
    isLoading: isPending,
  };
};
