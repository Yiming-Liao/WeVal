// [r: User]

import Footer from "@/components/common/Footer";
import LayoutBackground from "@/components/common/LayoutBackground";
import Navbar from "@/components/user/Navbar/Navbar";
import Link from "next/link";
import { ReactNode } from "react";

const UserDashboardLayout = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navbar & Spacer */}
      <div className="h-24" />
      <Navbar />

      {/* Nav links */}
      <nav className="flex gap-4 p-4">
        <Link href={"/user/dashboard/profile"}>Profile</Link>
        <Link href={"/user/dashboard/order"}>Order</Link>
      </nav>

      {/* Main & footer */}
      <div className="flex-1 flex flex-col justify-between">
        <main>{children}</main>
        <Footer />
      </div>

      {/* Layout background */}
      <LayoutBackground />
    </div>
  );
};
export default UserDashboardLayout;
