import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import LayoutContainer from "@/components/common/LayoutContainer";
import Description from "@/components/main/Description";
import ConfirmOrderForm from "@/components/main/OrderPage/ConfirmOrderForm";
import { TitleAndBreadcrumbs } from "@/components/ui";

const ConfirmOrderPage = () => {
  return (
    <>
      <section className="relative flex flex-col items-center">
        <LayoutContainer>
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
              <Description text="We will provide you with the most suitable professional appraiser to meet your needs. Simply enter your address, and the system will automatically match you with experienced appraisers in your area, ensuring that you receive the most accurate service and quickly begin your appraisal process." />
            </div>

            {/* Main */}
            <div className="w-full px-16">
              <ConfirmOrderForm />
            </div>
          </div>
        </LayoutContainer>
      </section>

      {/* Layout background */}
      <BackgroundDecoration />
    </>
  );
};
export default ConfirmOrderPage;
