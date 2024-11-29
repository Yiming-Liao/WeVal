"use client";

import LayoutContainer from "@/components/common/LayoutContainer";
import { Loading } from "@/components/svg";
import UserDashboardHeader from "@/components/user/dashboard/UserDashboardHeader";
import Sidebar, {
  ORDER_STATUS,
} from "@/components/user/dashboard/orders/Sidebar";
import { useOrderShow } from "@/hooks/user/orders/useOrderShow";
import Link from "next/link";
import { FC } from "react";

const OrderDetailPage = ({ id }: { id: string }) => {
  const { order } = useOrderShow({ id });

  return (
    <div className="relative flex flex-col items-center">
      <section className="size-full flex flex-col items-center">
        {/* Header */}
        <UserDashboardHeader
          links={[{ href: "/user/dashboard/orders", page: "Orders" }]}
          currentPage={id}
          title={id}
          activeTab="orders"
        />

        {/* Main */}
        <div className="w-full flex justify-center pt-20">
          <LayoutContainer>
            <div className="min-h-screen pl-52 flex flex-col gap-10">
              {/* Side bar */}
              <Sidebar
                status={(order && (order.status as ORDER_STATUS)) || null}
              />

              {/* Order card */}
              <div className="min-h-72 bg-white rounded-xl p-12 [box-shadow:0px_8px_16px_0px_#00000014] flex gap-36">
                {!order ? (
                  <Loading />
                ) : (
                  <>
                    <div className="flex flex-col gap-7 justify-between">
                      {/* Owner name */}
                      <Field label="Property owner" data={order.ownerName} />

                      {/* Owner number */}
                      <Field label="Contact number" data={order.ownerPhone} />
                    </div>

                    <div className="flex flex-col gap-7 justify-between">
                      {/* Request address */}
                      <div className="w-max flex flex-col gap-6 typography-label-md">
                        <label className="text-silver font-medium">
                          Request address
                        </label>
                        {/* Region */}
                        <div className="flex flex-col gap-2">
                          <p className="text-deep">{order.region}</p>
                          {/* Full address */}
                          <p className="text-deep font-light">
                            {order.address}
                          </p>
                        </div>
                      </div>

                      {/* House Price Range */}
                      <Field
                        label="House Price Range"
                        data={order.priceRange}
                      />
                    </div>

                    <div className="flex flex-col gap-7 justify-between">
                      {/* House Price Range */}
                      <Field label="Status" data={order.status} />

                      {order.status === "unpaid" && (
                        <Link href={order.paymentUrl} className="border-8">
                          Pay
                        </Link>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </LayoutContainer>
        </div>
      </section>
    </div>
  );
};

// Wrapper for dynamic params
const OrderDetailPageWrapper = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return <OrderDetailPage id={id} />;
};
export default OrderDetailPageWrapper;

const Field: FC<{ label: string; data: string }> = ({ label, data }) => {
  return (
    <div className="w-max flex flex-col gap-6 typography-label-md">
      <label className="text-silver font-medium">{label}</label>
      <p className="text-deep">{data}</p>
    </div>
  );
};
