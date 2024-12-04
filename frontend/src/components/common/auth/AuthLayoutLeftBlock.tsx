import { FC, ReactNode } from "react";
import { AuthBackgroundBuildings, FullLogoWhite } from "@/components/svg";

const AuthLayoutLeftBlock: FC<{ className?: string; children?: ReactNode }> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`${className} flex-1 h-screen sticky top-0 flex justify-center`}
    >
      {/* Buildings SVG */}
      <div className="absolute bottom-0 w-full min-w-[1400px]">
        <AuthBackgroundBuildings />
      </div>

      {children}
      {/* Logo */}
      <div className="absolute top-[27%]">
        <FullLogoWhite />
      </div>
    </div>
  );
};
export default AuthLayoutLeftBlock;
