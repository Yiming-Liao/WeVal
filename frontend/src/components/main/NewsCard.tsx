import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowCircle from "../svg/main/ArrowCircle";

const NewsCard: FC<NewsCardProps> = ({
  href,
  category,
  title,
  description,
  src,
  alt,
}) => {
  return (
    <Link
      href={href}
      className="relative max-w-[418px] h-full bg-[#F0F3FA] rounded-[20px] overflow-hidden flex flex-col gap-3 justify-between"
    >
      {/* Top: Info */}
      <div className="flex flex-col gap-12 p-5 pb-0">
        {/* Category */}
        <h4 className="typography-body-sm text-silver">{category}</h4>
        <div className="flex flex-col gap4">
          {/* Title */}
          <h3 className="typography-body-md font-medium text-primary">
            {title}
          </h3>

          {/* Description */}
          <p className="typography-body-sm font-light text-deep line-clamp-4">
            {description}
          </p>
        </div>
      </div>
      {/* Bottom: Image */}
      <div>
        <Image src={src} alt={alt} width={418} height={314} />
      </div>

      <ArrowCircle className="absolute top-5 right-5 size-12" />
    </Link>
  );
};
export default NewsCard;

interface NewsCardProps {
  href: string;
  category: string;
  title: string;
  description: string;
  src: string;
  alt: string;
}
