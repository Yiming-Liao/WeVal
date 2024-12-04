import { FC } from "react";

const ArrowNext: FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width={"100%"}
    height={"100%"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} size-6`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.73437 12C1.73437 11.5858 2.07016 11.25 2.48437 11.25H20.1737L15.454 6.53033C15.1612 6.23744 15.1612 5.76256 15.454 5.46967C15.7469 5.17678 16.2218 5.17678 16.5147 5.46967L22.5147 11.4697C22.8076 11.7626 22.8076 12.2374 22.5147 12.5303L16.5147 18.5303C16.2218 18.8232 15.7469 18.8232 15.454 18.5303C15.1612 18.2374 15.1612 17.7626 15.454 17.4697L20.1737 12.75H2.48437C2.07016 12.75 1.73437 12.4142 1.73437 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowNext;
