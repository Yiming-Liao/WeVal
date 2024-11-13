"use client";

import { EyeClose, EyeOpen } from "@/components/svg";
import { FC, InputHTMLAttributes, useState } from "react";

type InputPasswordProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const InputPassword: FC<InputPasswordProps> = ({
  className = "",
  ...props
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div
      className={`${className} 
      relative w-full h-[52px] border border-black/25 rounded-lg`}
    >
      <input
        {...props}
        type={isShow ? "text" : "password"}
        className="size-full px-4 rounded-lg"
      />

      <button
        type="button"
        className="absolute top-[50%] translate-y-[-50%] right-2 p-2 bg-white"
        onClick={() => setIsShow((prev) => !prev)}
      >
        <span>{isShow ? <EyeOpen /> : <EyeClose />}</span>
      </button>
    </div>
  );
};

export default InputPassword;
