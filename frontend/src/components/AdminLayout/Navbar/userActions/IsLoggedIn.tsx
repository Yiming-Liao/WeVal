// [r: Admin]

import { useLogout } from "@/hooks/admin/auth/useLogout";
import UserCard from "./UserCard";
import Image from "next/image";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const IsLoggedIn: FC = () => {
  const { push } = useRouter();
  const { logout } = useLogout();

  const handleLogout = async () => {
    const isLoggedOut = await logout();

    if (isLoggedOut) {
      push("/admin/login");
    }
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-6">
      {/* Logout */}
      <Link href={"/admin/password-change"} className="p-2">
        Change password{" "}
      </Link>
      {/* Logout */}
      <button onClick={handleLogout} className="p-2">
        Log Out
      </button>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-center items-center"
      >
        <Image
          src={"/images/layout/navbar/user-icon.svg"}
          alt={""}
          width={28}
          height={28}
        />
        <Image
          src={"/images/layout/navbar/chevron-down.svg"}
          alt={""}
          width={16}
          height={16}
        />
      </button>

      {/* UserCard */}
      {isOpen ? <UserCard /> : null}
    </div>
  );
};
export default IsLoggedIn;
