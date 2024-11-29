import { Order, Profile } from "@/components/svg";
import { TitleAndBreadcrumbs } from "@/components/ui";
import Link from "next/link";

const Header = () => {
  return (
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
  );
};
export default Header;
