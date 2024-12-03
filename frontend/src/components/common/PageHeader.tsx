import { FC, ReactNode } from "react";
import { Loading } from "@/components/svg";
import LayoutContainer from "@/components/common/LayoutContainer";
import Link from "next/link";

const PageHeader: FC<PageHeaderProps> = ({
  breadcrumbsLinks = [],
  currentPage = "",
  title = "",
  tabs = [],
}) => {
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
                    className="-ml-2 px-4 typography-label-lg text-secondary flex justify-center"
                  >
                    <span
                      className={`py-2 flex items-center gap-2 ${
                        tab.isActive
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
interface PageHeaderProps {
  breadcrumbsLinks?: { href: string; page: string }[];
  currentPage?: string;
  title?: string;
  tabs?: { text: string; href: string; isActive: boolean; icon?: ReactNode }[];
}

// Title and Breadcrumbs
const TitleAndBreadcrumbs: FC<TitleAndBreadcrumbsProps> = ({
  breadcrumbsLinks,
  currentPage,
  title,
}) => {
  return (
    <div className="flex items-end gap-3 pt-[85px] border-x border-light">
      <div className="relative left-[-4px] bottom-[21px]">
        <ConnectLine />
      </div>
      <div>
        <div className="flex gap-1 typography-label-sm font-light">
          {/* Ancestor pages */}
          {breadcrumbsLinks.map((link) => (
            <span key={link.href} className="flex items-center gap-1">
              <Link href={link.href}>{link.page}</Link>
              <span>{`>`}</span>
            </span>
          ))}

          {/* Current page */}
          <span className="text-primary font-normal flex items-center">
            {currentPage || <Loading className="size-3 mx-1" />}
          </span>
        </div>

        <h1 className="typography-title-lg text-secondary">
          {title || <Loading className="w-8 h-[54px]" />}
        </h1>
      </div>
    </div>
  );
};
interface TitleAndBreadcrumbsProps {
  breadcrumbsLinks: { href: string; page: string }[];
  currentPage: string;
  title: string;
}

// Connect line SVG
const ConnectLine = () => {
  return (
    <svg
      width="55"
      height="8"
      viewBox="0 0 55 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="#1A2596" />
      <line
        x1="4"
        y1="3.75"
        x2="55"
        y2="3.75"
        stroke="#1A2596"
        strokeWidth="0.5"
        strokeDasharray="4 4"
      />
    </svg>
  );
};
