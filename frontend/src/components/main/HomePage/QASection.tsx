import LayoutContainer from "@/components/common/LayoutContainer";
import Building from "@/components/svg/main/home-page/QASection/Building";
import { Accordion } from "@/components/ui";
import HomePageTitle from "./HomePageTitle";

const QASection = () => {
  return (
    <section className="relative w-full pb-[196px]">
      <div className="size-full border-t border-light flex justify-center">
        <LayoutContainer>
          <div className="flex flex-col gap-4 px-16">
            {/* Title */}
            <HomePageTitle title="Q&A" />

            <div className="flex justify-center">
              <div className="max-w-[924px] flex flex-col">
                {/* Accordion1 */}
                <Accordion
                  buttonText={
                    "What information is included in an appraisal report?"
                  }
                  bodyText={
                    "An appraisal report typically includes the property's market value, type, location, size, condition, materials, year built, and an analysis of the local market."
                  }
                />
                {/* Accordion2 */}
                <Accordion
                  buttonText={"How long does it take to complete an appraisal?"}
                  bodyText={
                    "An appraisal report typically includes the property's market value, type, location, size, condition, materials, year built, and an analysis of the local market."
                  }
                />
                {/* Accordion3 */}
                <Accordion
                  buttonText={
                    "Does the appraisal affect the buying or selling price?"
                  }
                  bodyText={
                    "An appraisal report typically includes the property's market value, type, location, size, condition, materials, year built, and an analysis of the local market."
                  }
                />
                {/* Accordion1 */}
                <Accordion
                  buttonText={
                    "Does the appraisal affect the buying or selling price?"
                  }
                  bodyText={
                    "An appraisal report typically includes the property's market value, type, location, size, condition, materials, year built, and an analysis of the local market."
                  }
                />
                {/* Accordion1 */}
                <Accordion
                  buttonText={
                    "What information is included in an appraisal report?"
                  }
                  bodyText={
                    "An appraisal report typically includes the property's market value, type, location, size, condition, materials, year built, and an analysis of the local market."
                  }
                />
              </div>
            </div>
          </div>
        </LayoutContainer>
      </div>

      {/* Background SVG */}
      <div className="absolute bottom-[72px] left-[-15px]">
        <Building />
      </div>
    </section>
  );
};
export default QASection;
