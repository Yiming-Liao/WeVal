"use client";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import UserCard from "./UserCard";

// import { useAuth } from "@/contexts/AuthContext";
// import Link from "next/link";

const Navbar = () => {
  // const { user } = useAuth();
  // console.log(user);

  return (
    <header className="fixed top-0 left-0 w-full h-[158px] bg-base">
      <div className="w-full h-full py-[53px] px-[104px] flex justify-center items-center gap-3">
        <div className="relative container">
          <div className="flex justify-between">
            <Link href={"/"} className="flex justify-center items-center">
              <Image
                src={"/images/layout/navbar/logo.svg"}
                alt={""}
                width={204}
                height={52}
              />
            </Link>

            <nav className="flex">
              <NavLink href={"/about"} text={"About Us"} />
              <NavLink href={"/news"} text={"News"} />
              <NavLink href={"/contact"} text={"Contact Us"} />
            </nav>

            <div className="flex items-center gap-6">
              <Link href={"/logout"} className="p-2">
                Sign Out
              </Link>

              <button className="flex justify-center items-center">
                <Image
                  src={"/images/layout/navbar/user-icon.svg"}
                  alt={""}
                  width={28}
                  height={28}
                />
                <Image
                  src={"/images/layout/navbar/chevron-down.svg"}
                  alt={""}
                  width={16}
                  height={16}
                />
              </button>
              <UserCard />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex justify-between items-center">
        <Link
          href={"/"}
          className="px-3 py-2 rounded-md shadow-md bg-slate-600 text-white"
        >
          🏠
        </Link>
        <Link
          href={"/register"}
          className="px-3 py-2 rounded-md shadow-md bg-slate-600 text-white"
        >
          register
        </Link>

        <Link
          href={"/login"}
          className="px-3 py-2 rounded-md shadow-md bg-slate-600 text-white"
        >
          login
        </Link>
        <Link
          href={"/dashboard"}
          className="px-3 py-2 rounded-md shadow-md bg-slate-600 text-white"
        >
          dashboard
        </Link>
        <Link
          href={"/password-change"}
          className="px-3 py-2 rounded-md shadow-md bg-slate-600 text-white"
        >
          password-change
        </Link>
        <Link
          href={"/password-forgot"}
          className="px-3 py-2 rounded-md shadow-md bg-slate-600 text-white"
        >
          password-forgot
        </Link>
        <Link
          href={"/logout"}
          className="px-3 py-2 rounded-md shadow-md bg-slate-600 text-white"
        >
          logout
        </Link>
      </div>

      <div className="w-full flex justify-between items-center border-2 opacity-50">
        <Link
          href={"/email-not-verified"}
          className="px-3 py-2 rounded-md shadow-md bg-slate-600 text-white"
        >
          email-not-verified
        </Link>
        <Link
          href={"/email-verify"}
          className="px-3 py-2 rounded-md shadow-md bg-slate-600 text-white"
        >
          email-verify
        </Link>
        <Link
          href={"/password-reset"}
          className="px-3 py-2 rounded-md shadow-md bg-slate-600 text-white"
        >
          password-reset
        </Link>
      </div> */}
    </header>
  );
};
export default Navbar;
