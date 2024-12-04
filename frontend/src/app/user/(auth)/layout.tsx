// [r: User]

import { ReactNode } from "react";
import AuthLayoutLeftBlock from "@/components/common/auth/AuthLayoutLeftBlock";
import Image from "next/image";

const UserAuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative flex min-h-screen">
      {/* Left Block */}
      <AuthLayoutLeftBlock className="bg-user-gradient">
        {/* Background Sydney Image */}
        <div className="absolute bottom-0 w-full min-w-[1400px]">
          <Image
            src={"/images/common/auth-bg-user.png"}
            alt={""}
            width={1400}
            height={1080}
            className="size-full object-cover"
          />
        </div>
      </AuthLayoutLeftBlock>

      {/* Right Block */}
      <div className="w-auto pt-9 pb-[96px] px-24 bg-snow z-10">
        <div className="w-96 h-full flex flex-col gap-16">{children}</div>
      </div>
    </main>
  );
};
export default UserAuthLayout;
