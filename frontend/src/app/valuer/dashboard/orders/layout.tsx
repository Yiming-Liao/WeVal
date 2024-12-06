// [r: Valuer]

import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import { ReactNode } from "react";

const OrdersLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      {children}

      {/* Background decoration */}
      <BackgroundDecoration noBorder />
    </>
  );
};
export default OrdersLayout;
