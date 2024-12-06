// [r: Valuer]

import { Loading } from "@/components/svg";
import { OrderStatus, StatusCounts } from "@/types/models/order.types";
import Link from "next/link";
import { FC, ReactNode } from "react";

const Sidebar: FC<SidebarProps> = ({ status, statusCounts }) => {
  const getOrderCount = (status: OrderStatus) => {
    const statusCount = statusCounts.find((obj) => obj.orderStatus === status);
    return statusCount ? (
      statusCount.count
    ) : (
      <span className="scale-50">
        <Loading color="#fff" />
      </span>
    );
  };

  return (
    <div className="max-2xl:hidden absolute left-0 w-full max-w-[350px]">
      <div className="h-[496px] rounded-r-lg bg-white flex justify-end shadow">
        <div className="w-[236px] flex flex-col pt-6 gap-6">
          {/* New requests */}
          <NavLink
            text={"New requests"}
            path={"orders"}
            activeCondition={!status}
            count={getOrderCount(OrderStatus.AWAITING_VALUER)}
          />

          {/* Ongoing Requests */}
          <NavLink
            text={"Ongoing requests"}
            path={`orders?status=${OrderStatus.IN_PROGRESS}`}
            activeCondition={status === OrderStatus.IN_PROGRESS}
            count={getOrderCount(OrderStatus.IN_PROGRESS)}
          />

          {/* Completed */}
          <NavLink
            text={"Completed requests"}
            path={`orders?status=${OrderStatus.COMPLETED}`}
            activeCondition={status === OrderStatus.COMPLETED}
          />
          {/* Archived Requests */}
          <NavLink
            text={"Archived requests"}
            path={`orders?status=${OrderStatus.CANCELLED}`}
            activeCondition={status === OrderStatus.CANCELLED}
          />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

// Props
interface SidebarProps {
  status: OrderStatus | null;
  statusCounts: StatusCounts[];
}

// NavLink component
const NavLink: FC<{
  text: string;
  path: string;
  activeCondition: boolean;
  count?: string | ReactNode;
}> = ({ text, path, activeCondition, count = "" }) => {
  return (
    <Link
      href={`/valuer/dashboard/${path}`}
      className={`${activeCondition ? "border-b border-secondary" : ""}`}
    >
      <span
        className={`relative w-fit h-full block py-2 pr-8 typography-label-lg ${
          activeCondition ? "text-secondary" : "text-silver"
        }`}
      >
        {text}
        {count && (
          <span className="absolute top-0 right-0 size-4 bg-primary rounded-full text-xs text-white flex justify-center items-center">
            {count}
          </span>
        )}
      </span>
    </Link>
  );
};
