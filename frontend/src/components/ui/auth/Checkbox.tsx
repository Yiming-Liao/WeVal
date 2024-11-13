"use client";

import { FC, HTMLProps, useState } from "react";
import { Checked } from "@/components/svg";

type CheckboxProps = HTMLProps<HTMLDivElement> & {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

const Checkbox: FC<CheckboxProps> = ({
  className = "",
  checked = false,
  onChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };
  return (
    <div
      onClick={handleToggle}
      className={`${className} 
        cursor-pointer size-4 min-w-4 min-h-4 border-deep rounded-full flex justify-center items-center ${
          !checked ? "border opacity-50" : "border-none"
        }`}
      {...props}
    >
      {checked ? <Checked /> : null}
    </div>
  );
};

export default Checkbox;
