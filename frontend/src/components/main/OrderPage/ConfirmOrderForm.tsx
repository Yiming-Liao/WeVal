"use client";

import { useOrderStore } from "@/hooks/user/orders/useOrderStore";
import { PAYMENT_AMOUNT, PriceRange } from "@/types/stripe/priceRange.types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, FormEventHandler } from "react";

const ConfirmOrderForm = () => {
  const { push } = useRouter();
  const { orderStore } = useOrderStore();

  // ⚡ Save order and redirect to Stripe
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const yes = confirm("Are you sure?");
    if (!yes) return;

    const paymentUrl = await orderStore({
      ownerName: sessionStorage.getItem("ownerName") || "",
      ownerPhone: sessionStorage.getItem("ownerPhone") || "",
      region: sessionStorage.getItem("region") || "",
      address: sessionStorage.getItem("address") || "",
      priceRange: sessionStorage.getItem("priceRange") || "",
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
                {sessionStorage
                  .getItem("region")
                  ?.split("_")
                  .map((str) => str[0].toUpperCase() + str.slice(1))
                  .join(" ") || ""}
              </p>
              {/* Full address */}
              <p className="text-deep font-light overflow-auto text-nowrap">
                {sessionStorage.getItem("address") || ""}
              </p>
            </div>
          </div>

          {/* House Price Range */}
          <Field
            label="House Price Range"
            data={(() => {
              const priceRange = sessionStorage.getItem(
                "priceRange"
              ) as PriceRange | null;
              if (priceRange && priceRange in PAYMENT_AMOUNT) {
                return `${priceRange.split("_").join(" ")}`;
              }
              return "";
            })()}
          />
        </div>

        {/* Column 2 */}
        <div className="min-w-64 max-w-80 flex flex-col gap-7 justify-between">
          {/* Owner name */}
          <Field
            label="Property owner"
            data={sessionStorage.getItem("ownerName") || ""}
          />

          {/* Owner number */}
          <Field
            label="Owner's phone number"
            data={sessionStorage.getItem("ownerPhone") || ""}
          />
        </div>

        {/* Column 3 */}
        <div className="self-end">
          {/* Totle */}
          <Field
            label="Total"
            data={(() => {
              const priceRange = sessionStorage.getItem(
                "priceRange"
              ) as PriceRange | null;
              if (priceRange && priceRange in PAYMENT_AMOUNT) {
                return `$ ${PAYMENT_AMOUNT[priceRange]}`;
              }
              return "";
            })()}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        {/* Button: Payment */}
        <Link
          href="/order/fill-info"
          className="w-full max-w-80 h-12 [box-shadow:0px_8px_16px_0px_#00000014] flex justify-center items-center gap-2 bg-gray-400 text-white rounded-lg button-interaction"
        >
          <span className="rotate-180">
            <Arrow />
          </span>
          Prev
        </Link>

        {/* Button: Payment */}
        <button
          type="submit"
          className="w-full max-w-80 h-12 [box-shadow:0px_8px_16px_0px_#00000014] flex justify-center items-center gap-2 bg-primary text-white rounded-lg button-interaction"
        >
          Confirm & Pay
        </button>
      </div>
    </form>
  );
};
export default ConfirmOrderForm;

const Field: FC<{ label: string; data: string }> = ({ label, data }) => {
  return (
    <div className="w-max flex flex-col gap-6 typography-label-md">
      <label className="text-silver font-medium">{label}</label>
      <p className="text-deep">{data}</p>
    </div>
  );
};

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
