import { Loading } from "@/components/svg";
import { Valuer } from "@/types/models/valuer.types";
import { Dispatch, FC, SetStateAction } from "react";

const PhoneDisplay: FC<PhoneDisplayProps> = ({ valuer, setIsEditing }) => {
  return (
    <div className="flex items-center">
      <div className="w-48 h-[52px] flex items-center">
        {!valuer ? (
          <Loading />
        ) : (
          <p className="typography-label-md text-deep">{valuer.phone}</p>
        )}
      </div>

      {/* Button: Edit */}
      <button
        type="button"
        onClick={() => setIsEditing(true)}
        className="h-10 typography-label-md text-silver bg-white rounded-lg py-2 px-6 border border-black/25"
      >
        Edit
      </button>
    </div>
  );
};
export default PhoneDisplay;

interface PhoneDisplayProps {
  valuer: Valuer | null;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
