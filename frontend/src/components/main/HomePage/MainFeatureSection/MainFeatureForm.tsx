import { Arrow } from "@/components/svg";
import { Button, Select } from "@/components/ui";
import { Region } from "@/types/region.types";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction } from "react";

const MainFeatureForm: FC<MainFeatureFormProps> = ({ region, setRegion }) => {
  const { push } = useRouter();

  const handleNext = () => {
    if (region === Region.DEFAULT) return;

    sessionStorage.setItem("region", region);
    push(`/order/fill-info`);
  };

  return (
    <div className="h-auto w-[28vw] max-w-[520px] rounded-[40px] bg-gradient-to-t from-[#9AA7BC] to-[#B9C4D7] pt-12 pb-14 px-5 [box-shadow:0px_-8px_16px_0px_#00000014]">
      <div className=" flex flex-col justify-between gap-16">
        {/* Title & Description */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h2 className="typography-title-md text-white font-[300] flex flex-col">
            <span>Purchasing Security</span>
            {/* <span>to find the best local valuer</span> */}
          </h2>
          {/* Description */}
          <p className="typography-body-md text-white font-[300]">
            For your property due diligence, we follow bank-level risk
            management standards to ensure a reliable assessment. We’re not
            involved in sales, avoiding any conflict of interest. Key client
            needs are covered in our documentation, and our valuers personally
            inspect the property, offering advice tailored to your situation.
          </p>
        </div>

        {/* Select: region */}
        <Select
          required
          value={region}
          onChange={(e) => setRegion(e.target.value as Region)}
        >
          <option value={Region.DEFAULT} disabled hidden>
            Select region
          </option>
          <option value={Region.WESTERN_AUSTRALIA}>Western Australia</option>
          <option value={Region.NORTHERN_TERRITORY}>Northern Territory</option>
          <option value={Region.QUEENSLAND}>Queensland</option>
          <option value={Region.SOUTH_AUSTRALIA}>South Australia</option>
          <option value={Region.NEW_SOUTH_WALES}>New South Wales</option>
          <option value={Region.VICTORIA}>Victoria</option>
          <option value={Region.TASMANIA}>Tasmania</option>
        </Select>

        <div className="flex flex-col gap-2">
          <p className="typography-body-md text-white font-[300]">
            Let us secure your property purchase.
          </p>

          <Button type="button" onClick={handleNext} className="flex gap-2">
            Next
            <Arrow />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default MainFeatureForm;

interface MainFeatureFormProps {
  region: Region;
  setRegion: Dispatch<SetStateAction<Region>>;
}
