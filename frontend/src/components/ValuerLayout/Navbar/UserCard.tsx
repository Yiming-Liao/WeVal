// [r: Valuer]

import {
  Order,
  Resume,
  Revenue,
  UserCard as UserCardIcon,
} from "@/components/svg";
import { Valuer } from "@/types/valuer/model";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";

const UserCard: FC<UserCardProps> = ({ valuer, setIsOpen }) => {
  return (
    <div className="w-[296px] rounded-[8px] bg-white backdrop-blur-[14px] [box-shadow:0px_8px_16px_0px_rgba(0,0,0,0.08);]">
      <div className="py-3 px-6 flex flex-col gap-3">
        {/* User Info + Dasboard Link */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <UserCardIcon />

            <div className="flex flex-col items-start text-secondary">
              {/* Username */}
              <p className="typography-body-md">{valuer.username}</p>

              {/* Email */}
              <p className="typography-label-sm max-w-40 overflow-hidden text-ellipsis">
                {valuer.email}
              </p>
            </div>
          </div>

          {/* Link -> Dashboard */}
          <Link
            href={"/valuer/dashboard"}
            className="h-8 rounded border border-black/25 flex justify-center items-center"
            onClick={() => setIsOpen(false)}
          >
            <span className="typography-label-md font-[500] text-primary">
              Dashboard
            </span>
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/25 mt-2"></div>

        <div className="flex flex-col gap-1">
          {/* Link: resume */}
          <Link
            href={"/valuer/dashboard/resume"}
            className="flex gap-2 p-2 rounded hover:bg-blue-50 duration-200"
            onClick={() => setIsOpen(false)}
          >
            <Resume />
            <p className="typography-label-md text-secondary">Resume</p>
          </Link>
          {/* Link: revenue */}
          <Link
            href={"/valuer/dashboard/revenue"}
            className="flex gap-2 p-2 rounded hover:bg-blue-50 duration-200"
            onClick={() => setIsOpen(false)}
          >
            <Revenue />
            <p className="typography-label-md text-secondary">Revenue</p>
          </Link>
          {/* Link: order */}
          <Link
            href={"/valuer/dashboard/order"}
            className="flex gap-2 p-2 rounded hover:bg-blue-50 duration-200"
            onClick={() => setIsOpen(false)}
          >
            <Order />
            <p className="typography-label-md text-secondary">Order</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UserCard;

interface UserCardProps {
  valuer: Valuer;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
