"use client";

import { FC } from "react";
import { Loading } from "@/components/svg";
import { Order, orderStatusDisplay } from "@/types/models/order.types";
import Link from "next/link";

const OrderList: FC<OrderListProps> = ({ orders, isLoading }) => {
  // const status = useSearchParams().get("status");
  // const { orders, statusCounts, isLoading } = useOrderIndex({ status });

  return (
    <div className="flex flex-col">
      {/* Table head */}
      <div className="py-6 flex justify-between gap-4 typography-label-md text-primary">
        <label className="min-w-28">Status</label>
        <label className="w-80">Property Address</label>
        <label className="w-48">Property owner</label>
        <label className="w-32">Payment</label>
        <label className="min-w-40"></label>
      </div>

      {/* Table body */}
      {isLoading ? (
        <Loading />
      ) : (
        orders.map((order) => {
          const {
            orderId,
            orderStatus,
            region,
            address,
            ownerName,
            ownerPhone,
            amount,
          } = order;
          return (
            <div
              key={orderId}
              className="py-10 flex items-center justify-between gap-4 typography-label-md text-deep border-b-[0.5px] border-primary"
            >
              <div className="min-w-28">{orderStatusDisplay[orderStatus]}</div>
              <div className="w-80 flex flex-col gap-2">
                <p>{region}</p>
                <p className="font-light line-clamp-1">{address}</p>
              </div>
              <div className="w-48 flex flex-col gap-2">
                <p>{ownerName}</p>
                <p className="font-light">{ownerPhone}</p>
              </div>
              <div className="w-32">$ {amount}</div>

              <Link
                href={`/user/dashboard/orders/${orderId}`}
                className="min-w-40 h-[52px] bg-primary text-white rounded-lg flex justify-center items-center button-interaction"
              >
                View order
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};
export default OrderList;

interface OrderListProps {
  orders: Order[];
  isLoading: boolean;
}
