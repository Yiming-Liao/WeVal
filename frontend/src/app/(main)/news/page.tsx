import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import LayoutContainer from "@/components/common/LayoutContainer";
import PageHeader from "@/components/common/PageHeader";
import Description from "@/components/main/Description";
import NewsCard from "@/components/main/NewsCard";
import { TabsSet } from "@/types/tabsSet.types";

const NewsAllPage = () => {
  return (
    <>
      <div className="relative flex flex-col items-center">
        <div className="size-full flex flex-col items-center">
          {/* Header */}
          <PageHeader
            breadcrumbsLinks={[{ href: "/", page: "Home" }]}
            currentPage={"News"}
            title={"News"}
            tabs={TabsSet.NEWS}
          />

          {/* Main */}
          <LayoutContainer>
            <div className="pt-20 pb-[120px] flex flex-col gap-[92px]">
              {/* <section> Description */}
              <section className="px-16">
                <Description
                  text={`Weval Solutions Pty Ltd is a dynamic Australian-based technology firm specializing in innovative solutions for the real estate and appraisal industry. With a focus on leveraging cutting-edge technologies, Weval aims to streamline the connection between clients and certified appraisers, ensuring accurate, transparent, and efficient appraisal processes. The company's platform is designed to match clients with licensed professionals quickly, while also providing a seamless and secure transaction environment. Weval is committed to delivering exceptional customer experiences through personalized services, state-of-the-art tools, and a user-centric approach to solving industry challenges.`}
                />
              </section>

              {/* <section> News cards */}
              <section className="px-9 flex flex-wrap gap-6">
                <NewsCard
                  href="/news/events/impact"
                  category={"Announcements"}
                  title={"Price Trends and Market Resilience"}
                  description={
                    "Despite challenges like interest rate hikes and economic pressures, property prices in Australia have remained resilient in many areas. For ......"
                  }
                  src={"/images/home-page/NewsSection/news1-fake.jpg"}
                  alt={""}
                />
                <NewsCard
                  href="/news/events/impact"
                  category={"Announcements"}
                  title={"Price Trends and Market Resilience"}
                  description={
                    "Despite challenges like interest rate hikes and economic pressures, property prices in Australia have remained resilient in many areas. For ......"
                  }
                  src={"/images/home-page/NewsSection/news2-fake.jpg"}
                  alt={""}
                />
                <NewsCard
                  href="/news/events/impact"
                  category={"Announcements"}
                  title={"Price Trends and Market Resilience"}
                  description={
                    "Despite challenges like interest rate hikes and economic pressures, property prices in Australia have remained resilient in many areas. For ......"
                  }
                  src={"/images/home-page/NewsSection/news3-fake.jpg"}
                  alt={""}
                />
                <NewsCard
                  href="/news/events/impact"
                  category={"Announcements"}
                  title={"Price Trends and Market Resilience"}
                  description={
                    "Despite challenges like interest rate hikes and economic pressures, property prices in Australia have remained resilient in many areas. For ......"
                  }
                  src={"/images/home-page/NewsSection/news1-fake.jpg"}
                  alt={""}
                />
                <NewsCard
                  href="/news/events/impact"
                  category={"Announcements"}
                  title={"Price Trends and Market Resilience"}
                  description={
                    "Despite challenges like interest rate hikes and economic pressures, property prices in Australia have remained resilient in many areas. For ......"
                  }
                  src={"/images/home-page/NewsSection/news2-fake.jpg"}
                  alt={""}
                />
                <NewsCard
                  href="/news/events/impact"
                  category={"Announcements"}
                  title={"Price Trends and Market Resilience"}
                  description={
                    "Despite challenges like interest rate hikes and economic pressures, property prices in Australia have remained resilient in many areas. For ......"
                  }
                  src={"/images/home-page/NewsSection/news3-fake.jpg"}
                  alt={""}
                />
                <NewsCard
                  href="/news/events/impact"
                  category={"Announcements"}
                  title={"Price Trends and Market Resilience"}
                  description={
                    "Despite challenges like interest rate hikes and economic pressures, property prices in Australia have remained resilient in many areas. For ......"
                  }
                  src={"/images/home-page/NewsSection/news1-fake.jpg"}
                  alt={""}
                />
                <NewsCard
                  href="/news/events/impact"
                  category={"Announcements"}
                  title={"Price Trends and Market Resilience"}
                  description={
                    "Despite challenges like interest rate hikes and economic pressures, property prices in Australia have remained resilient in many areas. For ......"
                  }
                  src={"/images/home-page/NewsSection/news2-fake.jpg"}
                  alt={""}
                />
                <NewsCard
                  href="/news/events/impact"
                  category={"Announcements"}
                  title={"Price Trends and Market Resilience"}
                  description={
                    "Despite challenges like interest rate hikes and economic pressures, property prices in Australia have remained resilient in many areas. For ......"
                  }
                  src={"/images/home-page/NewsSection/news3-fake.jpg"}
                  alt={""}
                />
              </section>
            </div>
          </LayoutContainer>
        </div>
      </div>

      {/* Layout background */}
      <BackgroundDecoration noBorder />
    </>
  );
};
export default NewsAllPage;
