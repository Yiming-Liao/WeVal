"use client";

import { TitleAndBreadcrumbs } from "@/components/ui";
import { useOrderStore } from "@/hooks/user/orders/useOrderStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DATA = {
  username: "Candy Lee",
  ownerName: "Mandy",
  ownerPhone: "+61000222343",
  region: "Victoria",
  address: "500 George Street, Sydney City Center",
  priceRange: "0M_to_1M",
};

const ConfirmOrderPage = () => {
  const { push } = useRouter();
  const { orderStore } = useOrderStore();

  //
  const handlePayment = async () => {
    const paymentUrl = await orderStore({
      ownerName: DATA.ownerName,
      ownerPhone: DATA.ownerPhone,
      region: DATA.region,
      address: DATA.address,
      priceRange: DATA.priceRange,
    });

    if (paymentUrl) push(paymentUrl);
  };

  return (
    <div className="relative flex flex-col items-center">
      <section className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px]">
        {/* Title & Breadcrumbs */}
        <TitleAndBreadcrumbs
          links={[
            { href: "/", page: "Home" },
            { href: "/order/select-region", page: "Select region" },
            { href: "/order/fill-info", page: "Fill in Order Information" },
          ]}
          currentPage={"Confirm order"}
          title={"Confirm order"}
        />

        <div className="relative pt-5 pb-[76px] flex flex-col items-center gap-12">
          {/* Description */}
          <div className="px-16 flex flex-col">
            <p className="typography-body-md leading-[28px] text-secondary font-light">
              We will provide you with the most suitable professional appraiser
              to meet your needs. Simply enter your address, and the system will
              automatically match you with experienced appraisers in your area,
              ensuring that you receive the most accurate service and quickly
              begin your appraisal process.
            </p>
          </div>

          {/* Main */}
          <div className="w-full px-16 flex flex-col gap-12">
            <div className="bg-white rounded-xl p-12 [box-shadow:0px_8px_16px_0px_#00000014] flex gap-36">
              <div className="flex flex-col gap-7 justify-between">
                {/* Owner name */}
                <div className="w-max flex flex-col gap-6 typography-label-md">
                  <label className="text-silver font-medium">
                    Property owner
                  </label>
                  <p className="text-deep">{DATA.ownerName}</p>
                </div>

                {/* Owner number */}
                <div className="w-max flex flex-col gap-6 typography-label-md">
                  <label className="text-silver font-medium">
                    Contact number
                  </label>
                  <p className="text-deep">{DATA.ownerPhone}</p>
                </div>
              </div>

              <div className="flex flex-col gap-7 justify-between">
                {/* Request address */}
                <div className="w-max flex flex-col gap-6 typography-label-md">
                  <label className="text-silver font-medium">
                    Request address
                  </label>
                  {/* Region */}
                  <div className="flex flex-col gap-2">
                    <p className="text-deep">{DATA.region}</p>
                    {/* Full address */}
                    <p className="text-deep font-light">{DATA.address}</p>
                  </div>
                </div>

                {/* House Price Range */}
                <div className="w-max flex flex-col gap-6 typography-label-md">
                  <label className="text-silver font-medium">
                    House Price Range
                  </label>
                  <p className="text-deep">{DATA.priceRange}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              {/* Button: Payment */}
              <Link
                href="/order/fill-info"
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
                onClick={handlePayment}
                className="w-full max-w-80 h-12 [box-shadow:0px_8px_16px_0px_#00000014] flex justify-center items-center gap-2 bg-primary text-white rounded-lg"
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConfirmOrderPage;

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
