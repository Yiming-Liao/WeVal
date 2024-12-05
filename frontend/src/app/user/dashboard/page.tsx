// [r: User]

import Link from "next/link";

const UserDashboardPage = () => {
  return (
    <div className="flex flex-col items-center gap-16 p-16">
      <h1 className="text-4xl">UserDashboardPage</h1>

      <div className="flex gap-8">
        <Link
          href={"/user/dashboard/profile"}
          className="size-36 rounded-md bg-slate-200 flex justify-center items-center button-interaction"
        >
          <span className="">Profile</span>
        </Link>

        <Link
          href={"/user/dashboard/orders"}
          className="size-36 rounded-md bg-slate-200 flex justify-center items-center button-interaction"
        >
          <span className="">Orders</span>
        </Link>
      </div>
    </div>
  );
};
export default UserDashboardPage;
