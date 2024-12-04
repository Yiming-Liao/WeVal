"use client";

import { useState, useEffect } from "react";
import UserUserCardButton from "@/components/user/Navbar/UserCardButton";
import ValuerUserCardButton from "@/components/valuer/Navbar/UserCardButton";
import AdminUserCardButton from "@/components/admin/Navbar/UserCardButton";
import Link from "next/link";
import { useRoleStore } from "@/stores/roleStore";
import { useAdminInit } from "@/hooks/admin/useAdminInit";
import { useUserInit } from "@/hooks/user/useUserInit";
import { useValuerInit } from "@/hooks/valuer/useValuerInit";
import { Role } from "@/types/role.types";
import { Loading } from "@/components/svg";

const UserActions = () => {
  const { role: initialRole } = useRoleStore();
  const [role, setRole] = useState<Role | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setRole(initialRole);
    setIsLoading(false);
  }, [initialRole]);

  // Initialize role
  useAdminInit({ role });
  useUserInit({ role });
  useValuerInit({ role });

  let UserCardButton = <UserUserCardButton />;

  // Define UserCardButton
  if (role === "admin") {
    UserCardButton = <AdminUserCardButton />;
  } else if (role === "user") {
    UserCardButton = <UserUserCardButton />;
  } else if (role === "valuer") {
    UserCardButton = <ValuerUserCardButton />;
  }

  return (
    <div className="flex items-center gap-4">
      {/* Main feature button */}
      <div className="w-52">
        {role !== "admin" &&
          (isLoading ? (
            <></>
          ) : (
            <Link
              href={"/order/select-region"}
              className="h-12 px-4 rounded-lg bg-light-gradient text-white font-medium flex justify-center items-center button-interaction"
            >
              Request a Valuation
            </Link>
          ))}
      </div>

      {/* Sign in button or UserCard */}
      <div className="w-20 -mr-2">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loading color="#FAFAFA" />
          </div>
        ) : !role ? (
          <Link href={`/user/login`} className="p-2 button-interaction">
            Sign in
          </Link>
        ) : (
          <>{UserCardButton}</>
        )}
      </div>
    </div>
  );
};

export default UserActions;
