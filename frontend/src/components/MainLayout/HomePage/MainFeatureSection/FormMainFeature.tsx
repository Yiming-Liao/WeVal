import { Arrow } from "@/components/svg";
import { Button, Select } from "@/components/ui";
import { Area } from "@/types/area.types";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction } from "react";

const FormMainFeature: FC<FormMainFeatureProps> = ({ area, setArea }) => {
  const { push } = useRouter();

  const handleNext = () => {
    if (area === "" || area === "default") return;
    push(`/create-order/details?area=${area}`);
  };

  return (
    <div className="size-full flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="typography-title-md text-white font-[300] flex flex-col">
          <span>Select your area </span>
          <span>to find the best local valuer</span>
        </h2>

        <p className="typography-body-md text-white font-[300]">
          We will provide you with the most suitable professional appraiser to
          meet your needs. Simply enter your address, and the system will
          automatically match you with experienced appraisers in your area,
          ensuring that you receive the most accurate service and quickly begin
          your appraisal process.
        </p>
      </div>

      <Select
        required
        value={area}
        onChange={(e) =>
          setArea(e.target.value as FormMainFeatureProps["area"])
        }
      >
        <option value="default">Select area</option>
        <option value="new_south_wales">New South Wales</option>
      </Select>

      <div className="flex flex-col gap-6">
        <p className="typography-body-md text-white font-[300]">
          Please note: After submitting your information, please be patient. The
          system will assign the most suitable appraiser to you within one day.
          Please check your email for confirmation.
        </p>

        <Button type="button" onClick={handleNext} className="flex gap-2">
          Next
          <Arrow />
        </Button>
      </div>
    </div>
  );
};
export default FormMainFeature;

interface FormMainFeatureProps {
  area: Area;
  setArea: Dispatch<SetStateAction<Area>>;
}
