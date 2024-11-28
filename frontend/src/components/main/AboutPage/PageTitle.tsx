import { FC } from "react";

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="flex items-end gap-3">
      <div className="relative left-[-4px] bottom-[21px]">
        <ConnectLine />
      </div>
      <h1 className="typography-title-lg text-secondary">{title}</h1>
    </div>
  );
};
export default PageTitle;

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

interface PageTitleProps {
  title: string;
}
