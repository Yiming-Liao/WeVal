// [r: Valuer]

import { useValuerStore } from "@/stores/valuerStore";
import { useValuerFetch } from "@/hooks/valuer/useValuerFetch";
import { useEffect } from "react";
import { Role } from "@/types/role.types";

export const useValuerInit = ({ role }: { role: Role | null }) => {
  const { setValuer, setIsLoading } = useValuerStore(); // User store
  const { valuerFetch } = useValuerFetch(); // API hook

  // ⏳
  useEffect(() => {
    if (role !== "valuer") return;

    const fetchUser = async () => {
      const user = await valuerFetch();
      setIsLoading(false); // Was initialized to be true, set to false here

      if (!user) {
        setValuer(null);
      } else {
        setValuer(user);
      }
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);
};
