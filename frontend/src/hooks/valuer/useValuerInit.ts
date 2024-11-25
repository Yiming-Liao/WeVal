// [r: Valuer]

import { useValuerStore } from "@/stores/valuerStore";
import { useValuerFetch } from "@/hooks/valuer/useValuerFetch";
import { useEffect } from "react";

export const useValuerInit = () => {
  const { setValuer, setIsLoading } = useValuerStore(); // User store
  const { valuerFetch } = useValuerFetch(); // API hook

  // ⏳
  useEffect(() => {
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
  }, []);
};
