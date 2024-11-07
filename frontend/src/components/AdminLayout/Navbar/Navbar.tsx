// [r: Admin]

"use client";

import Image from "next/image";
import Link from "next/link";
import UserActions from "./userActions/UserActions";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

const Navbar = () => {
  const { admin } = useAdminAuth();

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-amber-800 z-[999]">
      <div className="w-full h-full px-[104px] flex justify-center items-center gap-3">
        <div className="relative container">
          <div className="flex justify-between items-center">
            {/* logo */}
            <Link
              href={`/admin/${admin?.uuid}/dashboard`}
              className={`${
                !admin ? "pointer-events-none" : ""
              } flex justify-center items-center`}
            >
              <Image
                src={"/images/layout/navbar/logo.svg"}
                alt={""}
                width={100}
                height={52}
              />
            </Link>

            {/* User Actions [logged in / Not logged in] */}
            <UserActions />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
