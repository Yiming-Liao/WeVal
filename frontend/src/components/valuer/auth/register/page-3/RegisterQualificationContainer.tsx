// [r: Valuer]

"use client";

import { FC } from "react";
import FormRegisterQualificationWrapper from "./FormRegisterQualification";
import QualificationRejection from "./QualificationRejection";
import { useValuerStore } from "@/stores/valuerStore";
import { useValuerInit } from "@/hooks/valuer/useValuerInit";
import { Loading } from "@/components/svg";
import { ValuerStatus } from "@/types/models/valuer.types";
import { Role } from "@/types/role.types";

const RegisterQualificationContainer: FC = () => {
  const { valuer } = useValuerStore();
  useValuerInit({ role: Role.VALUER });
  console.log(valuer);
  if (!valuer) {
    return <Loading />;
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
          {/* Rejected by admin */}
          {valuer.status === ValuerStatus.QualificationRejected && (
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
