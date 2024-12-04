import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import { Loading } from "@/components/svg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const Button: FC<ButtonProps> = ({
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
      w-full h-[52px] bg-primary text-white rounded-lg flex justify-center items-center button-interaction`}
      {...props}
    >
      {isLoading ? <Loading color={"#fff"} /> : children}
    </button>
  );
};

export default Button;
