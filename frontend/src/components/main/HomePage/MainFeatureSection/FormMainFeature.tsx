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
          <span>Purchasing Security (是我的產品名稱)</span>
          {/* <span>to find the best local valuer</span> */}
        </h2>

        <p className="typography-body-md text-white font-[300]">
          For your property due diligence, we follow bank-level risk management
          standards to ensure a reliable assessment. We’re not involved in
          sales, avoiding any conflict of interest. Key client needs are covered
          in our documentation, and our valuers personally inspect the property,
          offering advice tailored to your situation.
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
          Let us secure your property purchase.
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
