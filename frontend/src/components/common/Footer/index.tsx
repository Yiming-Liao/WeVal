import Link from "next/link";
import { Facebook, Logo } from "@/components/svg";
import LayoutContainer from "../LayoutContainer";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center border-t-[0.5px] border-secondary">
      <LayoutContainer>
        <div className="pt-14 pb-16 px-14 flex justify-between border-x border-light">
          {/* Left block */}
          <div className="flex items-center gap-8">
            <Link href={"/"}>
              <Logo />
            </Link>
            <div className="flex flex-col gap-4 text-primary">
              {/* Name */}
              <h5 className="typography-body-md">Weval Solutions Pty Ltd</h5>

              {/* Info */}
              <p className="flex flex-col typography-body-sm font-light">
                <span>Tel : +61 2 9876 5432</span>
                <span>
                  Email : info@wevalsolutions.com Address : Level 15, 123 King
                </span>
                <span>Street, Sydney, NSW 2000, Australia</span>
              </p>
            </div>
          </div>

          {/* Rgith block */}
          <div className="flex flex-col items-end gap-7 text-secondary">
            {/* Social media apps */}
            <div>
              <Link href={"/"}>
                <Facebook />
              </Link>
            </div>

            <div className="flex flex-col items-end typography-body-sm">
              {/* Info */}
              <p className="flex flex-col items-end font-light">
                <span>© 2024, WEVAL PTY LTD. All rights reserved.</span>
                <span>ABN: 82 677 585 492 | ACN: 677 585 492</span>
              </p>
              {/* Links */}
              <div className="flex gap-2 font-medium">
                <Link href={"/"}>User Policy</Link>
                <span>|</span>
                <Link href={"/"}>Privacy Policy</Link>
                <span>|</span>
                <Link href={"/"}>Buyer Protection</Link>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </footer>
  );
};
export default Footer;
