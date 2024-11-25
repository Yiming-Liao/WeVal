import { ReactNode } from "react";
import Navbar from "@/components/main/Navbar/Navbar";

const MainLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <div className="h-24" />
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
