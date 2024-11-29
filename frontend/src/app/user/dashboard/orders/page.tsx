"use client";

import { Loading } from "@/components/svg";
import OrderList from "@/components/user/dashboard/orders/OrderList";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Sidebar, {
  ORDER_STATUS,
} from "@/components/user/dashboard/orders/Sidebar";
import UserDashboardHeader from "@/components/user/dashboard/UserDashboardHeader";
import LayoutContainer from "@/components/common/LayoutContainer";

const OrdersPage = () => {
  const status = useSearchParams().get("status");

  return (
    <div className="relative flex flex-col items-center">
      <section className="size-full flex flex-col items-center">
        {/* Header */}
        <UserDashboardHeader
          currentPage="orders"
          title="Orders"
          activeTab="orders"
        />

        {/* Main */}
        <div className="w-full flex justify-center pt-20">
          <LayoutContainer>
            <div className="min-h-screen 2xl:pl-52 max-2xl:mx-16 flex flex-col gap-10">
              {/* Side bar */}
              <Sidebar status={status as ORDER_STATUS} />

              {/* Search */}
              <div className="flex justify-end">
                <input type="text" placeholder="Search" className="border-8" />
              </div>

              {/* List */}
              <OrderList />
            </div>
          </LayoutContainer>
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
