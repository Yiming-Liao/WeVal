const OurAdvantagesSection = () => {
  return (
    <section className="w-full pt-[76px] pb-[104px]">
      <div className="size-full border-t border-b-[0.5px] border-light flex justify-center">
        <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px] px-16">
          <div className="flex flex-col gap-4">
            {/* Title */}
            <h2 className="typography-title-lg text-deep relative top-[-12px] ">
              Our Advantages
            </h2>

            <div className="flex gap-6">
              {/* Card1 */}
              <div className="flex-1 py-6 px-5 bg-[#F0F3FA] rounded-[20px] flex flex-col gap-6">
                <h3 className="typography-body-md font-medium text-primary">
                  Finding a local valuer
                </h3>
                <p className="typography-body-sm font-light text-primary">
                  Connecting you with a local licensed valuer to provide
                  accurate property due diligence, helping you avoid overpaying
                  and ensuring your best interests.
                </p>
              </div>
              {/* Card2 */}
              <div className="flex-1 py-6 px-5 bg-[#F0F3FA] rounded-[20px] flex flex-col gap-6">
                <h3 className="typography-body-md font-medium text-primary">
                  Certified Practicing Valuer/ Residential Practicing Valuer
                </h3>
                <p className="typography-body-sm font-light text-primary">
                  Valuers registered on our platform are certified
                  professionals, ensuring that you receive services of the
                  highest standard.
                </p>
              </div>
              {/* Card3 */}
              <div className="flex-1 py-6 px-5 bg-[#F0F3FA] rounded-[20px] flex flex-col gap-6">
                <h3 className="typography-body-md font-medium text-primary">
                  Purchasing Security
                </h3>
                <p className="typography-body-sm font-light text-primary">
                  For your property due diligence, we adhere to bank-level risk
                  management standards, assuring you of a thorough and reliable
                  assessment. We also make it clear that we are not involved in
                  sales, eliminating any conflict of interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurAdvantagesSection;
