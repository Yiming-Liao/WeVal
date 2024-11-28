import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

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
      className="relative max-w-[418px] bg-[#F0F3FA] rounded-[20px] overflow-hidden flex flex-col gap-2"
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
          <p className="typography-body-sm font-light text-deep">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom: Image */}
      <div>
        <Image src={src} alt={alt} width={418} height={314} />
      </div>

      <div className="absolute top-5 right-5">
        <ArrowButton />
      </div>
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

const ArrowButton = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#213DEB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 18.5C30 18.2239 29.7761 18 29.5 18H23.5C23.2239 18 23 18.2239 23 18.5C23 18.7761 23.2239 19 23.5 19H28.2929L18.1464 29.1464C17.9512 29.3417 17.9512 29.6583 18.1464 29.8536C18.3417 30.0488 18.6583 30.0488 18.8536 29.8536L29 19.7071V24.5C29 24.7761 29.2239 25 29.5 25C29.7761 25 30 24.7761 30 24.5V18.5Z"
        fill="white"
      />
    </svg>
  );
};
