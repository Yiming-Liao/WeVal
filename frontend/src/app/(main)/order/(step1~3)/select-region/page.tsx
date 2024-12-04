import LayoutContainer from "@/components/common/LayoutContainer";
import PageHeader from "@/components/common/PageHeader";
import Description from "@/components/main/Description";
import MainFeatureSection from "@/components/main/MainFeature";

const SelectRegionPage = () => {
  return (
    <section className="relative flex flex-col items-center">
      {/* Header */}
      <PageHeader
        breadcrumbsLinks={[{ href: "/", page: "Home" }]}
        currentPage={"Select region"}
        title={"Select region"}
      />

      {/* Description */}
      <LayoutContainer>
        <div className="px-16 flex flex-col pt-8 pb-12 border-x border-light">
          <Description text="Please select your region to proceed with creating a valuation request order." />
        </div>
      </LayoutContainer>

      {/* Main feature */}
      <div className="w-full pb-24">
        <MainFeatureSection />
      </div>
    </section>
  );
};

export default SelectRegionPage;
