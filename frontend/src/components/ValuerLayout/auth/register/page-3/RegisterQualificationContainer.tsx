// [r: Valuer]

"use client";

import { FC, useState } from "react";
import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import FormRegisterQualificationWrapper from "./FormRegisterQualification";

const RegisterQualificationContainer: FC = () => {
  const { valuer } = useValuerAuth();
  const [isCreated, setIsCreated] = useState(false);

  if (!valuer) {
    return "Loading...";
  }

  return (
    <>
      {valuer?.isValuerQualificationCreated || isCreated ? (
        <div className="flex flex-col items-center">
          <p>Under review...</p>
          <p>We&apos;ll send you an email when its done.</p>
        </div>
      ) : (
        <div>
          {/* Form: FormRegisterQualification */}
          <FormRegisterQualificationWrapper setIsCreated={setIsCreated} />
        </div>
      )}
    </>
  );
};
export default RegisterQualificationContainer;
