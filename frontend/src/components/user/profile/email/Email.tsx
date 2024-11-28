"use client";

import { Loading } from "@/components/svg";
import { useUserStore } from "@/stores/userStore";

const Email = () => {
  const { user } = useUserStore();

  return (
    <div className="h-[52px] flex items-center">
      {!user ? (
        <Loading />
      ) : (
        <p className="typography-label-md text-deep">{user?.email}</p>
      )}
    </div>
  );
};
export default Email;
