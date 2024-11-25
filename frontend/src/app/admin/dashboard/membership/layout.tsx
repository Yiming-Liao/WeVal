// [r: Admin]

import Link from "next/link";
import { ReactNode } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <nav className="h-12 bg-slate-200 flex items-center gap-4 px-4">
        <Link href={`/admin/dashboard/membership/valuers`}>Valuers</Link>
        <Link href={`/admin/dashboard/membership/users`}>Users</Link>
      </nav>
      {children}
    </>
  );
}
