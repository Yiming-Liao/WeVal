import Link from "next/link";
import { FC } from "react";
import { Loading } from "../svg";

const TitleAndBreadcrumbs: FC<TitleAndBreadcrumbsProps> = ({
  links,
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
          {links.map((link) => (
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

        <h1 className="typography-title-lg text-secondary">{title}</h1>
      </div>
    </div>
  );
};
export default TitleAndBreadcrumbs;

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

interface TitleAndBreadcrumbsProps {
  links: { href: string; page: string }[];
  currentPage: string;
  title: string;
}
