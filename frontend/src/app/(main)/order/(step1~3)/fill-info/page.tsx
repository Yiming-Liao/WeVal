import FillInfoForm from "@/components/main/OrderPage/FillInfoForm";
import { TitleAndBreadcrumbs } from "@/components/ui";

const FillInfoPage = () => {
  return (
    <div className="relative flex flex-col items-center">
      <section className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px]">
        {/* Title & Breadcrumbs */}
        <TitleAndBreadcrumbs
          links={[
            { href: "/", page: "Home" },
            { href: "/order/select-region", page: "Select region" },
          ]}
          currentPage={"Fill in Order Information"}
          title={"Fill in Order Information"}
        />

        <div className="relative pt-5 pb-[76px] flex flex-col items-center">
          {/* Description */}
          <div className="px-16 flex flex-col pb-[100px]">
            <p className="typography-body-md leading-[28px] text-secondary font-light">
              We will provide you with the most suitable professional appraiser
              to meet your needs. Simply enter your address, and the system will
              automatically match you with experienced appraisers in your area,
              ensuring that you receive the most accurate service and quickly
              begin your appraisal process.
            </p>
          </div>

          {/* Main */}
          <div className="w-full max-w-[1040px] px-16">
            <FillInfoForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FillInfoPage;
