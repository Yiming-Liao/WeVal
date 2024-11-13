import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import Loading from "../svg/Loading";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const ButtonOutline: FC<ButtonProps> = ({
  children,
  className = "",
  isLoading = false,
  isDisabled = false,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      className={`${className} ${isDisabled ? "opacity-50" : null} duration-200
      h-10 p-2 border border-primary text-primary rounded-lg flex justify-center items-center`}
      {...props}
    >
      {isLoading ? <Loading color={"#213DEB"} /> : children}
    </button>
  );
};

export default ButtonOutline;
