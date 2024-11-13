import { FC, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input: FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`${className} 
      w-full h-[52px] px-4 border border-black/25 rounded-lg`}
      {...props}
    />
  );
};

export default Input;
