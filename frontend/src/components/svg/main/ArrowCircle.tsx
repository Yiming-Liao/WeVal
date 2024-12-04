// Ref: homepage -> HeroSection, NewsCard

import { FC } from "react";

const ArrowCircle: FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={26} cy={26} r={26} fill="#213DEB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.8003 18.8502C33.8003 18.4912 33.5093 18.2002 33.1503 18.2002H25.3503C24.9913 18.2002 24.7003 18.4912 24.7003 18.8502C24.7003 19.2092 24.9913 19.5002 25.3503 19.5002H31.5811L18.3907 32.6906C18.1368 32.9444 18.1368 33.356 18.3907 33.6098C18.6445 33.8637 19.0561 33.8637 19.3099 33.6098L32.5003 20.4194V26.6502C32.5003 27.0092 32.7913 27.3002 33.1503 27.3002C33.5093 27.3002 33.8003 27.0092 33.8003 26.6502V18.8502Z"
        fill="white"
      />
    </svg>
  </div>
);
export default ArrowCircle;
