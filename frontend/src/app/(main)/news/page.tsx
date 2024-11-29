import NewsCard from "@/components/NewsCard";
import { TitleAndBreadcrumbs } from "@/components/ui";
import Link from "next/link";

const NewsAllPage = () => {
  return (
    <div className="relative flex flex-col items-center">
      <section className="size-full flex flex-col items-center">
        <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px]">
          {/* Title & Breadcrumbs */}
          <TitleAndBreadcrumbs
            links={[{ href: "/", page: "Home" }]}
            currentPage={"News"}
            title={"News"}
          />
        </div>

        {/* Category links */}
        <div className="w-full border-b-[0.25px] border-secondary flex justify-center">
          <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px] pt-10 pl-16">
            <div className="flex gap-2">
              <Link
                href={"/news"}
                className="-ml-2 px-3 typography-label-lg text-secondary flex justify-center"
              >
                <span className="py-2 border-b border-secondary">All</span>
              </Link>
              <Link
                href={"/news/announcements"}
                className="px-3 typography-label-lg text-secondary flex justify-center"
              >
                <span className="py-2">Announcements</span>
              </Link>
              <Link
                href={"/news/events"}
                className="px-3 typography-label-lg text-secondary flex justify-center"
              >
                <span className="py-2">Events</span>
              </Link>
              <Link
                href={"/news/other-news"}
                className="px-3 typography-label-lg text-secondary flex justify-center"
              >
                <span className="py-2">Other news</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px] pt-20 pb-[120px] flex flex-col gap-[92px]">
          <div className="px-16">
            <p className="typography-body-md leading-7 text-secondary font-light">
              Weval Solutions Pty Ltd is a dynamic Australian-based technology
              firm specializing in innovative solutions for the real estate and
              appraisal industry. With a focus on leveraging cutting-edge
              technologies, Weval aims to streamline the connection between
              clients and certified appraisers, ensuring accurate, transparent,
              and efficient appraisal processes. The {`company's`} platform is
              designed to match clients with licensed professionals quickly,
              while also providing a seamless and secure transaction
              environment. Weval is committed to delivering exceptional customer
              experiences through personalized services, state-of-the-art tools,
              and a user-centric approach to solving industry challenges.
            </p>
          </div>

          {/* News cards */}
          <div className="px-9 flex flex-wrap gap-6">
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
          </div>
        </div>
      </section>
    </div>
  );
};
export default NewsAllPage;
