// [r: Valuer]

import { Agreement, Button, Input, InputPassword } from "@/components/ui";
import { useRegister } from "@/hooks/valuer/auth/register/useRegister";
import { useRouter } from "next/navigation";
import { FC, FormEventHandler, useState } from "react";

const FormRegister: FC<Props> = ({ username, email, phone, isSent }) => {
  const { push } = useRouter();
  const { register, isLoading } = useRegister();

  const [phoneVerifyCode, setPhoneVerifyCode] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const [isAgree, setIsAgree] = useState<boolean>(false);

  // ⚡ Send verification SMS
  const handleRegister: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isRegistered = await register({
      email,
      username,
      phone,
      phoneVerifyCode,
      password,
      passwordConfirm,
    });

    // Push to [Register page 3]
    if (isRegistered) {
      push(`/valuer/register/page-3?email=${encodeURIComponent(email || "")}`);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="h-full flex flex-col justify-between gap-2"
    >
      <div className="flex flex-col gap-4">
        {/* Input: phoneVerifyCode */}
        <Input
          placeholder="Verification code"
          minLength={6}
          maxLength={6}
          value={phoneVerifyCode}
          onChange={(e) => setPhoneVerifyCode(e.target.value)}
          disabled={!isSent}
          className={`w-full ${
            !isSent ? "opacity-25" : "opacity-100"
          } duration-200`}
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
export default FormRegister;

interface Props {
  username: string;
  email: string | null;
  phone: string;
  isSent: boolean;
}
