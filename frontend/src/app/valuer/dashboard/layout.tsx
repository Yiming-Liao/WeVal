import Link from "next/link";
import { ReactNode } from "react";

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <div className="flex gap-4 p-4">
        <Link href={"/user/dashboard/profile"}>Profile</Link>{" "}
        <Link href={"/user/dashboard/order"}>Order</Link>
      </div>
      {children}
    </div>
  );
};
export default layout;
