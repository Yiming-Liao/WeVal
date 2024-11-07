import { ReactNode } from "react";
import Navbar from "@/components/AdminLayout/Navbar/Navbar";

export default function RootLayout({
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
