"use client";

// import { FC, useEffect, useMemo } from "react";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
// import UserSignOutButton from "@/components/user/Navbar/SignOutButton";
// import ValuerSignOutButton from "@/components/valuer/Navbar/SignOutButton";
// import AdminSignOutButton from "@/components/admin/Navbar/SignOutButton";
// import UserUserCardButton from "@/components/user/Navbar/UserCardButton";
// import ValuerUserCardButton from "@/components/valuer/Navbar/UserCardButton";
// import { useAdminStore } from "@/stores/adminStore";
// import { useUserStore } from "@/stores/userStore";
// import { useValuerStore } from "@/stores/valuerStore";
// import { useRoleStore } from "@/stores/roleStore";
// import { useAdminInit } from "@/hooks/admin/useAdminInit";
// import { useUserInit } from "@/hooks/user/useUserInit";
// import { useValuerInit } from "@/hooks/valuer/useValuerInit";

const Navbar: FC = () => {
  // const { user } = useUserStore();
  // const { valuer } = useValuerStore();
  // const { admin } = useAdminStore();
  // const { role, setRole } = useRoleStore();

  // const init =
  //   role === "user"
  //     ? useUserInit
  //     : role === "valuer"
  //     ? useValuerInit
  //     : useAdminInit;
  // init();

  // useEffect(() => {
  //   if (user) {
  //     setRole("user");
  //   } else if (valuer) {
  //     setRole("valuer");
  //   } else if (admin) {
  //     setRole("admin");
  //     // } else {
  //     //   setRole("");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [admin, user, valuer]);

  // const renderSignOutButton = useMemo(() => {
  //   switch (role) {
  //     case "user":
  //       return <UserSignOutButton />;
  //     case "valuer":
  //       return <ValuerSignOutButton />;
  //     case "admin":
  //       return <AdminSignOutButton />;
  //     default:
  //       return <UserSignOutButton />;
  //   }
  // }, [role]);

  // const renderUserCardButton = useMemo(() => {
  //   switch (role) {
  //     case "user":
  //       return <UserUserCardButton />;
  //     case "valuer":
  //       return <ValuerUserCardButton />;
  //     default:
  //       return <UserUserCardButton />;
  //   }
  // }, [role]);

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

            <div className="flex items-center gap-8">
              <Link
                href={"/order/select-region"}
                className="h-12 px-4 rounded-lg bg-white text-deep flex justify-center items-center"
              >
                Request a Valuation
              </Link>
              <div className="w-[184px] flex gap-4 justify-end">
                {/* {role ? (
                  <>
                    {renderSignOutButton}
                    {renderUserCardButton}
                  </>
                ) : ( */}
                <Link href={"/user/login"} className="relative -mr-2 p-2">
                  Sign in
                </Link>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
