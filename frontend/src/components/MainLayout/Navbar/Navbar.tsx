"use client";

import { FC, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUserAuth } from "@/contexts/UserAuthContext";
import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import UserSignOutButton from "@/components/UserLayout/Navbar/SignOutButton";
import ValuerSignOutButton from "@/components/ValuerLayout/Navbar/SignOutButton";
import AdminSignOutButton from "@/components/AdminLayout/Navbar/SignOutButton";
import UserUserCardButton from "@/components/UserLayout/Navbar/UserCardButton";
import ValuerUserCardButton from "@/components/ValuerLayout/Navbar/UserCardButton";
import NavLink from "./NavLink";

const Navbar: FC = () => {
  const { user } = useUserAuth();
  const { valuer } = useValuerAuth();
  const { admin } = useAdminAuth();

  const [role, setRole] = useState<null | "user" | "valuer" | "admin">(null);

  useEffect(() => {
    if (user) {
      setRole("user");
    } else if (valuer) {
      setRole("valuer");
    } else if (admin) {
      setRole("admin");
    } else {
      setRole(null);
    }
  }, [admin, user, valuer]);

  const renderSignOutButton = useMemo(() => {
    switch (role) {
      case "user":
        return <UserSignOutButton />;
      case "valuer":
        return <ValuerSignOutButton />;
      case "admin":
        return <AdminSignOutButton />;
      default:
        return <UserSignOutButton />;
    }
  }, [role]);

  const renderUserCardButton = useMemo(() => {
    switch (role) {
      case "user":
        return <UserUserCardButton />;
      case "valuer":
        return <ValuerUserCardButton />;
      default:
        return <UserUserCardButton />;
    }
  }, [role]);

  console.log(role);

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-deep text-white z-[999]">
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

            <div className="flex items-center gap-8">
              <Link
                href={"/create-order"}
                className="h-12 px-4 rounded-lg bg-white text-deep flex justify-center items-center"
              >
                Create an order
              </Link>
              <div className="w-[184px] flex gap-4 justify-end">
                {role ? (
                  <>
                    {renderSignOutButton}
                    {renderUserCardButton}
                  </>
                ) : (
                  <Link href={"/user/login"} className="relative -mr-2 p-2">
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
