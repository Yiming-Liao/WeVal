"use client";

import { useState, useEffect } from "react";
import AdminSignOutButton from "@/components/admin/Navbar/SignOutButton";
import UserSignOutButton from "@/components/user/Navbar/SignOutButton";
import ValuerSignOutButton from "@/components/valuer/Navbar/SignOutButton";
import UserUserCardButton from "@/components/user/Navbar/UserCardButton";
import ValuerUserCardButton from "@/components/valuer/Navbar/UserCardButton";
import Link from "next/link";
import { useRoleStore } from "@/stores/roleStore";
import { useAdminInit } from "@/hooks/admin/useAdminInit";
import { useUserInit } from "@/hooks/user/useUserInit";
import { useValuerInit } from "@/hooks/valuer/useValuerInit";
import { Role } from "@/types/role.types";

const UserActions = () => {
  const { role: initialRole } = useRoleStore();
  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    setRole(initialRole);
  }, [initialRole]);

  useAdminInit({ role });
  useUserInit({ role });
  useValuerInit({ role });

  let SignoutButton = null;
  let UserCardButton = null;

  // Define SignOutButton & UserCardButton
  if (role === "admin") {
    SignoutButton = <AdminSignOutButton />;
    UserCardButton = <></>;
  } else if (role === "user") {
    SignoutButton = <UserSignOutButton />;
    UserCardButton = <UserUserCardButton />;
  } else if (role === "valuer") {
    SignoutButton = <ValuerSignOutButton />;
    UserCardButton = <ValuerUserCardButton />;
  }

  return (
    <>
      {role ? (
        <>
          {SignoutButton}
          {UserCardButton}
        </>
      ) : (
        <Link href={`/user/login`} className="relative -mr-2 p-2">
          Sign in
        </Link>
      )}
    </>
  );
};

export default UserActions;
