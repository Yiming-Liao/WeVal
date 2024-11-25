// [r: Admin]

import { useAxiosStore } from "@/stores/axiosStore";
import { Admin } from "@/types/models/admin.types";
import { useMutation } from "@tanstack/react-query";

export const useAdminFetch = () => {
  const { axios } = useAxiosStore();

  // ⚡ adminFetch
  const adminFetch = async (): Promise<Admin | null> => {
    const response = await axios.get<{ admin: Admin }>("/admin/auth");
    if (!response) return null;

    const { admin } = response.data;
    return admin;
  };

  // 🌀 React query
  const mutation = useMutation({ mutationFn: adminFetch });

  return {
    adminFetch: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
