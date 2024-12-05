// [r: Admin]

import { useAdminStore } from "@/stores/adminStore";
import { useAdminFetch } from "@/hooks/admin/useAdminFetch";
import { useEffect } from "react";
import { Role } from "@/types/role.types";

export const useAdminInit = ({ role }: { role: Role | null }) => {
  const { setAdmin } = useAdminStore(); // Admin store
  const { adminFetch } = useAdminFetch(); // API hook

  // ⏳
  useEffect(() => {
    if (role !== Role.ADMIN) return;

    const fetchAdmin = async () => {
      const admin = await adminFetch();

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
