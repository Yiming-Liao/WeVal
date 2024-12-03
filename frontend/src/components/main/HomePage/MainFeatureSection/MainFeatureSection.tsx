"use client";

import { useState } from "react";
import MainFeatureForm from "./MainFeatureForm";
import Background from "./Background";
import { Region } from "@/types/region.types";

const MainFeatureSection = () => {
  const [region, setRegion] = useState<Region>(Region.DEFAULT);

  return (
    <section className="w-full h-[calc(100vh-96px)] min-h-[600px] max-h-[1005px]">
      <div className="overflow-hidden relative size-full bg-gradient-to-t from-[#E9EBF1] via-[#FFFFFF] to-[#F7F8FC] rounded-[60px] [box-shadow:0px_-8px_16px_0px_#00000014] flex justify-center">
        <div className="relative z-10 size-full 2xl:px-32 xl:px-16 px-8 py-[60px] flex justify-between">
          {/* Left block */}
          <div className="">
            <MainFeatureForm region={region} setRegion={setRegion} />
          </div>

          <p className="text-5xl text-[#A9ADBB]">Australia</p>
        </div>

        {/* Background -> earth & map */}
        <div className="absolute top-0 size-full">
          <Background region={region} />
        </div>
      </div>
    </section>
  );
};
export default MainFeatureSection;
