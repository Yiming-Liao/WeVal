"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavLink: FC<NavLinkProps> = ({ href = "/", text = "Link text" }) => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  // ⏳ Check if active
  useEffect(() => {
    if (pathname.startsWith(href)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [href, pathname]);

  return (
    <Link
      href={href}
      className={`w-[10vw] max-w-48  h-14 flex justify-center items-center ${
        isActive ? "border-b-[1px]" : ""
      } button-interaction`}
    >
      <span>{text}</span>
    </Link>
  );
};
export default NavLink;

interface NavLinkProps {
  href: string;
  text: string;
}
