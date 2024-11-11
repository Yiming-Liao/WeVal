"use client";

import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import { useIndex } from "@/hooks/valuer/qualificationRejection/useIndex";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const { valuer } = useValuerAuth();
  const { index } = useIndex();

  const [qualificationRejection, setQualificationRejection] =
    useState<string>("");

  useEffect(() => {
    if (!valuer) return;
    const fetchRejectionReason = async () => {
      const qualificationRejection = await index({ email: valuer?.email });
      if (qualificationRejection) {
        setQualificationRejection(qualificationRejection.reason);
      }
    };
    fetchRejectionReason();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valuer]);

  return (
    <div className="flex flex-col items-center gap-16 p-16">
      <h1 className="text-4xl">DashboardPage</h1>

      <div className="border-4 border-red-600 p-4">
        <p>Status: Reject</p>
        <p>Rejection reason: {qualificationRejection}</p>
      </div>
    </div>
  );
};
export default DashboardPage;
