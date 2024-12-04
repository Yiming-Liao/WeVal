import { Loading } from "@/components/svg";
import { FC, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  isLoading?: boolean;
  placeholder?: string;
};

const Input: FC<InputProps> = ({
  className = "",
  isLoading,
  placeholder,
  ...props
}) => {
  return (
    <div className={`relative ${className} w-full`}>
      <input
        className="w-full h-[52px] px-4 border border-black/25 rounded-lg"
        placeholder={isLoading ? "" : placeholder}
        {...props}
      />

      {isLoading && (
        <span className="absolute top-[50%] translate-y-[-50%] left-4">
          <Loading color="#73798d" />
        </span>
      )}
    </div>
  );
};

export default Input;
