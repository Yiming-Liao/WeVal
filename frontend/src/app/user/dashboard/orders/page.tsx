import Link from "next/link";
import { TitleAndBreadcrumbs } from "@/components/ui";
import { Order, Profile } from "@/components/svg";
import OrderList from "@/components/user/order/OrderList";
const OrdersPage = () => {
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
              ]}
              currentPage={"Orders"}
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
        <div className="w-full flex justify-center pt-20">
          <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px] min-h-screen pl-52 flex flex-col gap-10">
            {/* Side bar */}
            <div className="absolute left-0 w-full max-w-[350px]">
              <div className="h-[496px] rounded-r-lg bg-white flex justify-end">
                <div className="w-[220px] flex flex-col pt-6 gap-6">
                  <Link
                    href={"/user/dashboard/orders"}
                    className="py-2 border-b border-secondary"
                  >
                    <span className="typography-label-lg text-secondary">
                      All Orders
                    </span>
                  </Link>
                  <Link href={""} className="py-2">
                    <span className="typography-label-lg text-silver">
                      Awaiting Valuer
                    </span>
                  </Link>
                  <Link href={""} className="py-2">
                    <span className="typography-label-lg text-silver">
                      Valuation in Progress
                    </span>
                  </Link>
                  <Link href={""} className="py-2">
                    <span className="typography-label-lg text-silver">
                      Completed Orders
                    </span>
                  </Link>
                </div>
              </div>
            </div>

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
export default OrdersPage;
