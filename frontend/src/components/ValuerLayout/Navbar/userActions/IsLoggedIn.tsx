import { useLogout } from "@/hooks/valuer/auth/useLogout";
import UserCard from "./UserCard";
import Image from "next/image";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

const IsLoggedIn: FC = () => {
  const { push } = useRouter();
  const { logout } = useLogout();

  const handleLogout = async () => {
    const isLoggedOut = await logout();

    if (isLoggedOut) {
      push("/");
    }
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-6">
      {/* Logout */}
      <button onClick={handleLogout} className="p-2">
        Sign Out
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
