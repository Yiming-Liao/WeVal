// [r: Valuer]

"use client";

import { Button, Input } from "@/components/ui";
import { useLogin } from "@/hooks/valuer/auth/useLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, FormEventHandler, useState } from "react";

const FormLogin: FC = () => {
  const { push } = useRouter();
  const { login, isLoading } = useLogin();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // ⚡ Login
  const handleLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const isLoggedIn = await login({ email, password });

    if (isLoggedIn) {
      if (typeof isLoggedIn !== "boolean" && isLoggedIn.isQualified) {
        push("/valuer/dashboard");
      } else {
        push(`/valuer/register/page-3?email=${encodeURIComponent(email)}`);
      }
    }
  };

  return (
    <form onSubmit={handleLogin} className="size-full flex flex-col gap-9">
      <div className="flex flex-col gap-4">
        {/* Input: email */}
        <Input
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Input: password */}
        <Input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link
          href={"/valuer/password-forgot"}
          className="typography-label-sm text-primary"
        >
          Forgot password?
        </Link>
      </div>
      <Button type="submit" isLoading={isLoading}>
        Log in
      </Button>
    </form>
  );
};
export default FormLogin;
