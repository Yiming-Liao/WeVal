"use client";

import { useRegister } from "@/hooks/user/auth/register/useRegister";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, Suspense, useState } from "react";

const FormRegister = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // 獲取 URL 中的 email

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register } = useRegister();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isRegistered = await register({
      email,
      username,
      password,
      passwordConfirm,
    });
    if (isRegistered) {
      push("/user/dashboard");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-4 ">
        {/* username */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">username</label>
          <input
            type="text"
            className="border-2"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>

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

        {/* confirm password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">confirm password</label>
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

const FormRegisterWrapper = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <FormRegister />
    </Suspense>
  );
};

export default FormRegisterWrapper;
