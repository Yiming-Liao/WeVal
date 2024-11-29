// [r: User]

import { useUserStore } from "@/stores/userStore";
import { useUserFetch } from "@/hooks/user/useUserFetch";
import { useEffect } from "react";
import { Role } from "@/types/role.types";

export const useUserInit = ({ role }: { role: Role | null }) => {
  const { setUser, setIsLoading } = useUserStore(); // User store
  const { userFetch } = useUserFetch(); // API hook

  // ⏳
  useEffect(() => {
    if (role !== "user") return;

    const fetchUser = async () => {
      const user = await userFetch();
      setIsLoading(false); // Was initialized to be true, set to false here

      if (!user) {
        setUser(null);
      } else {
        setUser(user);
      }
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);
};
