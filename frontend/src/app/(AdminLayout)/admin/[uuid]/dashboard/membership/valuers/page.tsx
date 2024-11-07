"use client";

import { useIndex } from "@/hooks/admin/dashboard/membership/valuers/useIndex";
import { useEffect } from "react";

const ValuersPage = () => {
  const { index } = useIndex();

  useEffect(() => {
    const fetchValuers = async () => {
      const valuers = await index();
      console.log(valuers);
    };
    fetchValuers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <div>Valuers!</div>
      </div>
    </div>
  );
};
export default ValuersPage;
