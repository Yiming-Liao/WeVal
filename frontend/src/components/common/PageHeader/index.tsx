"use client";

import { FC, ReactNode } from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Link from "next/link";
import TitleAndBreadcrumbs from "./TitleAndBreadcrumbs";
import { Order, Profile, Resume, Revenue } from "@/components/svg";
import { usePathname } from "next/navigation";
import { TabsSet } from "@/types/tabsSet.types";

const PageHeader: FC<PageHeaderProps> = ({
  breadcrumbsLinks = [],
  currentPage = "",
  title = "",
  tabs = [],
}) => {
  if (typeof tabs === "string") {
    tabs =
      tabs === TabsSet.USER_DASHBOARD
        ? USER_DASHBOARD_TABS
        : tabs === TabsSet.VALUER_DASHBOARD
        ? VALUER_DASHBOARD_TABS
        : tabs === TabsSet.NEWS
        ? NEWS_TABS
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
                        tab.text !== "All"
                          ? pathname.includes(tab.href)
                            ? "border-b border-secondary"
                            : "border-b border-black/0"
                          : pathname.includes(tab.href) &&
                            pathname.split("/").pop() ===
                              tab.href.split("/").pop()
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
  tabs?: { text: string; href: string; icon?: ReactNode }[] | TabsSet;
}

// User dashboard tabs
const USER_DASHBOARD_TABS = [
  {
    text: "Profile",
    href: "/user/dashboard/profile",

    icon: <Profile />,
  },
  {
    text: "Orders",
    href: "/user/dashboard/orders",

    icon: <Order />,
  },
];

// Valuer dashboard tabs
const VALUER_DASHBOARD_TABS = [
  {
    text: "Profile",
    href: "/valuer/dashboard/profile",

    icon: <Profile />,
  },
  {
    text: "Orders",
    href: "/valuer/dashboard/orders",

    icon: <Order />,
  },
  {
    text: "Resume",
    href: "/valuer/dashboard/resume",

    icon: <Resume />,
  },

  {
    text: "Revenue",
    href: "/valuer/dashboard/revenue",

    icon: <Revenue />,
  },
];

// News page tabs
const NEWS_TABS = [
  {
    text: "All",
    href: "/news",
  },
  {
    text: "Announcements",
    href: "/news/announcements",
  },
  {
    text: "Events",
    href: "/news/events",
  },
  {
    text: "Other news",
    href: "/news/other-news",
  },
];
