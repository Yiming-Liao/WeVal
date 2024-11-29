// [r: User]

import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import { ReactNode } from "react";

const OrdersLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      {children}

      {/* Background decoration */}
      <BackgroundDecoration partial />
    </>
  );
};
export default OrdersLayout;
