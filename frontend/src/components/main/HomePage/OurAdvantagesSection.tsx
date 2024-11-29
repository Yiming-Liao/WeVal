import LayoutContainer from "@/components/common/LayoutContainer";
import AdvantageCard from "@/components/main/AdvantageCard";
import HomePageTitle from "./HomePageTitle";

const OurAdvantagesSection = () => {
  return (
    <section className="w-full pt-[76px] pb-[104px]">
      <div className="size-full border-t border-b-[0.5px] border-light flex justify-center">
        <LayoutContainer>
          <div className="flex flex-col gap-4 px-16">
            {/* Title */}
            <HomePageTitle title="Our Advantages" />

            <div className="flex gap-6">
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
        </LayoutContainer>
      </div>
    </section>
  );
};
export default OurAdvantagesSection;
