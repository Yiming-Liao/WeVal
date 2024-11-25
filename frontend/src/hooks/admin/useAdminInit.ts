// [r: Admin]

import { useAdminStore } from "@/stores/adminStore";
import { useAdminFetch } from "@/hooks/admin/useAdminFetch";
import { useEffect } from "react";

export const useAdminInit = () => {
  const { setAdmin, setIsLoading } = useAdminStore(); // Admin store
  const { adminFetch } = useAdminFetch(); // API hook

  // ⏳
  useEffect(() => {
    const fetchAdmin = async () => {
      const admin = await adminFetch();
      setIsLoading(false); // Was initialized to be true, set to false here

      if (!admin) {
        setAdmin(null);
      } else {
        setAdmin(admin);
      }
    };
    fetchAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
