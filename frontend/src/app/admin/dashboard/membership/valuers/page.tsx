"use client";

import { useIndex } from "@/hooks/admin/dashboard/membership/valuers/useIndex";
import { Valuer } from "@/types/models/valuer.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ValuersPage = () => {
  const pathname = usePathname();
  const { index } = useIndex();

  const [valuers, setValuers] = useState<Valuer[]>([]);

  useEffect(() => {
    const fetchValuers = async () => {
      const valuers = await index();
      console.log(valuers);
      if (valuers) {
        setValuers(valuers);
      }
    };
    fetchValuers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <div>Valuers!</div>

        <div className="m-24 flex flex-col gap-4">
          {valuers.map((valuer) => (
            <Link
              href={`${pathname}/${valuer.email}`}
              key={valuer.email}
              className="flex gap-4 p-4 border"
            >
              <p>Email: {valuer.email}</p>
              <p>Name: {valuer.username}</p>

              <p>Status: {valuer.status}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ValuersPage;
