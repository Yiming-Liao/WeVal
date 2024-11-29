// [r: Valuer]

"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useValuerStore } from "@/stores/valuerStore";
import SignOutButton from "./SignOutButton";
import UserCardButton from "./UserCardButton";
import { useValuerInit } from "@/hooks/valuer/useValuerInit";

const Navbar: FC = () => {
  useValuerInit({ role: "valuer" });

  const { push } = useRouter();
  const { valuer } = useValuerStore();

  // Redirect to [Register page-3] if not approved yet.
  useEffect(() => {
    if (valuer && valuer.status !== "approved") {
      push("/valuer/register/page-3");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valuer]);

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-gradient-to-br from-[#a09db3] to-[#46415d] text-white z-[999]">
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
