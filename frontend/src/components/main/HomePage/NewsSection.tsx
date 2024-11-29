import LayoutContainer from "@/components/common/LayoutContainer";
import NewsCard from "@/components/NewsCard";
import { ArrowMore } from "@/components/svg";
import Link from "next/link";
import HomePageTitle from "./HomePageTitle";

const NewsSection = () => {
  return (
    <section className="w-full h-[458px pt-[126px] pb-[149px]">
      <div className="size-full border-t border-b-[0.5px] border-light flex justify-center">
        <LayoutContainer>
          <div className="flex flex-col gap-4 px-16">
            {/* Title & Read more */}
            <div className="flex justify-between items-center">
              {/* Title */}
              <HomePageTitle title="News" />

              {/* Link: Read more */}
              <Link
                href={"/news"}
                className="relative -top-[12px] typography-body-md text-deep flex gap-3 items-center"
              >
                Read More <ArrowMore />
              </Link>
            </div>

            <div className="flex gap-6">
              {/* Card1 */}
              <div className="flex-1 h-full">
                <NewsCard
                  href="/"
                  category={"Announcements"}
                  title={"Price Trends and Market Resilience"}
                  description={
                    "Despite challenges like interest rate hikes and economic pressures, property prices in Australia have remained resilient in many areas. For ......"
                  }
                  src={"/images/home-page/NewsSection/news1-fake.jpg"}
                  alt={""}
                />
              </div>

              {/* Card2 */}
              <div className="flex-1 h-full">
                <NewsCard
                  href="/"
                  category={"Other news"}
                  title={"Impact of Interest Rates and Migration"}
                  description={
                    "Interest rates continue to play a significant role in the property market, with rises making borrowing more expensive and limiting ......"
                  }
                  src={"/images/home-page/NewsSection/news2-fake.jpg"}
                  alt={""}
                />
              </div>

              {/* Card3 */}
              <div className="flex-1 h-full">
                <NewsCard
                  href="/"
                  category={"Events"}
                  title={"Distressed Selling and Economic Strain"}
                  description={
                    "With rising mortgage stress, distressed sales are becoming more common, affecting around 30% of mortgage holders. This trend is ......"
                  }
                  src={"/images/home-page/NewsSection/news3-fake.jpg"}
                  alt={""}
                />
              </div>
            </div>
          </div>
        </LayoutContainer>
      </div>
    </section>
  );
};
export default NewsSection;
