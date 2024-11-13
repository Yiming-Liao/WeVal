// [r: Valuer]

"use client";

import { FC, useState } from "react";
import FormEmailVerifySend from "./FormEmailVerifySend";
import FormEmailVerify from "./FormEmailVerify";

const EmailVerificationContainer: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);

  return (
    <div className="size-full flex flex-col gap-4">
      {/* Form 1: Send verification email */}
      <FormEmailVerifySend
        email={email}
        setEmail={setEmail}
        setIsSent={setIsSent}
      />

      {/* Form 2: Verify email & Go to page-2 */}
      <FormEmailVerify email={email} isSent={isSent} />
    </div>
  );
};
export default EmailVerificationContainer;
