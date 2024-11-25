// [r: User]

import { ReactNode } from "react";
import { FullLogoWhite } from "@/components/svg";

const UserAuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative flex min-h-screen">
      {/* Left Block */}
      <div className="flex-1 h-screen sticky top-0 bg-gradient-to-br from-[#00E5F5] to-[#2300E9] flex justify-center items-center">
        <FullLogoWhite />
      </div>

      {/* Right Block */}
      <div className="w-auto pt-9 pb-[96px] px-24">
        <div className="w-96 h-full flex flex-col gap-16">{children}</div>
      </div>
    </main>
  );
};
export default UserAuthLayout;
