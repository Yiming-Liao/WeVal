import { FC } from "react";

const ArrowPrev: FC<{ className?: string }> = ({ className = "" }) => (
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
      d="M22.5 12C22.5 12.4142 22.1642 12.75 21.75 12.75L4.06066 12.75L8.78033 17.4697C9.07322 17.7626 9.07322 18.2374 8.78033 18.5303C8.48744 18.8232 8.01256 18.8232 7.71967 18.5303L1.71967 12.5303C1.42678 12.2374 1.42678 11.7626 1.71967 11.4697L7.71967 5.46967C8.01256 5.17678 8.48744 5.17678 8.78033 5.46967C9.07322 5.76256 9.07322 6.23744 8.78033 6.53033L4.06066 11.25L21.75 11.25C22.1642 11.25 22.5 11.5858 22.5 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowPrev;
