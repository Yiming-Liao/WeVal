"use client";

import { envConfig } from "@/config/envConfig";
import { useShow } from "@/hooks/admin/dashboard/membership/valuers/useShow";
import { Valuer } from "@/types/valuer/model";
import Image from "next/image";
import { useEffect, useState } from "react";

const ValuerShowPage = ({ params }: { params: Promise<{ email: string }> }) => {
  const { show } = useShow();
  const [valuer, setValuer] = useState<Valuer | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { email } = await params;
      if (!email) return;

      const valuer = await show({ email: decodeURIComponent(email) });
      if (valuer) {
        setValuer(valuer);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <>
      {valuer ? (
        <div>
          <div className="flex flex-col gap-4 p-4 border">
            <div className="flex flex-col gap-4">
              <p>Email: {valuer.email}</p>
              <p>Name: {valuer.username}</p>
              <p>Qualified: {valuer.isQualified ? "Yes" : "No"}</p>
              <p>
                Qualification data:
                {valuer.isValuerQualificationCreated ? "Created" : "None"}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              Applied data:
              <p>ABN: {valuer.valuerQualification?.abn}</p>
              <p>Name: {valuer.valuerQualification?.serviceArea}</p>
              <p>Name: {valuer.valuerQualification?.address}</p>
              <Image
                src={`${envConfig.API_URL}${envConfig.NEXT_PUBLIC_ADMIN_FILES_URL}${valuer.valuerQualification?.certificatePath}`}
                width={120}
                height={120}
                alt={""}
                unoptimized
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ValuerShowPage;
