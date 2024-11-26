import { Accordion } from "@/components/ui";

const QASection = () => {
  return (
    <section className="w-full pt-[126px] pb-[196px]">
      <div className="size-full border-t border-light flex justify-center">
        <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px] px-16">
          <div className="flex flex-col gap-4 ic">
            {/* Title */}
            <div className="relative top-[-12px]">
              <h2 className="typography-title-lg text-deep">Q&A</h2>
            </div>

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
        </div>
      </div>
    </section>
  );
};
export default QASection;
