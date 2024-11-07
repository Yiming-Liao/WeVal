// [r: Admin]

"use client";

import { useAdminAuth } from "@/contexts/AdminAuthContext";
import Link from "next/link";
import { ReactNode } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { admin } = useAdminAuth();

  return (
    <>
      <nav className="h-12 bg-slate-200 flex items-center gap-4 px-4">
        <Link
          href={`/admin/${admin?.uuid}/dashboard/membership/valuers`}
          className={`${!admin ? "pointer-events-none" : ""}`}
        >
          Valuers
        </Link>
        <Link
          href={`/admin/${admin?.uuid}/dashboard/membership/users`}
          className={`${!admin ? "pointer-events-none" : ""}`}
        >
          Users
        </Link>
      </nav>
      {children}
    </>
  );
}
