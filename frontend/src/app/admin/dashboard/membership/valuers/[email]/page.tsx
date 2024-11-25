"use client";

import RejectModal from "@/components/admin/dashboard/membership/valuers/RejectModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { envConfig } from "@/config/envConfig";
import { useApprove } from "@/hooks/admin/dashboard/membership/valuers/useApprove";
import { useShow } from "@/hooks/admin/dashboard/membership/valuers/useShow";
import { Valuer } from "@/types/models/valuer.types";
import { useEffect, useState } from "react";
import { useReject } from "@/hooks/admin/dashboard/membership/valuers/useReject";

const ValuerShowPage = ({ params }: { params: Promise<{ email: string }> }) => {
  const { refresh } = useRouter();
  const { show } = useShow();
  const { approve } = useApprove();
  const { reject } = useReject();

  const [valuer, setValuer] = useState<Valuer | null>(null);
  const [email, setEmail] = useState<string>("");

  // Fetch the valuer
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

  // Approve
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
  const [message, setMessage] = useState<string>("");

  // Reject
  const handleReject = async () => {
    const yes = confirm("Are you sure?");
    if (!yes) {
      return;
    }
    const isRejected = await reject({ email, message });
    if (isRejected) {
      refresh();
      setModalOpen(false);
    }
  };

  console.log(valuer);
  return (
    <>
      {valuer ? (
        <div>
          {valuer.status === "qualificationCreated" && (
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
                handleReject={handleReject}
                message={message}
                setMessage={setMessage}
              />
            </>
          )}
          <div className="flex flex-col gap-4 p-4 border">
            <div className="flex flex-col gap-4">
              <p>Email: {valuer.email}</p>
              <p>Name: {valuer.username}</p>
              <p>Status: {valuer.status}</p>
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
