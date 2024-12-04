import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import LayoutContainer from "@/components/common/LayoutContainer";
import PageHeader from "@/components/common/PageHeader";
import Description from "@/components/main/Description";
import FillInfoForm from "@/components/main/OrderPage/FillInfoForm";

const FillInfoPage = () => {
  return (
    <>
      <section className="relative flex flex-col items-center">
        {/* Header */}
        <PageHeader
          breadcrumbsLinks={[
            { href: "/", page: "Home" },
            { href: "/order/select-region", page: "Select region" },
          ]}
          currentPage={"Fill in Order Information"}
          title={"Fill in Order Information"}
        />

        <LayoutContainer>
          <div className="relative pt-5 pb-[76px] flex flex-col items-center">
            {/* Description */}
            <div className="px-16 flex flex-col pb-[100px]">
              <Description text="We will provide you with the most suitable professional appraiser to meet your needs. Simply enter your address, and the system will automatically match you with experienced appraisers in your area, ensuring that you receive the most accurate service and quickly begin your appraisal process." />
            </div>

            {/* Main */}
            <div className="w-full max-w-[1040px] px-16">
              <FillInfoForm />
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Layout background */}
      <BackgroundDecoration />
    </>
  );
};

export default FillInfoPage;
