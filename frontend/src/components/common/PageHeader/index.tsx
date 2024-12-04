"use client";

import { FC, ReactNode } from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Link from "next/link";
import TitleAndBreadcrumbs from "./TitleAndBreadcrumbs";
import { Order, Profile, Resume, Revenue } from "@/components/svg";
import { usePathname } from "next/navigation";

const PageHeader: FC<PageHeaderProps> = ({
  breadcrumbsLinks = [],
  currentPage = "",
  title = "",
  tabs = [],
}) => {
  if (typeof tabs === "string") {
    tabs =
      tabs === "user"
        ? USER_DASHBOARD_TABS
        : tabs === "valuer"
        ? VALUER_DASHBOARD_TABS
        : [];
  }

  const pathname = usePathname();

  return (
    <header className="w-full flex flex-col items-center">
      {/* Title & Breadcrumbs */}
      <LayoutContainer>
        <TitleAndBreadcrumbs
          breadcrumbsLinks={[...breadcrumbsLinks]}
          currentPage={currentPage}
          title={title}
        />
      </LayoutContainer>

      {/* Tabs */}
      {tabs.length !== 0 && (
        <div className="w-full border-b-[0.25px] border-secondary flex justify-center">
          <LayoutContainer>
            <div className="border-x border-light">
              <nav className="flex gap-4 pt-10 pl-16">
                {tabs.map((tab) => (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className="-ml-2 px-4 typography-label-lg text-secondary flex justify-center hover:opacity-80 duration-200"
                  >
                    <span
                      className={`py-2 flex items-center gap-2 ${
                        pathname.includes(tab.text.toLowerCase())
                          ? "border-b border-secondary"
                          : "border-b border-black/0"
                      }`}
                    >
                      {tab.icon}
                      {tab.text}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </LayoutContainer>
        </div>
      )}
    </header>
  );
};

export default PageHeader;

// Types
interface PageHeaderProps {
  breadcrumbsLinks?: { href: string; page: string }[];
  currentPage?: string;
  title?: string;
  tabs?:
    | { text: string; href: string; isActive: boolean; icon?: ReactNode }[]
    | string;
}

// User dashboard tabs
const USER_DASHBOARD_TABS = [
  {
    text: "Profile",
    href: "/user/dashboard/profile",
    isActive: false,
    icon: <Profile />,
  },
  {
    text: "Orders",
    href: "/user/dashboard/orders",
    isActive: false,
    icon: <Order />,
  },
];

// Valuer dashboard tabs
const VALUER_DASHBOARD_TABS = [
  {
    text: "Profile",
    href: "/valuer/dashboard/profile",
    isActive: false,
    icon: <Profile />,
  },
  {
    text: "Orders",
    href: "/valuer/dashboard/orders",
    isActive: false,
    icon: <Order />,
  },
  {
    text: "Resume",
    href: "/valuer/dashboard/resume",
    isActive: false,
    icon: <Resume />,
  },

  {
    text: "Revenue",
    href: "/valuer/dashboard/revenue",
    isActive: false,
    icon: <Revenue />,
  },
];
