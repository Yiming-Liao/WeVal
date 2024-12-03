"use client";

import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import LayoutContainer from "@/components/common/LayoutContainer";
import PageHeader from "@/components/common/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NewsDetailPage = ({ id }: { id: string }) => {
  console.log(id);

  const category = usePathname().split("/")[2];

  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1).split("-").join(" ");

  return (
    <>
      <div className="relative flex flex-col items-center">
        <section className="size-full flex flex-col items-center">
          {/* Header */}
          <PageHeader
            breadcrumbsLinks={[
              { href: "/", page: "Home" },
              { href: "/news", page: "News" },
              { href: `/news/${category}`, page: `${formattedCategory}` },
            ]}
            currentPage={"News title"}
            title={"News title"}
            tabs={[
              {
                text: "All",
                href: "/news",
                isActive: false,
              },
              {
                text: "Announcements",
                href: "/news/announcements",
                isActive: category === "announcements",
              },
              {
                text: "Events",
                href: "/news/events",
                isActive: category === "events",
              },
              {
                text: "Other news",
                href: "/news/other-news",
                isActive: category === "other-news",
              },
            ]}
          />

          {/* Main */}
          <LayoutContainer>
            <div className="pt-20 pb-12 flex flex-col items-center gap-[92px]">
              <div className="lg:px-16 max-w-[680px] flex flex-col items-center gap-10">
                {/* Category & Title */}
                <div className="flex flex-col items-center gap-4">
                  {/* Category */}
                  <h2 className="typography-body-md text-[#A9ADBB]">
                    {formattedCategory}
                  </h2>

                  {/* Title */}
                  <h1 className="typography-title-md text-secondary">
                    Impact of Interest Rates and Migration
                  </h1>
                </div>

                {/* Image */}
                <Image
                  src={"https://placehold.co/680x520/EEE/31343C"}
                  alt={""}
                  width={680}
                  height={520}
                  unoptimized
                />

                {/* Text */}
                <p className="typography-body-md leading-7 text-deep font-light">
                  Weval Solutions Pty Ltd is a dynamic Australian-based
                  technology firm specializing in innovative solutions for the
                  real estate and appraisal industry. With a focus on leveraging
                  cutting-edge technologies, Weval aims to streamline the
                  connection between clients and certified appraisers, ensuring
                  accurate, transparent, and efficient appraisal processes. The{" "}
                  {`company's`} platform is designed to match clients with
                  licensed professionals quickly, while also providing a
                  seamless and secure transaction environment. Weval is
                  committed to delivering exceptional customer experiences
                  through personalized services, state-of-the-art tools, and a
                  user-centric approach to solving industry challenges.
                </p>
              </div>

              {/* Nav buttons */}
              <div className="w-full px-16 flex justify-between">
                {/* Prev */}
                <Link href={""} className="flex items-center gap-2 py-4 px-8">
                  <Arrow />
                  <span className="typography-body-md text-deep font-light">
                    Prev
                  </span>
                </Link>

                {/* Next */}
                <Link href={""} className="flex items-center gap-2 py-4 px-8">
                  <span className="typography-body-md text-deep font-light">
                    Next
                  </span>
                  <span className="rotate-180">
                    <Arrow />
                  </span>
                </Link>
              </div>
            </div>
          </LayoutContainer>
        </section>
      </div>

      {/* Layout background */}
      <BackgroundDecoration noBorder />
    </>
  );
};

// Wrapper for dynamic params
const NewsDetailPageWrapper = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return <NewsDetailPage id={id} />;
};
export default NewsDetailPageWrapper;

// Arrow SVG
const Arrow = () => {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 7C21.5 6.58579 21.1642 6.25 20.75 6.25L3.06066 6.25L7.78033 1.53033C8.07322 1.23744 8.07322 0.762562 7.78033 0.469669C7.48744 0.176776 7.01256 0.176776 6.71967 0.469669L0.719669 6.46967C0.426777 6.76256 0.426777 7.23744 0.719669 7.53033L6.71967 13.5303C7.01256 13.8232 7.48744 13.8232 7.78033 13.5303C8.07322 13.2374 8.07322 12.7626 7.78033 12.4697L3.06066 7.75L20.75 7.75C21.1642 7.75 21.5 7.41421 21.5 7Z"
        fill="#213DEB"
      />
    </svg>
  );
};
