"use client";

import { Input, Select } from "@/components/ui";
import { Region } from "@/types/region.types";
import { PAYMENT_AMOUNT, PriceRange } from "@/types/stripe/priceRange.types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";

const FillInfoForm = () => {
  const { push } = useRouter();

  const [purpose, setPurpose] = useState<PurposeTypes>("");
  const [priceRange, setPriceRange] = useState<PriceRange | "">("");
  const [region, setRegion] = useState<Region>(Region.DEFAULT);
  const [address, setAddress] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");
  const [ownerPhone, setOwnerPhone] = useState<string>("");

  // ⚡ Submit
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    sessionStorage.setItem("purpose", purpose);
    sessionStorage.setItem("priceRange", priceRange);
    sessionStorage.setItem("region", region);
    sessionStorage.setItem("address", address);
    sessionStorage.setItem("ownerName", ownerName);
    sessionStorage.setItem("ownerPhone", ownerPhone);

    push("/order/confirm-order");
  };

  // Get sessionStorage items
  useEffect(() => {
    setPurpose((sessionStorage.getItem("purpose") as PurposeTypes) || "");
    setPriceRange((sessionStorage.getItem("priceRange") as PriceRange) || "");
    setRegion((sessionStorage.getItem("region") as Region) || Region.DEFAULT);
    setAddress(sessionStorage.getItem("address") || "");
    setOwnerName(sessionStorage.getItem("ownerName") || "");
    setOwnerPhone(sessionStorage.getItem("ownerPhone") || "");
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-20">
      {/* Inputs */}
      <div className="flex flex-col gap-10">
        <div className="w-full flex flex-col gap-3">
          {/* Select: region */}
          <div className="max-w-80">
            <Select
              disabled
              required
              value={region}
              onChange={(e) => setRegion(e.target.value as Region)}
            >
              <option value={Region.DEFAULT} disabled hidden>
                Select region
              </option>
              <option value={Region.WESTERN_AUSTRALIA}>
                Western Australia
              </option>
              <option value={Region.NORTHERN_TERRITORY}>
                Northern Territory
              </option>
              <option value={Region.QUEENSLAND}>Queensland</option>
              <option value={Region.SOUTH_AUSTRALIA}>South Australia</option>
              <option value={Region.NEW_SOUTH_WALES}>New South Wales</option>
              <option value={Region.VICTORIA}>Victoria</option>
              <option value={Region.TASMANIA}>Tasmania</option>
            </Select>
          </div>

          {/* Input: Property Address */}
          <Input
            required
            placeholder="Property Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full"
          />

          {/* Select: House price range */}
          <Select
            required
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value as PriceRange)}
          >
            <option value="" disabled hidden>
              House price range
            </option>
            {Object.entries(PAYMENT_AMOUNT).map((entry) => (
              <option key={entry[0]} value={entry[0]}>
                {entry[0].split("_").join(" ")}
                {/* (Commission: ${entry[1]}) */}
              </option>
            ))}
          </Select>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex gap-3">
            {/* Input: Property owner */}
            <Input
              required
              placeholder="Property owner"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />

            {/* Input: Owner's ownerPhone number */}
            <Input
              required
              type="tel"
              pattern="\+61\d{9}"
              placeholder="Owner's phone number"
              value={ownerPhone}
              onChange={(e) => setOwnerPhone(e.target.value)}
            />
          </div>
          {/* Select: Purpose of valuation */}
          <Select
            required
            value={purpose}
            onChange={(e) => setPurpose(e.target.value as PurposeTypes)}
          >
            <option value="" disabled hidden>
              Purpose of valuation
            </option>
            <option value="buying">Buying house</option>
            <option value="selling">Selling house</option>
            <option value="other">Other reasons</option>
          </Select>
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
        <button
          type="submit"
          className="w-full max-w-80 h-12 [box-shadow:0px_8px_16px_0px_#00000014] flex justify-center items-center gap-2 bg-primary text-white rounded-lg"
        >
          Next <Arrow />
        </button>
      </div>
    </form>
  );
};
export default FillInfoForm;

// Arrow SVG
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
type PurposeTypes = "" | "buying" | "selling" | "other";
