// [r: Admin]

import { ReactNode } from "react";
import Navbar from "@/components/AdminLayout/Navbar/Navbar";

const AdminDashboardLayout = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <div className="h-24"></div> {/* Spacer for Navbar */}
      <Navbar />
      {children}
    </div>
  );
};

export default AdminDashboardLayout;
