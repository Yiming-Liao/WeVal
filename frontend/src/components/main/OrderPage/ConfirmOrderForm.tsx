"use client";

import { FormEventHandler } from "react";
import { ArrowPrev } from "@/components/svg";
import Field from "@/components/ui/Field";
import { useOrderStore } from "@/hooks/user/orders/useOrderStore";
import { useOrderDataStore } from "@/stores/orderDataStore";
import { PAYMENT_AMOUNT } from "@/types/stripe/priceRange.types";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ConfirmOrderForm = () => {
  const { push } = useRouter();
  const { orderStore } = useOrderStore();
  const { region, address, priceRange, ownerName, ownerPhone } =
    useOrderDataStore();

  // ⚡ Save order and redirect to Stripe
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const yes = confirm("Are you sure?");
    if (!yes) return;

    const paymentUrl = await orderStore({
      region,
      address,
      priceRange,
      ownerName,
      ownerPhone,
    });

    if (paymentUrl) push(paymentUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12">
      {/* Order card */}
      <div className="bg-white rounded-xl p-12 [box-shadow:0px_8px_16px_0px_#00000014] flex gap-12">
        {/* Column 1 */}
        <div className="min-w-64 max-w-80 flex flex-col gap-7 justify-between">
          {/* Property Address */}
          <div className="flex flex-col gap-6 typography-label-md">
            <label className="text-silver font-medium">Property Address</label>
            {/* Region */}
            <div className="flex flex-col gap-2">
              <p className="text-deep">
                {(region &&
                  region
                    .split("_")
                    .map((str) => str[0].toUpperCase() + str.slice(1))
                    .join(" ")) ||
                  ""}
              </p>
              {/* Full address */}
              <p className="text-deep font-light overflow-auto text-nowrap">
                {address || ""}
              </p>
            </div>
          </div>

          {/* House Price Range */}
          <Field
            label="House Price Range"
            data={priceRange.split("_").join(" ")}
          />
        </div>

        {/* Column 2 */}
        <div className="min-w-64 max-w-80 flex flex-col gap-7 justify-between">
          {/* Owner name */}
          <Field label="Property owner" data={ownerName || ""} />

          {/* Owner number */}
          <Field label="Owner's phone number" data={ownerPhone || ""} />
        </div>

        {/* Column 3 */}
        <div className="self-end">
          {/* Totle */}
          <Field
            label="Total"
            data={`AUD $ ${
              priceRange !== "" ? PAYMENT_AMOUNT[priceRange] : ""
            }`}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        {/* Button: Payment */}
        <Link
          href="/select-region/fill-info"
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
          Confirm & Pay
        </button>
      </div>
    </form>
  );
};
export default ConfirmOrderForm;
