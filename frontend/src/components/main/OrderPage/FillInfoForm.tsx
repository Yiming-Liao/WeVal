"use client";

import { ArrowNext, ArrowPrev } from "@/components/svg";
import { Input, Select } from "@/components/ui";
import { useOrderDataStore } from "@/stores/orderDataStore";
import { Region } from "@/types/region.types";
import { PAYMENT_AMOUNT, PriceRange } from "@/types/stripe/priceRange.types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

const FillInfoForm = () => {
  const { push } = useRouter();
  const {
    region,
    address,
    priceRange,
    ownerName,
    ownerPhone,
    purpose,
    setOrderData,
  } = useOrderDataStore();

  // ⚡ Submit
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setOrderData({
      ownerName,
      ownerPhone,
      region,
      address,
      priceRange,
      purpose,
    });

    push("/select-region/fill-info/confirm-order");
  };

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
              onChange={(e) =>
                setOrderData({ region: e.target.value as Region })
              }
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
            onChange={(e) => setOrderData({ address: e.target.value })}
            className="w-full"
          />

          {/* Select: House price range */}
          <Select
            required
            value={priceRange}
            onChange={(e) =>
              setOrderData({ priceRange: e.target.value as PriceRange })
            }
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
              onChange={(e) => setOrderData({ ownerName: e.target.value })}
            />

            {/* Input: Owner's ownerPhone number */}
            <Input
              required
              type="tel"
              pattern="\+61\d{9}"
              placeholder="Owner's phone number"
              value={ownerPhone}
              onChange={(e) => setOrderData({ ownerPhone: e.target.value })}
            />
          </div>
          {/* Select: Purpose of valuation */}
          <Select
            required
            value={purpose}
            onChange={(e) =>
              setOrderData({ purpose: e.target.value as PurposeTypes })
            }
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
          href="/select-region"
          type="submit"
          className="w-full max-w-80 h-12 [box-shadow:0px_8px_16px_0px_#00000014] flex justify-center items-center gap-2 bg-gray-400 text-white rounded-lg "
        >
          <ArrowPrev />
          Prev
        </Link>

        {/* Button: Payment */}
        <button
          type="submit"
          className="w-full max-w-80 h-12 [box-shadow:0px_8px_16px_0px_#00000014] flex justify-center items-center gap-2 bg-primary text-white rounded-lg "
        >
          Next <ArrowNext />
        </button>
      </div>
    </form>
  );
};
export default FillInfoForm;

// Types
type PurposeTypes = "" | "buying" | "selling" | "other";
