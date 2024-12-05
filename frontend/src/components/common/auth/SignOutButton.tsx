"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { useLogout as useUserLogout } from "@/hooks/user/auth/useLogout";
import { useLogout as useValuerLogout } from "@/hooks/valuer/auth/useLogout";
import { useLogout as useAdminLogout } from "@/hooks/admin/auth/useLogout";
import { Loading } from "@/components/svg";
import { Role } from "@/types/role.types";

const SignOutButton: FC<{ role: Role }> = ({ role }) => {
  const { push } = useRouter();
  const { logout: userLogout, isLoading: isUserLoading } = useUserLogout();
  const { logout: valuerLogout, isLoading: isValuerLoading } =
    useValuerLogout();
  const { logout: adminLogout, isLoading: isAdminLoading } = useAdminLogout();

  const logout =
    role === Role.USER
      ? userLogout
      : role === Role.VALUER
      ? valuerLogout
      : role === Role.ADMIN
      ? adminLogout
      : null;

  const isLoading =
    role === Role.USER
      ? isUserLoading
      : role === Role.VALUER
      ? isValuerLoading
      : role === Role.ADMIN
      ? isAdminLoading
      : null;

  // ⚡ Sign out / Log out
  const handleLogOut = async () => {
    if (logout === null) return;

    const yes = confirm("Are you sure?");
    if (!yes) return;

    const isLoggedOut = await logout();
    if (isLoggedOut) push("/");
  };

  // Button text
  const buttonText = isLoading ? <Loading /> : "Sign Out";

  return (
    <button
      onClick={handleLogOut}
      className={`w-full h-8 flex justify-center items-center typography-label-md text-deep rounded hover:text-snow hover:bg-deep duration-200`}
    >
      {buttonText}
    </button>
  );
};
export default SignOutButton;
