import LayoutContainer from "@/components/common/LayoutContainer";
import { Arrow45deg, UserSignUpIcon, ValuerSignUpIcon } from "@/components/svg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[784px] bg-main-gradient rounded-b-[60px] overflow-hidden">
      <div className="relative size-full flex justify-center">
        {/* Background gif */}
        <div className="absolute size-full bg-hero-section-gif bg-no-repeat bg-center bg-cover opacity-20" />

        <LayoutContainer className="pt-[188px]">
          {/* Guiding card */}
          <div className="w-[946px] h-[480px] rounded-[40px] bg-glassmorphism py-12 px-16">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-9">
                {/* Title */}
                <p className="typography-title-lg text-white flex flex-col">
                  Tailored solutions for each home buyer,
                  <span>provided by licensed valuers.</span>
                </p>

                {/* Description */}
                <p className="typography-label-lg text-white">
                  We provide quick and accurate appraisals, matching you with
                  certified professionals in your area to meet your needs
                  efficiently.
                </p>
              </div>

              {/* Links */}
              <div className="flex gap-5">
                {/* Find a Valuer */}
                <div className="w-[400px] h-[120px] bg-white rounded-[32px] overflow-hidden">
                  <Link
                    href={"/user/register/page-1"}
                    className="relative size-full py-10 px-8 flex items-center gap-4"
                  >
                    <UserSignUpIcon />
                    <span className="typography-label-xl text-primary">
                      Request a Valuation
                    </span>

                    <div className="absolute top-5 right-5 size-[52px] bg-primary rounded-full flex justify-center items-center">
                      <Arrow45deg />
                    </div>
                  </Link>
                </div>

                {/* Become a Valuer */}
                <div className="w-[400px] h-[120px] bg-white rounded-[32px] overflow-hidden">
                  <Link
                    href={"/valuer/register/page-1"}
                    className="relative size-full py-10 px-8 flex items-center gap-4"
                  >
                    <ValuerSignUpIcon />
                    <span className="typography-label-xl text-primary">
                      Become a Valuer
                    </span>

                    <div className="absolute top-5 right-5 size-[52px] bg-primary rounded-full flex justify-center items-center">
                      <Arrow45deg />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </LayoutContainer>
      </div>
    </section>
  );
};
export default HeroSection;
