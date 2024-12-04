// [r: Admin]

"use client";

import { FC } from "react";
import Link from "next/link";
import { useAdminInit } from "@/hooks/admin/useAdminInit";
import { FullLogoWhite } from "@/components/svg";
import UserCardButton from "./UserCardButton";

const Navbar: FC = () => {
  useAdminInit({ role: "admin" });

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-admin-gradient text-white z-[999]">
      <div className="w-full h-full px-[104px] flex justify-center items-center gap-3">
        <div className="relative container">
          <div className="flex justify-between items-center">
            {/* Left: logo */}
            <Link href={"/"} className="flex justify-center items-center">
              <FullLogoWhite />
            </Link>

            {/* UserCard toggle button */}
            <UserCardButton />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
