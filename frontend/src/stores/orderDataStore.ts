import { Region } from "@/types/region.types";
import { PriceRange } from "@/types/stripe/priceRange.types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useOrderDataStore = create<OrderDataStore>()(
  persist(
    (set) => ({
      region: Region.DEFAULT,
      address: "",
      priceRange: "",
      ownerName: "",
      ownerPhone: "",
      purpose: "",

      setOrderData: (data) =>
        set((state) => ({
          ...state,
          ...data,
        })),
    }),
    {
      name: "order-data", // Key name
      storage: createJSONStorage(() => sessionStorage), // Session storage
    }
  )
);

// Types
export interface OrderDataStore {
  ownerName: string;
  ownerPhone: string;
  region: Region;
  address: string;
  priceRange: PriceRange | "";
  purpose: string;
  setOrderData: (data: Partial<OrderDataStore>) => void;
}
