// [r: Valuer]

"use client";

import { Button, InputPassword } from "@/components/ui";
import { usePasswordReset } from "@/hooks/valuer/auth/usePasswordReset";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, Suspense, useState } from "react";

const FormPasswordReset = () => {
  const { push } = useRouter();
  const { passwordReset, isLoading } = usePasswordReset();
  const searchParams = useSearchParams();
  const passwordResetToken = searchParams.get("passwordResetToken"); // Get passwordResetToken from URL

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handlePasswordReset: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isReset = await passwordReset({
      passwordResetToken,
      password,
      passwordConfirm,
    });
    if (isReset) {
      push("/valuer/login");
    }
  };

  return (
    <form
      onSubmit={handlePasswordReset}
      className="w-full flex flex-col gap-4 "
    >
      {/* Input: password */}
      <InputPassword
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="typography-label-sm text-deep">
        Please set a password that is at least 6 characters long, includes at
        least one uppercase letter, and must not be the same as your username or
        email.
      </p>

      {/* Input: confirm password */}
      <InputPassword
        type="password"
        placeholder="Confirm Password"
        required
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      {/* Button: submit */}
      <Button type="submit" isLoading={isLoading}>
        Reset password
      </Button>
    </form>
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
