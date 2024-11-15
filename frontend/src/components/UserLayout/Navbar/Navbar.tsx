// [r: User]

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import UserCardButton from "./UserCardButton";
import SignOutButton from "./SignOutButton";

const Navbar: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-gradient-to-tl from-[#2300E9] via-[#0083D4] to-[#00E5F5] text-white z-[999]">
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

            <div className="flex gap-4">
              <SignOutButton />
              <UserCardButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
