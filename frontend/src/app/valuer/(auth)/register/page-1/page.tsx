// [r: Valuer]

"use client";

import { FC, useState } from "react";
import FormEmailVerify from "@/components/valuer/auth/register/page-1/FormEmailVerify";
import FormEmailVerifySend from "@/components/valuer/auth/register/page-1/FormEmailVerifySend";

// RegisterEmailVerifyPage
const RegisterPage1: FC = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="flex flex-col items-center gap-16 p-16">
      <h1 className="text-4xl">RegisterPage1</h1>

      {/* form 寄送驗證碼 */}
      <FormEmailVerifySend email={email} setEmail={setEmail} />

      {/* form 註冊信箱 */}
      <FormEmailVerify email={email} />
    </div>
  );
};
export default RegisterPage1;
