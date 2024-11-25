// [r: Admin]

"use client";

import { FC } from "react";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { Logo } from "@/components/svg";
import { useAdminInit } from "@/hooks/admin/useAdminInit";

const Navbar: FC = () => {
  useAdminInit();

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-gradient-to-br from-[#b0a689] to-[#b86f4d] text-white z-[999]">
      <div className="w-full h-full px-[104px] flex justify-center items-center gap-3">
        <div className="relative container">
          <div className="flex justify-between items-center">
            {/* logo */}
            <Link
              href={`/admin/dashboard`}
              className="flex justify-center items-center p-2 px-5 rounded-full hover:shadow-md duration-200"
            >
              <Logo color="white" className="size-10" />
            </Link>

            <div>
              <Link
                href={`/admin/dashboard/membership`}
                className="flex justify-center items-center  p-2 px-5 rounded-full hover:shadow-md duration-200"
              >
                Membership
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href={"/admin/password-change"}
                className="flex justify-center items-center  p-2 px-5 rounded-full hover:shadow-md duration-200"
              >
                Change password
              </Link>
              <SignOutButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
