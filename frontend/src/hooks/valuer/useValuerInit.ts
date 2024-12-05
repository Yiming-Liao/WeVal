// [r: Valuer]

import { useValuerStore } from "@/stores/valuerStore";
import { useValuerFetch } from "@/hooks/valuer/useValuerFetch";
import { useEffect } from "react";
import { Role } from "@/types/role.types";

export const useValuerInit = ({ role }: { role: Role | null }) => {
  const { setValuer } = useValuerStore(); // User store
  const { valuerFetch } = useValuerFetch(); // API hook

  // ⏳
  useEffect(() => {
    if (role !== Role.VALUER) return;

    const fetchUser = async () => {
      const user = await valuerFetch();

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
