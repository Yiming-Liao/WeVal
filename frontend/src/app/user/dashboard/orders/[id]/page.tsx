"use client";

import Link from "next/link";
import { TitleAndBreadcrumbs } from "@/components/ui";
import { Order, Profile } from "@/components/svg";
import { useOrderShow } from "@/hooks/user/orders/useOrderShow";

const OrderDetailPage = ({ id }: { id: string }) => {
  const { order, isLoading } = useOrderShow({ id });

  return (
    <div className="relative flex flex-col items-center">
      <section className="size-full flex flex-col items-center">
        {/* Header */}
        <header className="w-full flex flex-col items-center">
          {/* Title & Breadcrumbs */}
          <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px]">
            <TitleAndBreadcrumbs
              links={[
                { href: "/", page: "Home" },
                { href: "/user/dashboard", page: "Dashboard" },
                { href: "/user/dashboard/orders", page: "Orders" },
              ]}
              currentPage={order?.orderId || ""}
              title={"Orders"}
            />
          </div>

          {/* Dashboard links */}
          <div className="w-full border-b-[0.25px] border-secondary flex justify-center pt-10 pl-16">
            <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px]">
              <nav className="flex gap-2">
                <Link
                  href={"/user/dashboard/profile"}
                  className="-ml-2 px-3 typography-label-lg text-secondary flex justify-center"
                >
                  <span className="py-2 border-b border-black/0 flex items-center gap-2">
                    <Profile />
                    Profile
                  </span>
                </Link>
                <Link
                  href={"/user/dashboard/orders"}
                  className="px-3 typography-label-lg text-secondary flex justify-center"
                >
                  <span className="py-2 border-b border-secondary flex items-center gap-2">
                    <Order />
                    Orders
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main */}
        <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px] min-h-screen flex flex-col gap-10">
          {/* Order */}
          <p>{order?.ownerName}</p>
          <p>{order?.status}</p>
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
