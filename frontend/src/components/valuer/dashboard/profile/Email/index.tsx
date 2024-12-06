// [r: Valuer]

"use client";

import { Loading } from "@/components/svg";
import { Valuer } from "@/types/models/valuer.types";
import { FC } from "react";

const Email: FC<{ valuer: Valuer | null }> = ({ valuer }) => {
  return (
    <div className="h-[52px] flex items-center">
      {!valuer ? (
        <Loading />
      ) : (
        <p className="typography-label-md text-deep">{valuer?.email}</p>
      )}
    </div>
  );
};
export default Email;
