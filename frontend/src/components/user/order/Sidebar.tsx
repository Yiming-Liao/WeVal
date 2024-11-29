import Link from "next/link";
import { FC } from "react";

const Sidebar: FC<{ status: ORDER_STATUS | null }> = ({ status }) => {
  return (
    <div className="absolute left-0 w-full max-w-[350px]">
      <div className="h-[496px] rounded-r-lg bg-white flex justify-end">
        <div className="w-[220px] flex flex-col pt-6 gap-6">
          {/* All */}
          <Link
            href={"/user/dashboard/orders"}
            className={`py-2 ${!status ? "border-b border-secondary" : ""}`}
          >
            <span
              className={`typography-label-lg ${
                !status ? "text-secondary" : "text-silver"
              }`}
            >
              All Orders
            </span>
          </Link>

          {/* Unpaid Orders */}
          <Link
            href={`/user/dashboard/orders?status=${ORDER_STATUS.UNPAID}`}
            className={`py-2 ${
              status === ORDER_STATUS.UNPAID ? "border-b border-secondary" : ""
            }`}
          >
            <span
              className={`typography-label-lg ${
                status === ORDER_STATUS.UNPAID
                  ? "text-secondary"
                  : "text-silver"
              }`}
            >
              Unpaid Orders
            </span>
          </Link>

          {/* Awaiting valuer */}
          <Link
            href={`/user/dashboard/orders?status=${ORDER_STATUS.AWAITING_VALUER}`}
            className={`py-2 ${
              status === ORDER_STATUS.AWAITING_VALUER
                ? "border-b border-secondary"
                : ""
            }`}
          >
            <span
              className={`typography-label-lg ${
                status === ORDER_STATUS.AWAITING_VALUER
                  ? "text-secondary"
                  : "text-silver"
              }`}
            >
              Awaiting Valuer
            </span>
          </Link>

          {/* In progress */}
          <Link
            href={`/user/dashboard/orders?status=${ORDER_STATUS.IN_PROGRESS}`}
            className={`py-2 ${
              status === ORDER_STATUS.IN_PROGRESS
                ? "border-b border-secondary"
                : ""
            }`}
          >
            <span
              className={`typography-label-lg ${
                status === ORDER_STATUS.IN_PROGRESS
                  ? "text-secondary"
                  : "text-silver"
              }`}
            >
              Valuation in Progress
            </span>
          </Link>

          {/* Completed */}
          <Link
            href={`/user/dashboard/orders?status=${ORDER_STATUS.COMPLETED}`}
            className={`py-2 ${
              status === ORDER_STATUS.COMPLETED
                ? "border-b border-secondary"
                : ""
            }`}
          >
            <span
              className={`typography-label-lg ${
                status === ORDER_STATUS.COMPLETED
                  ? "text-secondary"
                  : "text-silver"
              }`}
            >
              Completed Orders
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

// Type safe for search params
export enum ORDER_STATUS {
  ALL = "",
  UNPAID = "unpaid",
  AWAITING_VALUER = "awaiting-valuer",
  IN_PROGRESS = "in-progress",
  COMPLETED = "completed",
}
