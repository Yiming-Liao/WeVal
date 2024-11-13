import { FullLogoBlue } from "@/components/svg";
import Link from "next/link";
import Title from "./Title";
import { FC } from "react";

const Header: FC<{ title: string }> = ({ title = "Title" }) => {
  return (
    <header className="flex flex-col items-center">
      {/* <SVG> Blue full logo */}
      <Link href={"/"} className="p-6">
        <FullLogoBlue />
      </Link>

      {/* <UI> Title */}
      <Title>{title}</Title>
    </header>
  );
};
export default Header;
