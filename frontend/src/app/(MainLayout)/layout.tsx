import { ReactNode } from "react";
import Navbar from "@/components/MainLayout/Navbar/Navbar";

const MainLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <div className="h-24"></div>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
