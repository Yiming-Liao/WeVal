import { Arrow } from "@/components/svg";
import { Button, Select } from "@/components/ui";
import { Region } from "@/types/region.types";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction } from "react";

const FormMainFeature: FC<FormMainFeatureProps> = ({ region, setRegion }) => {
  const { push } = useRouter();

  const handleNext = () => {
    if (region === "" || region === "default") return;
    push(`/order/fill-info?region=${region}`);
  };

  return (
    <div className="size-full flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="typography-title-md text-white font-[300] flex flex-col">
          <span>Select your region </span>
          <span>to find the best local valuer</span>
        </h2>

        <p className="typography-body-md text-white font-[300]">
          We will provide you with the most suitable professional appraiser to
          meet your needs. Simply enter your address, and the system will
          automatically match you with experienced appraisers in your region,
          ensuring that you receive the most accurate service and quickly begin
          your appraisal process.
        </p>
      </div>

      <Select
        required
        value={region}
        onChange={(e) =>
          setRegion(e.target.value as FormMainFeatureProps["region"])
        }
      >
        <option value="default">Select region</option>
        <option value="new-south-wales">New South Wales</option>
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
  region: Region;
  setRegion: Dispatch<SetStateAction<Region>>;
}
