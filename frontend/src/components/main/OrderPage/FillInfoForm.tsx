"use client";

import { Input, Select } from "@/components/ui";
import { COMMISSION_AMOUNT, PriceRange } from "@/types/stripe/priceRange.types";
import Link from "next/link";
import { useState } from "react";

const FillInfoForm = () => {
  const [purpose, setPurpose] = useState<PurposeTypes>("");
  const [priceRange, setPriceRange] = useState<PriceRange | "">("");

  return (
    <form className="flex flex-col gap-20">
      {/* Inputs */}
      <div className="flex gap-10">
        <div className="flex-1 max-w-[324px] flex flex-col gap-3">
          {/* Select: Purpose of valuation */}
          <Select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value as PurposeTypes)}
          >
            <option value="" disabled hidden>
              Purpose of valuation
            </option>
            <option value="buying">Buying house</option>
            <option value="selling">Selling house</option>
          </Select>

          {/* Select: House price range */}
          <Select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value as PriceRange)}
          >
            <option value="" disabled hidden>
              House price range
            </option>
            {Object.entries(COMMISSION_AMOUNT).map((entry) => (
              <option key={entry[0]} value={entry[0]}>
                {entry[0]} _ {entry[1]}
              </option>
            ))}
          </Select>
        </div>
        <div className="flex-1 max-w-[324px] flex flex-col gap-3">
          {/* Select: region */}
          <Select
          // value={serviceArea}
          // onChange={(e) => setServiceArea(e.target.value)}
          >
            <option value="" disabled hidden>
              Select region
            </option>
            <option value="queensland">Queensland</option>
            <option value="south_australia">South Australia</option>
          </Select>

          {/* Input: Full address */}
          <Input placeholder="Full address" className="w-[480px]" />

          {/* Input: Property owner */}
          <Input placeholder="Property owner" />

          {/* Input: Contact number */}
          <Input placeholder="Contact number" />
        </div>
      </div>

      <div className="flex justify-between">
        {/* Button: Payment */}
        <Link
          href="/order/select-region"
          type="submit"
          className="w-full max-w-80 h-12 [box-shadow:0px_8px_16px_0px_#00000014] flex justify-center items-center gap-2 bg-gray-400 text-white rounded-lg"
        >
          <span className="rotate-180">
            <Arrow />
          </span>
          Prev
        </Link>

        {/* Button: Payment */}
        <Link
          href={"/order/confirm-order"}
          type="submit"
          className="w-full max-w-80 h-12 [box-shadow:0px_8px_16px_0px_#00000014] flex justify-center items-center gap-2 bg-primary text-white rounded-lg"
        >
          Next <Arrow />
        </Link>
      </div>
    </form>
  );
};
export default FillInfoForm;

const Arrow = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.96875 12C1.96875 11.5858 2.30454 11.25 2.71875 11.25H20.4081L15.6884 6.53033C15.3955 6.23744 15.3955 5.76256 15.6884 5.46967C15.9813 5.17678 16.4562 5.17678 16.7491 5.46967L22.7491 11.4697C23.042 11.7626 23.042 12.2374 22.7491 12.5303L16.7491 18.5303C16.4562 18.8232 15.9813 18.8232 15.6884 18.5303C15.3955 18.2374 15.3955 17.7626 15.6884 17.4697L20.4081 12.75H2.71875C2.30454 12.75 1.96875 12.4142 1.96875 12Z"
        fill="white"
      />
    </svg>
  );
};

// Type
type PurposeTypes = "" | "buying" | "selling";
