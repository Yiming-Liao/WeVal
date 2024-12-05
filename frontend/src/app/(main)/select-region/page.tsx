import LayoutContainer from "@/components/common/LayoutContainer";
import PageHeader from "@/components/common/PageHeader";
import Description from "@/components/main/Description";
import MainFeatureSection from "@/components/main/MainFeature";

const SelectRegionPage = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Header */}
      <PageHeader
        breadcrumbsLinks={[{ href: "/", page: "Home" }]}
        currentPage={"Select region"}
        title={"Select region"}
      />

      {/* <section> Description */}
      <LayoutContainer>
        <section className="px-16 flex flex-col pt-8 pb-12 border-x border-light">
          <Description text="Please select your region to proceed with creating a valuation request order." />
        </section>
      </LayoutContainer>

      {/* <section> Main feature */}
      <section className="w-full pb-24">
        <MainFeatureSection />
      </section>
    </div>
  );
};

export default SelectRegionPage;
