// [r: Valuer]

"use client";

import { FC, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui";
import FormPhoneVerifySend from "./FormPhoneVerifySend";
import FormRegister from "./FormRegister";

const RegisterContainer: FC = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // Get email from URL searchParams

  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);

  return (
    <div className="size-full flex flex-col gap-4">
      {/* Input: username */}
      <Input
        type="text"
        placeholder="Username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="min-h-[52px]"
      />

      {/* Form 1: Send verification SMS */}
      <FormPhoneVerifySend
        email={email}
        phone={phone}
        setPhone={setPhone}
        setIsSent={setIsSent}
      />

      {/* Form 2: Register & Go to page-3 */}
      <FormRegister
        username={username}
        email={email}
        phone={phone}
        isSent={isSent}
      />
    </div>
  );
};

// Wrapper
const RegisterContainerWrapper: FC = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <RegisterContainer />
    </Suspense>
  );
};

export default RegisterContainerWrapper;
