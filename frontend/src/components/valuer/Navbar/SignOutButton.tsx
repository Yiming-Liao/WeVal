// [r: Valuer]

import { FC } from "react";
import { useRouter } from "next/navigation";
import { useValuerStore } from "@/stores/valuerStore";
import { useLogout } from "@/hooks/valuer/auth/useLogout";
import { Loading } from "@/components/svg";

const SignOutButton: FC = () => {
  const { push } = useRouter();
  const { logout, isLoading } = useLogout();
  const { valuer } = useValuerStore();

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
        !valuer ? "blur-sm pointer-events-none select-none" : "blur-in"
      }`}
    >
      {buttonText}
    </button>
  );
};
export default SignOutButton;
