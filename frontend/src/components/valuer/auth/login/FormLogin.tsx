// [r: Valuer]

"use client";

import { useLogin } from "@/hooks/valuer/auth/useLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, FormEventHandler, useState } from "react";

const FormLogin: FC = () => {
  const { login } = useLogin();
  const { push } = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const isLoggedIn = await login({ email, password });

    if (isLoggedIn) {
      if (
        typeof isLoggedIn !== "boolean" &&
        isLoggedIn.isValuerQualificationCreated
      ) {
        push("/valuer/dashboard");
      } else {
        push("/valuer/register/page-3");
      }
    }
  };

  return (
    <>
      {/* form */}
      <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-4 ">
        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">email</label>
          <input
            type="email"
            className="border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <Link href={"/user/password-forgot"}>Forgot password?</Link>

        <button>Submit</button>
      </form>
    </>
  );
};
export default FormLogin;
