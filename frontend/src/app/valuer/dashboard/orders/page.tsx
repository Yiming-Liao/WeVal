// [r: Valuer]

"use client";

import { Loading } from "@/components/svg";
import OrderList from "@/components/valuer/dashboard/orders/OrderList";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Sidebar from "@/components/valuer/dashboard/orders/Sidebar";
import LayoutContainer from "@/components/common/LayoutContainer";
import { useOrderNewRequests } from "@/hooks/valuer/orders/useOrderNewRequests";
import { OrderStatus } from "@/types/models/order.types";
import PageHeader from "@/components/common/PageHeader";
import { TabsSet } from "@/types/tabsSet.types";

const OrdersPage = () => {
  const status = useSearchParams().get("status");

  const { orders: availableOrders, count, isLoading } = useOrderNewRequests();
  console.log(status);
  return (
    <div className="relative flex flex-col items-center">
      <div className="size-full flex flex-col items-center">
        {/* Header */}
        <PageHeader
          breadcrumbsLinks={[
            { href: "/", page: "Home" },
            { href: "/valuer/dashboard", page: "Dashboard" },
          ]}
          currentPage={"Orders"}
          title={"Orders"}
          tabs={TabsSet.VALUER_DASHBOARD}
        />

        {/* <section> Order list */}
        <LayoutContainer>
          <section className="min-h-screen pt-20 2xl:pl-52 max-2xl:mx-16  flex flex-col gap-10">
            {/* Side bar */}
            <Sidebar
              status={status as OrderStatus}
              statusCounts={[
                {
                  orderStatus: OrderStatus.AWAITING_VALUER,
                  count: String(count),
                },
              ]}
            />

            {/* Search */}
            <div className="flex justify-end">
              <input type="text" placeholder="Search" className="border-8" />
            </div>

            {/* List */}
            <OrderList orders={availableOrders} isLoading={isLoading} />
          </section>
        </LayoutContainer>
      </div>
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
