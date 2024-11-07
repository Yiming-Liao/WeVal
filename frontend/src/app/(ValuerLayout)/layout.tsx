// [r: Valuer]

import { ReactNode } from "react";
import Navbar from "@/components/ValuerLayout/Navbar/Navbar";

export default function ValuerLayout({
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
