// [r: Valuer]

import Navbar from "@/components/ValuerLayout/Navbar/Navbar";
import Link from "next/link";
import { ReactNode } from "react";

const ValuerDashboardLayout = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <div className="h-24"></div> {/* Spacer for Navbar */}
      <Navbar />
      <div className="flex gap-4 p-4">
        <Link href={"/valuer/dashboard/profile"}>Profile</Link>
        <Link href={"/valuer/dashboard/resume"}>Resume</Link>
        <Link href={"/valuer/dashboard/revenue"}>Revenue</Link>
        <Link href={"/valuer/dashboard/order"}>Order</Link>
      </div>
      {children}
    </div>
  );
};
export default ValuerDashboardLayout;
