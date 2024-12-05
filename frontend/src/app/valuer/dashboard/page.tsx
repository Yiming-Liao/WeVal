// [r: Valuer]

import Link from "next/link";

const ValuerDashboardPage = () => {
  return (
    <div className="flex flex-col items-center gap-16 p-16">
      <h1 className="text-4xl">ValuerDashboardPage</h1>

      <div className="flex gap-8">
        <Link
          href={"/valuer/dashboard/profile"}
          className="size-36 rounded-md bg-slate-200 flex justify-center items-center button-interaction"
        >
          <span className="">Profile</span>
        </Link>

        <Link
          href={"/valuer/dashboard/orders"}
          className="size-36 rounded-md bg-slate-200 flex justify-center items-center button-interaction"
        >
          <span className="">Orders</span>
        </Link>

        <Link
          href={"/valuer/dashboard/resume"}
          className="size-36 rounded-md bg-slate-200 flex justify-center items-center button-interaction"
        >
          <span className="">Resume</span>
        </Link>

        <Link
          href={"/valuer/dashboard/revenue"}
          className="size-36 rounded-md bg-slate-200 flex justify-center items-center button-interaction"
        >
          <span className="">Revenue</span>
        </Link>
      </div>
    </div>
  );
};
export default ValuerDashboardPage;
