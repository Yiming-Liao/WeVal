// [r: User]

import { ReactNode } from "react";
import { AuthBackgroundBuildings, FullLogoWhite } from "@/components/svg";

const UserAuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative flex min-h-screen">
      {/* Left Block */}
      <div className="flex-1 h-screen sticky top-0 bg-user-gradient flex justify-center">
        <div className="absolute bottom-0 w-full min-w-[1024px]">
          <AuthBackgroundBuildings />
        </div>
        <div className="absolute top-[27%]">
          <FullLogoWhite />
        </div>
      </div>

      {/* Right Block */}
      <div className="w-auto pt-9 pb-[96px] px-24">
        <div className="w-96 h-full flex flex-col gap-16">{children}</div>
      </div>
    </main>
  );
};
export default UserAuthLayout;
