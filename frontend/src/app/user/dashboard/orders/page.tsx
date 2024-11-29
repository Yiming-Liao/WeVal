"use client";

import { Loading } from "@/components/svg";
import OrderList from "@/components/user/order/OrderList";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Sidebar, { ORDER_STATUS } from "@/components/user/order/Sidebar";
import Header from "@/components/user/order/Header";

const OrdersPage = () => {
  const status = useSearchParams().get("status");

  return (
    <div className="relative flex flex-col items-center">
      <section className="size-full flex flex-col items-center">
        {/* Header */}
        <Header />

        {/* Main */}
        <div className="w-full flex justify-center pt-20">
          <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px] min-h-screen pl-52 flex flex-col gap-10">
            {/* Side bar */}
            <Sidebar status={status as ORDER_STATUS} />

            {/* Search */}
            <div className="flex justify-end">
              <input type="text" placeholder="Search" className="border-8" />
            </div>

            {/* List */}
            <OrderList />
          </div>
        </div>
      </section>
    </div>
  );
};

// Wrapper
const OrdersPageWrapper = () => {
  return (
    <Suspense fallback={<Loading />}>
      <OrdersPage />
    </Suspense>
  );
};
export default OrdersPageWrapper;
