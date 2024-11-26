import Image from "next/image";
import Link from "next/link";

const ContactUsSection = () => {
  return (
    <section className="relative h-[360px] flex justify-center items-center">
      {/* Link */}
      <Link href={"/contact"} className="relative z-10 flex gap-6 py-16 px-24">
        <span className="typography-title-lg text-white font-extralight">
          Contact Us
        </span>
        <Arrow />
      </Link>

      {/* Background */}
      <div className="absolute top-0 h-[360px] bg-main-gradient overflow-hidden z-0">
        <Image
          src={"/images/home-page/ContactUsSection/background.jpg"}
          alt={""}
          width={1920}
          height={360}
          className="opacity-30 relative bottom-52"
        />
      </div>
    </section>
  );
};
export default ContactUsSection;

// Arrow SVG
const Arrow = () => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="26" cy="26" r="26" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.8999 26C16.8999 25.641 17.1909 25.35 17.5499 25.35H32.8807L28.7903 21.2596C28.5364 21.0058 28.5364 20.5942 28.7903 20.3404C29.0441 20.0865 29.4557 20.0865 29.7095 20.3404L34.9095 25.5404C35.1634 25.7942 35.1634 26.2058 34.9095 26.4596L29.7095 31.6596C29.4557 31.9134 29.0441 31.9134 28.7903 31.6596C28.5364 31.4058 28.5364 30.9942 28.7903 30.7404L32.8807 26.65H17.5499C17.1909 26.65 16.8999 26.359 16.8999 26Z"
        fill="#213DEB"
      />
    </svg>
  );
};
