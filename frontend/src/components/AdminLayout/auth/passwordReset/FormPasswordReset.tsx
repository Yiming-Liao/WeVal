// [r: Admin]

"use client";

import { usePasswordReset } from "@/hooks/admin/auth/usePasswordReset";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, Suspense, useState } from "react";

const FormPasswordReset = () => {
  const { passwordReset } = usePasswordReset();
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const passwordResetToken = searchParams.get("passwordResetToken"); // 獲取 URL 中的 passwordResetToken

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isReset = await passwordReset({
      passwordResetToken,
      password,
      passwordConfirm,
    });
    if (isReset) {
      push("/admin/login");
    }
  };

  return (
    <>
      {/* form */}
      <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-4 ">
        {/* password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">password</label>
          <input
            type="password"
            className="border-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* passwordConfirm */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">passwordConfirm</label>
          <input
            type="password"
            className="border-2"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
};

const FormPasswordResetWrapper = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <FormPasswordReset />
    </Suspense>
  );
};

export default FormPasswordResetWrapper;
