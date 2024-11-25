// [r: Valuer]

"use client";

import { FC, useEffect } from "react";
import FormRegisterQualificationWrapper from "./FormRegisterQualification";
import QualificationRejection from "./QualificationRejection";
import { useValuerData } from "@/hooks/valuer/useValuerData";
import { useValuerStore } from "@/stores/valuerStore";

const RegisterQualificationContainer: FC = () => {
  const { valuerData } = useValuerData();
  const { valuer } = useValuerStore();

  useEffect(() => {
    const fetchValuerData = async () => {
      await valuerData();
    };

    fetchValuerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!valuer) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Waiting review from admin */}
      {valuer.status === "qualificationCreated" ? (
        <div className="w-full flex flex-col items-center gap-2">
          <p className="text-primary typography-body-md font-[500]">
            Your qualification request is under review.
          </p>
          <p className="text-deep">
            You will be notified by email once the review is complete.
          </p>
        </div>
      ) : (
        // noQualificationCreated || qualificationRejected
        <div className="size-full flex flex-col gap-6">
          {/* Rejected from admin */}
          {valuer.status === "qualificationRejected" && (
            <QualificationRejection
              message={valuer.qualificationRejectionMessage}
            />
          )}
          {/* Form: FormRegisterQualification */}
          <FormRegisterQualificationWrapper />
        </div>
      )}
    </>
  );
};
export default RegisterQualificationContainer;
