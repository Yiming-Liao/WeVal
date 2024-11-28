// [r: User]

import { useAxiosStore } from "@/stores/axiosStore";
import { useMutation } from "@tanstack/react-query";

export const useOrderStore = () => {
  const { axios } = useAxiosStore();

  // ⚡ Order: store
  const orderStore = async ({
    ownerName,
    ownerPhone,
    region,
    address,
    priceRange,
  }: OrderStoreProps): Promise<string | null> => {
    const response = await axios.post<{ paymentUrl: string }>("/user/orders", {
      ownerName,
      ownerPhone,
      region,
      address,
      priceRange,
    });
    if (!response) return null;

    const { paymentUrl } = response.data;
    return paymentUrl;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: orderStore });

  return {
    orderStore: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};

interface OrderStoreProps {
  ownerName: string;
  ownerPhone: string;
  region: string;
  address: string;
  priceRange: string;
}
