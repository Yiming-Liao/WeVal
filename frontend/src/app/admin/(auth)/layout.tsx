// [r: Admin]

import { ReactNode } from "react";
import AuthLayoutLeftBlock from "@/components/common/auth/AuthLayoutLeftBlock";

const AdminAuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative flex min-h-screen">
      {/* Left Block */}
      <AuthLayoutLeftBlock className="bg-admin-gradient" />

      {/* Right Block */}
      <div className="w-auto pt-9 pb-[96px] px-24 bg-snow z-10">
        <div className="w-96 h-full flex flex-col gap-16">{children}</div>
      </div>
    </main>
  );
};
export default AdminAuthLayout;
