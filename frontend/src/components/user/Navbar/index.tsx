// [r: User]

"use client";

import { FC } from "react";
import Link from "next/link";
import { useUserInit } from "@/hooks/user/useUserInit";
import { FullLogoWhite } from "@/components/svg";
import UserCardButton from "./UserCardButton";

const Navbar: FC = () => {
  useUserInit({ role: "user" });

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-user-gradient text-white z-[999]">
      <div className="w-full h-full px-[104px] flex justify-center items-center gap-3">
        <div className="relative container">
          <div className="flex justify-between items-center">
            {/* Left: logo */}
            <Link href={"/"} className="flex justify-center items-center">
              <FullLogoWhite />
            </Link>

            {/* Right: Main button & UserCard */}
            <div className="flex gap-4">
              {/* Main feature button */}
              <Link
                href={"/FullLogoWhite/select-region"}
                className="h-12 px-4 rounded-lg bg-gradient-to-r from-neutral-50 to-blue-200 text-deep flex justify-center items-center"
              >
                Request a Valuation
              </Link>

              {/* UserCard toggle button */}
              <UserCardButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
