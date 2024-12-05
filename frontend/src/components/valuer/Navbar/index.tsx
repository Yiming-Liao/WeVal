// [r: Valuer]

"use client";

import { FC, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useValuerStore } from "@/stores/valuerStore";
import { useValuerInit } from "@/hooks/valuer/useValuerInit";
import { FullLogoWhite } from "@/components/svg";
import UserCardButton from "./UserCardButton";
import { Role } from "@/types/role.types";

const Navbar: FC = () => {
  const { push } = useRouter();
  const { valuer } = useValuerStore();
  useValuerInit({ role: Role.VALUER });

  // Redirect to [Register page-3] if not approved yet.
  useEffect(() => {
    if (valuer && valuer.status !== "approved") {
      push("/valuer/register/page-3");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valuer]);

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-valuer-gradient text-white z-[999]">
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
