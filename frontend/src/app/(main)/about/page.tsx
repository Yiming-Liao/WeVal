import { TitleAndBreadcrumbs } from "@/components/ui";
import PageTitle from "@/components/main/AboutPage/PageTitle";
import Image from "next/image";
import { FC } from "react";
import Community from "@/components/svg/main/about-page/Community";
import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import LayoutContainer from "@/components/common/LayoutContainer";
import AdvantageCard from "@/components/main/AdvantageCard";
import Description from "@/components/main/Description";
import PageHeader from "@/components/common/PageHeader";

const AboutPage = () => {
  return (
    <>
      <section className="relative flex flex-col items-center">
        {/* Header */}
        <PageHeader
          breadcrumbsLinks={[{ href: "/", page: "Home" }]}
          currentPage={"About Us"}
          title={"About WeVal"}
        />

        <LayoutContainer>
          <div className="relative pt-5 pb-[120px]">
            {/* Description */}
            <div className="px-16 flex flex-col pb-[100px]">
              <Description text=" WEVAL PTY LTD is a forward-thinking Australian property technology company dedicated to supporting clients through every step of the home-buying process. We address critical considerations such as property pricing, condition, and risk assessment, viewing each transaction from a lender’s perspective to ensure comprehensive evaluations. Our services are delivered exclusively by local licensed valuers, guaranteeing an impartial and professional assessment. As we remain entirely independent of sales transactions, clients can have complete confidence in a conflict-free, transparent service experience." />
            </div>

            {/* Conteiner card */}
            <div className="bg-white py-[44px] px-[68px] rounded-[60px] flex gap-6 [box-shadow:0px_-8px_16px_0px_#1A259614]">
              {/* Left block */}
              <div className="flex-1 flex justify-center items-center rounded-[32px] overflow-hidden">
                <Image
                  src={"/images/about-page/container-card-background.jpg"}
                  alt={""}
                  width={816}
                  height={612}
                  className="size-full object-cover"
                />
              </div>

              {/* Right block: Cards */}
              <div className="w-96 flex flex-col gap-3">
                {/* Card1 */}
                <AdvantageCard
                  title={"Finding a local valuer"}
                  description={`Connecting you with a local licensed valuer to provide accurate property due diligence, helping you avoid overpaying and ensuring your best interests.`}
                />
                {/* Card2 */}
                <AdvantageCard
                  title={
                    "Certified Practicing Valuer/ Residential Practicing Valuer"
                  }
                  description={`Valuers registered on our platform are certified professionals, ensuring that you receive services of the highest standard.`}
                />
                {/* Card3 */}
                <AdvantageCard
                  title={"Purchasing Security"}
                  description={`For your property due diligence, we adhere to bank-level risk management standards, assuring you of a thorough and reliable assessment. We also make it clear that we are not involved in sales, eliminating any conflict of interest.`}
                />
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="pb-[115px] flex gap-4 pr-24">
            {/* Title & Description */}
            <div className="flex flex-col gap-5">
              <PageTitle title={"Success Stories"} />
              <Description text="Each feedback clearly demonstrates how our platform successfully matches you with the highest quality appraisers, ensuring that the services you receive meet professional standards and fulfill your needs." />
            </div>

            {/* Reviews */}
            <div className="relative xl:min-w-[660px]">
              {/* Card1: Top Left */}
              <div className="ml-12">
                <ReviewCard
                  name="Candy"
                  text="Despite challenges like interest rate hikes and economic pressures,
                      property prices in Australia have ......"
                />
              </div>

              {/* Card2: Bottom Right */}
              <div className="mt-[158px] ml-[333px]">
                <ReviewCard
                  name="Ken"
                  text="Despite challenges like interest rate hikes and economic pressures,
                      property prices in Australia have ......"
                />
              </div>

              {/* Card3: Middle */}
              <div className="absolute top-[35%] left-[20%] z-10">
                <ReviewCard
                  name="Summer"
                  text="Despite challenges like interest rate hikes and economic pressures,
                     property prices in Australia have ......"
                />
              </div>

              {/* Card4: Bottom Left */}
              <div className="absolute bottom-9 left-0">
                <ReviewCard
                  name="Amber"
                  text="Despite challenges like interest rate hikes and economic pressures,
                     property prices in Australia have ......"
                />
              </div>

              {/* Card5: Top Right */}
              <div className="absolute top-[100px] right-0">
                <ReviewCard
                  name="Lily"
                  text="Despite challenges like interest rate hikes and economic pressures,
                     property prices in Australia have ......"
                />
              </div>
            </div>
          </div>
        </LayoutContainer>

        {/* Background SVG */}
        <div className="absolute bottom-[69px] left-0 pointer-events-none -z-10">
          <Community />
        </div>
      </section>

      {/* Layout background */}
      <BackgroundDecoration />
    </>
  );
};
export default AboutPage;

// Fake Avatar SVG
const Avatar = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.9761 24.9666C23.0444 23.7331 21.8391 22.7328 20.455 22.0445C19.0709 21.3561 17.5459 20.9986 16.0001 21C14.4543 20.9986 12.9292 21.3561 11.5451 22.0445C10.1611 22.7328 8.95571 23.7331 8.02406 24.9666M23.9761 24.9666C25.7941 23.3496 27.0762 21.218 27.655 18.8548C28.2337 16.4915 28.0804 14.0081 27.2153 11.7339C26.3503 9.4598 24.8144 7.50234 22.8113 6.12117C20.8081 4.74 18.4325 4.00037 15.9994 4.00037C13.5663 4.00037 11.1906 4.74 9.18753 6.12117C7.18443 7.50234 5.6485 9.4598 4.78344 11.7339C3.91838 14.0081 3.76506 16.4915 4.34382 18.8548C4.92257 21.218 6.20606 23.3496 8.02406 24.9666M23.9761 24.9666C21.7814 26.9242 18.9409 28.0042 16.0001 28C13.0588 28.0045 10.219 26.9245 8.02406 24.9666M20.0001 13C20.0001 14.0608 19.5786 15.0783 18.8285 15.8284C18.0783 16.5785 17.0609 17 16.0001 17C14.9392 17 13.9218 16.5785 13.1716 15.8284C12.4215 15.0783 12.0001 14.0608 12.0001 13C12.0001 11.9391 12.4215 10.9217 13.1716 10.1715C13.9218 9.4214 14.9392 8.99997 16.0001 8.99997C17.0609 8.99997 18.0783 9.4214 18.8285 10.1715C19.5786 10.9217 20.0001 11.9391 20.0001 13Z"
        stroke="#1A2596"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Review card
const ReviewCard: FC<{ name: string; text: string }> = ({ name, text }) => {
  return (
    <div className="w-[296px] rounded-lg [box-shadow:0px_8px_16px_0px_#00000014] bg-white pt-[10px] pb-[14px] px-3 flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <Avatar />
        <p className="typography-body-md text-secondary">{name}</p>
      </div>
      <p className="typography-label-sm font-light text-deep">{text}</p>
    </div>
  );
};
