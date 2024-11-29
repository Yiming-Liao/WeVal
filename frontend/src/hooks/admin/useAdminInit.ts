// [r: Admin]

import { useAdminStore } from "@/stores/adminStore";
import { useAdminFetch } from "@/hooks/admin/useAdminFetch";
import { useEffect } from "react";
import { Role } from "@/types/role.types";

export const useAdminInit = ({ role }: { role: Role | null }) => {
  const { setAdmin, setIsLoading } = useAdminStore(); // Admin store
  const { adminFetch } = useAdminFetch(); // API hook

  // ⏳
  useEffect(() => {
    if (role !== "admin") return;

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
  }, [role]);
};
