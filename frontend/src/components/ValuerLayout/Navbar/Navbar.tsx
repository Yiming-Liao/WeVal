"use client";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import UserActions from "./userActions/UserActions";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-slate-700 z-[999]">
      <div className="w-full h-full px-[104px] flex justify-center items-center gap-3">
        <div className="relative container">
          <div className="flex justify-between items-center">
            {/* logo */}
            <Link
              href={"/valuer/dashboard"}
              className="flex justify-center items-center"
            >
              <Image
                src={"/images/layout/navbar/logo.svg"}
                alt={""}
                width={204}
                height={52}
              />
            </Link>

            {/* Nav */}
            <nav className="flex">
              <NavLink href={"/about"} text={"About Us"} />
              <NavLink href={"/news"} text={"News"} />
              <NavLink href={"/contact"} text={"Contact Us"} />
            </nav>

            {/* User Actions [logged in / Not logged in] */}
            <UserActions />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
