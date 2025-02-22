import { ReactNode } from "react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/common/Footer";

const MainLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navbar & Spacer */}
      <div className="h-24" />
      <Navbar />

      {/* Main & footer */}
      <div className="flex-1 flex flex-col justify-between">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
