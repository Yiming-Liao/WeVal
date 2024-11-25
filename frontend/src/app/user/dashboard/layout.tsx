// [r: User]

import Navbar from "@/components/user/Navbar/Navbar";
import Link from "next/link";
import { ReactNode } from "react";

const UserDashboardLayout = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <div className="h-24"></div> {/* Spacer for Navbar */}
      <Navbar />
      <div className="flex gap-4 p-4">
        <Link href={"/user/dashboard/profile"}>Profile</Link>
        <Link href={"/user/dashboard/order"}>Order</Link>
      </div>
      {children}
    </div>
  );
};
export default UserDashboardLayout;
