import { FC } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import UserActions from "./UserActions";
import { FullLogoWhite } from "@/components/svg";

const Navbar: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-primary-gradient text-white z-[999]">
      <div className="w-full h-full px-[104px] flex justify-center items-center gap-3">
        <div className="relative container">
          <div className="flex justify-between items-center">
            {/* logo */}
            <Link href={"/"} className="flex justify-center items-center">
              <FullLogoWhite />
            </Link>

            {/* Nav links */}
            <nav className="flex">
              <NavLink href={"/about"} text={"About Us"} />
              <NavLink href={"/news"} text={"News"} />
              <NavLink href={"/contact"} text={"Contact Us"} />
            </nav>

            {/* Main button & UserCard */}
            <UserActions />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
