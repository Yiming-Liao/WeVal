import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import LayoutContainer from "@/components/common/LayoutContainer";
import PageHeader from "@/components/common/PageHeader";
import Description from "@/components/main/Description";
import ConfirmOrderForm from "@/components/main/OrderPage/ConfirmOrderForm";

const ConfirmOrderPage = () => {
  return (
    <>
      <div className="relative flex flex-col items-center">
        {/* Header */}
        <PageHeader
          breadcrumbsLinks={[
            { href: "/", page: "Home" },
            { href: "/select-region", page: "Select region" },
            {
              href: "/select-region/fill-info",
              page: "Fill in Order Information",
            },
          ]}
          currentPage={"Confirm order"}
          title={"Confirm order"}
        />

        <LayoutContainer>
          <div className="relative pt-5 pb-[76px] flex flex-col items-center gap-12">
            {/* <section> Description */}
            <section className="px-16 flex flex-col">
              <Description text="We will provide you with the most suitable professional appraiser to meet your needs. Simply enter your address, and the system will automatically match you with experienced appraisers in your area, ensuring that you receive the most accurate service and quickly begin your appraisal process." />
            </section>

            {/* <section> Form */}
            <section className="w-full px-16">
              <ConfirmOrderForm />
            </section>
          </div>
        </LayoutContainer>
      </div>

      {/* Layout background */}
      <BackgroundDecoration />
    </>
  );
};
export default ConfirmOrderPage;
