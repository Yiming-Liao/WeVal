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
  const [role, setRole] = useState<Role>(Role.DEFAULT);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setRole(initialRole);
    setIsLoading(false);
  }, [initialRole]);

  // Initialize role
  useUserInit({ role });
  useValuerInit({ role });
  useAdminInit({ role });

  let UserCardButton = <UserUserCardButton />;

  // Define UserCardButton
  if (role === Role.USER) {
    UserCardButton = <UserUserCardButton />;
  } else if (role === Role.VALUER) {
    UserCardButton = <ValuerUserCardButton />;
  } else if (role === Role.ADMIN) {
    UserCardButton = <AdminUserCardButton />;
  }

  return (
    <div className="flex items-center gap-4">
      {/* Main feature button */}
      <div className="w-52">
        {!isLoading &&
          initialRole !== Role.VALUER &&
          initialRole !== Role.ADMIN && (
            <Link
              href="/select-region"
              className="h-12 px-4 rounded-lg bg-light-gradient text-white font-medium flex justify-center items-center button-interaction"
            >
              Request a Valuation
            </Link>
          )}
      </div>

      {/* Sign in button or UserCard */}
      <div className="w-20 -mr-2">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loading color="#FAFAFA" />
          </div>
        ) : !role ? (
          <Link href={`/user/login`} className="p-2 ">
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
