// [r: User]

"use client";

import { Loading } from "@/components/svg";
import { User } from "@/types/models/user.types";
import { FC } from "react";

const Email: FC<{ user: User | null }> = ({ user }) => {
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
