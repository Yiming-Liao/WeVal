import { Dispatch, ReactNode, SetStateAction } from "react";
import Checkbox from "./Checkbox";

const Agreement = ({
  children,
  isAgree,
  className,
  setIsAgree,
}: AgreementProps) => {
  return (
    <div
      className="flex gap-2 p-2 duration-200 hover:shadow rounded-lg"
      onClick={() => setIsAgree((prev) => !prev)}
    >
      {/* Input: agreement */}
      <Checkbox checked={isAgree} />
      <label
        className={`${className} typography-label-sm text-deep select-none`}
      >
        {children}
      </label>
    </div>
  );
};
export default Agreement;

interface AgreementProps {
  children: ReactNode;
  isAgree: boolean;
  className?: string;
  setIsAgree: Dispatch<SetStateAction<boolean>>;
}
