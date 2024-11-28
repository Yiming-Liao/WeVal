"use client";

import { Loading } from "@/components/svg";
import { useOrderIndex } from "@/hooks/user/orders/useOrderIndex";
import Link from "next/link";

const OrderList = () => {
  const { orders, isLoading } = useOrderIndex();

  return (
    <div className="flex flex-col">
      {/* Table head */}
      <div className="py-6 flex gap-4 typography-label-md text-primary">
        <label className="w-full">Status</label>
        <label className="w-full">Property Address</label>
        <label className="w-full">Property owner</label>
        <label className="w-full">Payment</label>
      </div>

      {/* Table body */}
      {isLoading ? (
        <Loading />
      ) : (
        orders.map((order) => {
          const {
            orderId,
            status,
            region,
            address,
            ownerName,
            ownerPhone,
            amount,
          } = order;
          return (
            <Link
              href={`/user/dashboard/orders/${orderId}`}
              key={orderId}
              className="py-10 flex items-center gap-4 typography-label-md text-deep border-b-[0.5px] border-primary"
            >
              <div className="w-full">{status}</div>
              <div className="w-full flex flex-col gap-2">
                <p>{region}</p>
                <p className="font-light line-clamp-1">{address}</p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p>{ownerName}</p>
                <p className="font-light">{ownerPhone}</p>
              </div>
              <div className="w-full">$ {amount}</div>
            </Link>
          );
        })
      )}
    </div>
  );
};
export default OrderList;
