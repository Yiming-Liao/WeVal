import { FullLogoBlue } from "@/components/svg";
import Link from "next/link";
import { FC } from "react";

const AuthHeader: FC<{ title: string }> = ({ title = "Title" }) => {
  return (
    <header className="flex flex-col items-center">
      {/* Blue full logo SVG */}
      <Link href={"/"} className="p-6">
        <FullLogoBlue />
      </Link>

      {/* Title */}
      <h1 className={`typography-title-md text-deep`}>{title}</h1>
    </header>
  );
};
export default AuthHeader;
