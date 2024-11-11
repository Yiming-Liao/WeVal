"use client";

import RejectModal from "@/components/AdminLayout/dashboard/membership/valuers/RejectModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { envConfig } from "@/config/envConfig";
import { useApprove } from "@/hooks/admin/dashboard/membership/valuers/useApprove";
import { useShow } from "@/hooks/admin/dashboard/membership/valuers/useShow";
import { Valuer } from "@/types/valuer/model";
import { useEffect, useState } from "react";
import { useStore } from "@/hooks/valuer/qualificationRejection/useStore";

const ValuerShowPage = ({ params }: { params: Promise<{ email: string }> }) => {
  const { refresh } = useRouter();
  const { show } = useShow();
  const { approve } = useApprove();
  const { store } = useStore();

  const [valuer, setValuer] = useState<Valuer | null>(null);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const { email } = await params;
      if (!email) {
        return;
      }
      setEmail(decodeURIComponent(email));

      const valuer = await show({ email: decodeURIComponent(email) });
      if (valuer) {
        setValuer(valuer);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const handleApprove = async () => {
    const yes = confirm("Are you sure?");
    if (!yes) {
      return;
    }
    const valuer = await approve({ email });
    if (valuer) {
      refresh();
    }
  };

  // Modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [reason, setReason] = useState<string>("");

  const handleStoreReason = async () => {
    const yes = confirm("Are you sure?");
    if (!yes) {
      return;
    }
    const rejectionReason = await store({ email, reason });
    if (rejectionReason) {
      console.log(rejectionReason);
      setModalOpen(false);
    }
  };

  return (
    <>
      {valuer ? (
        <div>
          {!valuer.isQualified && valuer.valuerQualification ? (
            <>
              <div>
                <button
                  onClick={handleApprove}
                  className="bg text-slate-100 bg-green-600 rounded p-2 m-4"
                >
                  Approve
                </button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg text-slate-100 bg-red-600 rounded p-2 m-4"
                >
                  Reject
                </button>
              </div>
              <RejectModal
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
                handleStoreReason={handleStoreReason}
                reason={reason}
                setReason={setReason}
              />
            </>
          ) : null}
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

            {valuer.valuerQualification ? (
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
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ValuerShowPage;
