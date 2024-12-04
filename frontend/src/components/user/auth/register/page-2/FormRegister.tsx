// [r: User]

"use client";

import { Loading } from "@/components/svg";
import { Agreement, Button, Input, InputPassword } from "@/components/ui";
import { useRegister } from "@/hooks/user/auth/register/useRegister";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, Suspense, useState } from "react";

const FormRegister = () => {
  const { push } = useRouter();
  const { register, isLoading } = useRegister();
  const email = useSearchParams().get("email"); // Get email from URL

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isAgree, setIsAgree] = useState<boolean>(false);

  // ⚡ Register
  const handleRegister: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isRegistered = await register({
      email,
      username,
      password,
      passwordConfirm,
    });

    // Push to [Dashboard]
    if (isRegistered) {
      push("/user/dashboard");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="size-full flex flex-col justify-between"
    >
      <div className="flex flex-col gap-4">
        {/* Input: username */}
        <Input
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />

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
          least one uppercase letter, and must not be the same as your username
          or email.
        </p>

        {/* Input: confirm password */}
        <InputPassword
          type="password"
          placeholder="Confirm Password"
          required
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </div>

      {/* Agreement & Button */}
      <div className="flex flex-col gap-4">
        {/* Agreement */}
        <Agreement isAgree={isAgree} setIsAgree={setIsAgree}>
          By checking this box, you agree to the terms of service and privacy
          policy, and may continue using the service.
        </Agreement>

        {/* Button: submit */}
        <Button type="submit" isDisabled={!isAgree} isLoading={isLoading}>
          Sign up
        </Button>
      </div>
    </form>
  );
};

// When using useSearchParams, we need to wrap the component.
const FormRegisterWrapper = () => {
  return (
    <Suspense fallback={<Loading />}>
      <FormRegister />
    </Suspense>
  );
};

export default FormRegisterWrapper;
