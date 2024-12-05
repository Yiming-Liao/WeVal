import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import LayoutContainer from "@/components/common/LayoutContainer";
import PageHeader from "@/components/common/PageHeader";
import Description from "@/components/main/Description";
import { FullLogoBlue } from "@/components/svg";
import Buildings from "@/components/svg/main/contact-page/Buildings";
import { Button, Input, Select } from "@/components/ui";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <div className="relative flex flex-col items-center">
        {/* Header */}
        <PageHeader
          breadcrumbsLinks={[{ href: "/", page: "Home" }]}
          currentPage={"Contact Us"}
          title={"Contact Us"}
        />

        <LayoutContainer>
          <div className="relative pt-5 pb-[145px] flex flex-col items-center">
            {/* <section> Description */}
            <section className="px-16 flex flex-col pb-[100px]">
              <Description text="If you have any questions, needs, or require further assistance, please feel free to contact us at any time. Our team is committed to providing you with the fastest and most professional service, ensuring that every inquiry is properly addressed." />
            </section>

            {/* <section> Form */}
            <section className="w-full max-w-[1040px] px-16">
              <form className="flex flex-col gap-14">
                <FullLogoBlue />

                {/* Inputs */}
                <div className="flex gap-10">
                  <div className="flex-1 max-w-[324px] flex flex-col gap-3">
                    {/* Input: Name */}
                    <Input placeholder="Name" />
                    {/* Input: Email */}
                    <Input placeholder="Email" />
                    {/* Input: Phone */}
                    <Input placeholder="Phone number" />
                  </div>
                  <div className="flex-1 max-w-[324px] flex flex-col gap-3">
                    {/* Select: region */}
                    <Select
                      required
                      // value={serviceArea}
                      // onChange={(e) => setServiceArea(e.target.value)}
                    >
                      <option value="" disabled hidden>
                        Select region
                      </option>
                      <option value="queensland">Queensland</option>
                      <option value="south_australia">South Australia</option>
                    </Select>

                    {/* Select: type */}
                    <Select
                      required
                      // value={serviceArea}
                      // onChange={(e) => setServiceArea(e.target.value)}
                    >
                      <option value="" disabled hidden>
                        Question type
                      </option>
                      <option value="queensland">Queensland</option>
                      <option value="south_australia">South Australia</option>
                    </Select>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[0.25px] bg-primary" />

                {/* Text & Submit button */}
                <div className="flex flex-col items-end gap-[88px]">
                  <div className="w-full flex flex-col gap-3">
                    <label className="typography-label-xl text-secondary">
                      Your feedback and requests
                    </label>
                    {/* Text */}
                    <textarea
                      className="h-[280px] p-4 border border-black/25 rounded-lg"
                      placeholder="Write down here..."
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    className="w-full max-w-80 [box-shadow:0px_8px_16px_0px_#00000014]"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </section>
          </div>
        </LayoutContainer>

        {/* Background Image & SVG */}
        <div className="absolute bottom-0 left-0 w-full h-[428px] pointer-events-none rounded-t-[60px] overflow-hidden -z-10">
          <Image
            src={"/images/contact-page/background.jpg"}
            alt={""}
            width={1920}
            height={428}
            className="size-full object-cover"
          />

          <div className="absolute  bottom-0 left-20">
            <Buildings />
          </div>
        </div>
      </div>

      {/* Layout background */}
      <BackgroundDecoration />
    </>
  );
};
export default ContactPage;
