import LayoutContainer from "@/components/common/LayoutContainer";
import { Order, Profile } from "@/components/svg";
import { TitleAndBreadcrumbs } from "@/components/ui";
import Link from "next/link";
import { FC } from "react";

const UserDashboardHeader: FC<UserDashboardHeaderProps> = ({
  links = [],
  currentPage = "",
  title = "",
  activeTab = "",
}) => {
  return (
    <header className="w-full flex flex-col items-center">
      {/* Title & Breadcrumbs */}
      <LayoutContainer>
        <TitleAndBreadcrumbs
          links={[
            { href: "/", page: "Home" },
            { href: "/user/dashboard", page: "Dashboard" },
            ...links,
          ]}
          currentPage={currentPage}
          title={title}
        />
      </LayoutContainer>

      {/* Dashboard links */}
      <div className="w-full border-b-[0.25px] border-secondary flex justify-center pt-10 pl-16">
        <LayoutContainer>
          <nav className="flex gap-2">
            <Link
              href={"/user/dashboard/profile"}
              className="-ml-2 px-3 typography-label-lg text-secondary flex justify-center"
            >
              <span
                className={`py-2 flex items-center gap-2 ${
                  activeTab === "profile"
                    ? "border-b border-secondary"
                    : "border-b border-black/0"
                }`}
              >
                <Profile />
                Profile
              </span>
            </Link>
            <Link
              href={"/user/dashboard/orders"}
              className="px-3 typography-label-lg text-secondary flex justify-center"
            >
              <span
                className={`py-2 flex items-center gap-2 ${
                  activeTab === "orders"
                    ? "border-b border-secondary"
                    : "border-b border-black/0"
                }`}
              >
                <Order />
                Orders
              </span>
            </Link>
          </nav>
        </LayoutContainer>
      </div>
    </header>
  );
};
export default UserDashboardHeader;

interface UserDashboardHeaderProps {
  links?: { href: string; page: string }[];
  currentPage?: string;
  title?: string;
  activeTab?: string;
}
