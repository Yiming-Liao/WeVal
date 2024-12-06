// [r: Valuer]

"use client";

import LayoutContainer from "@/components/common/LayoutContainer";
import PageHeader from "@/components/common/PageHeader";
import { Loading } from "@/components/svg";
import Field from "@/components/ui/Field";
import { useOrderShow } from "@/hooks/valuer/orders/useOrderShow";
import { orderStatusDisplay } from "@/types/models/order.types";
import { TabsSet } from "@/types/tabsSet.types";
import Link from "next/link";

const OrderDetailPage = ({ id }: { id: string }) => {
  const { order } = useOrderShow({ id });

  return (
    <div className="relative flex flex-col items-center">
      <div className="size-full flex flex-col items-center">
        {/* Header */}
        <PageHeader
          breadcrumbsLinks={[
            { href: "/", page: "Home" },
            { href: "/valuer/dashboard", page: "Dashboard" },
            { href: "/valuer/dashboard/orders", page: "Orders" },
          ]}
          currentPage={order?.orderId}
          title={order?.orderId}
          tabs={TabsSet.VALUER_DASHBOARD}
        />

        {/* <section> Order card */}
        <LayoutContainer>
          <section className="min-h-screen flex flex-col gap-10 pt-20 px-16">
            {/* Order card */}
            <div className="bg-white rounded-xl p-12 [box-shadow:0px_8px_16px_0px_#00000014] flex gap-12">
              {!order ? (
                <Loading />
              ) : (
                <>
                  {/* Column 1 */}
                  <div className="min-w-64 max-w-80 flex flex-col gap-7 justify-between">
                    {/* Request address */}
                    <div className="flex flex-col gap-6 typography-label-md">
                      <label className="text-silver font-medium">
                        Request address
                      </label>
                      {/* Region */}
                      <div className="flex flex-col gap-2">
                        <p className="text-deep">{order.region}</p>
                        {/* Full address */}
                        <p className="text-deep font-light overflow-auto text-nowrap">
                          {order.address}
                        </p>
                      </div>
                    </div>

                    {/* House Price Range */}
                    <Field
                      label="House Price Range"
                      data={order.priceRange.split("_").join(" ")}
                    />
                  </div>

                  {/* Column 2 */}
                  <div className="min-w-64 max-w-80 flex flex-col gap-7 justify-between">
                    {/* Owner name */}
                    <Field label="Property owner" data={order.ownerName} />

                    {/* Owner number */}
                    <Field label="Contact number" data={order.ownerPhone} />
                  </div>

                  {/* Column 3 */}
                  <div className="min-w-64 max-w-80 flex flex-col gap-7 justify-between">
                    {/* House Price Range */}
                    <Field
                      label="Status"
                      data={orderStatusDisplay[order.orderStatus]}
                    />

                    {order.orderStatus === "unpaid" && (
                      <Link href={order.paymentUrl} className="border-8">
                        Pay
                      </Link>
                    )}
                  </div>
                </>
              )}
            </div>
          </section>
        </LayoutContainer>
      </div>
    </div>
  );
};

// Wrapper for dynamic params
const OrderDetailPageWrapper = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return <OrderDetailPage id={id} />;
};
export default OrderDetailPageWrapper;
