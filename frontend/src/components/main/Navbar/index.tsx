import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import UserActions from "./UserActions";

const Navbar: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-secondary text-white z-[999]">
      <div className="w-full h-full px-[104px] flex justify-center items-center gap-3">
        <div className="relative container">
          <div className="flex justify-between items-center">
            {/* logo */}
            <Link href={"/"} className="flex justify-center items-center">
              <Image
                src={"/images/layout/navbar/logo.svg"}
                alt={"WeVal logo"}
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

            <div className="flex items-center gap-4">
              <Link
                href={"/order/select-region"}
                className="h-12 px-4 rounded-lg bg-gradient-to-r from-neutral-50 to-blue-200 text-deep flex justify-center items-center"
              >
                Request a Valuation
              </Link>

              {/* Signout & UserCard */}
              <UserActions />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
