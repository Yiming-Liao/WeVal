import { ArrowMore } from "@/components/svg";
import Image from "next/image";
import Link from "next/link";

const NewsSection = () => {
  return (
    <section className="w-full h-[458px pt-[126px] pb-[149px]">
      <div className="size-full border-t border-b-[0.5px] border-light flex justify-center">
        <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px] px-16">
          <div className="flex flex-col gap-4">
            {/* Title */}
            <div className="relative top-[-12px] flex justify-between items-center">
              <h2 className="typography-title-lg text-deep">News</h2>
              <Link
                href={""}
                className="typography-body-md text-deep flex gap-3 items-center"
              >
                Read More <ArrowMore />
              </Link>
            </div>

            <div className="flex gap-6">
              {/* Card1 */}
              <div className="flex-1 bg-[#F0F3FA] rounded-[20px] flex flex-col gap-2">
                {/* Top */}
                <div className="flex flex-col gap-12 p-5 pb-0">
                  <h4 className="typography-body-sm text-silver">
                    Announcements
                  </h4>
                  <div className="flex flex-col gap4">
                    <h3 className="typography-body-md font-medium text-primary">
                      Price Trends and Market Resilience
                    </h3>
                    <p className="typography-body-sm font-light text-deep">
                      Despite challenges like interest rate hikes and economic
                      pressures, property prices in Australia have remained
                      resilient in many areas. For ......
                    </p>
                  </div>
                </div>

                {/* Bottom */}
                <div>
                  <Image
                    src={"/images/home-page/NewsSection/news1-fake.jpg"}
                    alt={""}
                    width={418}
                    height={314}
                  />
                </div>
              </div>

              {/* Card1 */}
              <div className="flex-1 bg-[#F0F3FA] rounded-[20px] flex flex-col gap-2">
                {/* Top */}
                <div className="flex flex-col gap-12 p-5 pb-0">
                  <h4 className="typography-body-sm text-silver">
                    Announcements
                  </h4>
                  <div className="flex flex-col gap4">
                    <h3 className="typography-body-md font-medium text-primary">
                      Impact of Interest Rates and Migration
                    </h3>
                    <p className="typography-body-sm font-light text-deep">
                      Interest rates continue to play a significant role in the
                      property market, with rises making borrowing more
                      expensive and limiting ......
                    </p>
                  </div>
                </div>

                {/* Bottom */}
                <div>
                  <Image
                    src={"/images/home-page/NewsSection/news2-fake.jpg"}
                    alt={""}
                    width={418}
                    height={314}
                  />
                </div>
              </div>

              {/* Card1 */}
              <div className="flex-1 bg-[#F0F3FA] rounded-[20px] flex flex-col gap-2">
                {/* Top */}
                <div className="flex flex-col gap-12 p-5 pb-0">
                  <h4 className="typography-body-sm text-silver">
                    Announcements
                  </h4>
                  <div className="flex flex-col gap4">
                    <h3 className="typography-body-md font-medium text-primary">
                      Distressed Selling and Economic Strain
                    </h3>
                    <p className="typography-body-sm font-light text-deep">
                      With rising mortgage stress, distressed sales are becoming
                      more common, affecting around 30% of mortgage holders.
                      This trend is ......
                    </p>
                  </div>
                </div>

                {/* Bottom */}
                <div>
                  <Image
                    src={"/images/home-page/NewsSection/news3-fake.jpg"}
                    alt={""}
                    width={418}
                    height={314}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsSection;
