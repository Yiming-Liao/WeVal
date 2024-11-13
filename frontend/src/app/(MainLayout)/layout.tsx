import { ReactNode } from "react";
import Navbar from "@/components/MainLayout/Navbar/Navbar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div className="h-24"></div>
      <Navbar />
      {children}
    </>
  );
}
