import { FC, ReactNode, SelectHTMLAttributes } from "react";
import { ArrowDown } from "../svg";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  value?: string;
  children: ReactNode;
};

const Select: FC<SelectProps> = ({
  className = "",
  value = "",
  children,
  ...props
}) => {
  return (
    <div className="relative">
      <select
        value={value}
        className={`${className} w-full h-[52px] px-4 border border-black/25 rounded-lg appearance-none ${
          value === "" ? "text-gray-400 font-extralight" : ""
        }`}
        {...props}
      >
        {children}
      </select>
      <div className="absolute top-[50%] translate-y-[-50%] right-4">
        <ArrowDown />
      </div>
    </div>
  );
};

export default Select;
