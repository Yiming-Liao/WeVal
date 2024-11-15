// [r: Admin]

"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { useLogout } from "@/hooks/admin/auth/useLogout";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Loading } from "@/components/svg";

const SignOutButton: FC = () => {
  const { push } = useRouter();
  const { logout, isLoading } = useLogout();
  const { admin } = useAdminAuth();

  // ⚡ Sign out / Log out
  const handleLogOut = async () => {
    const yes = confirm("Are you sure?");
    if (!yes) {
      return;
    }

    const isLoggedOut = await logout();

    if (isLoggedOut) {
      push("/");
    }
  };

  // Button text
  const buttonText = isLoading ? <Loading /> : "Sign Out";

  return (
    <button
      onClick={handleLogOut}
      className={`w-28 p-2 flex justify-center items-center ${
        !admin ? "blur-sm pointer-events-none select-none" : "blur-in"
      }  p-2 px-5 rounded-full hover:shadow-md duration-200`}
    >
      {buttonText}
    </button>
  );
};
export default SignOutButton;
