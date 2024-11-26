"use client";

import { FC, useEffect, useRef, useState } from "react";
import { TriangleDown } from "../svg";

const Accordion: FC<AccordionProps> = ({ buttonText, bodyText }) => {
  // Accordion body ref
  const bodyRef = useRef<HTMLDivElement | null>(null);

  // Accordion body scroll height
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  // isOpen state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ⌛ Set accordion scroll height
  useEffect(() => {
    if (!bodyRef.current) return;
    setScrollHeight(bodyRef.current.scrollHeight);
  }, []);

  return (
    <div className="w-full">
      {/* Accordion button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full h-[72px] border-b-[0.5px] border-primary flex justify-between items-center"
      >
        {/* Button text */}
        <span className="typography-body-md text-primary">{buttonText}</span>

        {/* Icon */}
        <div className={`${isOpen ? "-rotate-180" : ""} duration-200`}>
          <TriangleDown />
        </div>
      </button>

      {/* Accordion body */}
      <div
        className={`overflow-hidden duration-300 bg-[#FAFAFA] rounded-b-xl`}
        style={{ maxHeight: isOpen ? `${scrollHeight + 20}px` : "0px" }}
        ref={bodyRef}
      >
        <div className="px-7 py-5 typography-label-sm text-deep">
          {bodyText}
        </div>
      </div>
    </div>
  );
};
export default Accordion;

interface AccordionProps {
  buttonText: string;
  bodyText: string;
}
