"use client";

import { FC, useState } from "react";
import FormEmailVerify from "@/components/user/auth/register/register_page1/FormEmailVerify";
import FormEmailVerifySend from "@/components/user/auth/register/register_page1/FormEmailVerifySend";

const RegisterEmailVerifyPage: FC = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="flex flex-col items-center gap-16 p-16">
      <h1 className="text-4xl">RegisterEmailVerifyPage</h1>
      {/* form 寄送驗證碼 */}
      <FormEmailVerifySend email={email} setEmail={setEmail} />
      {/* form 註冊信箱 */}
      <FormEmailVerify email={email} />s
    </div>
  );
};
export default RegisterEmailVerifyPage;
