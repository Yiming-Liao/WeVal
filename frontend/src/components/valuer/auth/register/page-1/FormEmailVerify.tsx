// [r: Valuer]

import { ArrowNext } from "@/components/svg";
import { Agreement, Button, Input } from "@/components/ui";
import { useRegisterEmailVerify } from "@/hooks/valuer/auth/register/useRegisterEmailVerify";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import toast from "react-hot-toast";

const FormEmailVerify = ({ email, isSent }: FormEmailVerifyProps) => {
  const { push } = useRouter();
  const { registerEmailVerify, isLoading } = useRegisterEmailVerify();

  const [emailVerifyCode, setemailVerifyCode] = useState("");
  const [isAgree, setIsAgree] = useState<boolean>(false);

  // ⚡ Verify email & Go to next step
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!isAgree) {
      return toast.error(
        "Please agree to the terms and conditions to proceed.",
        {
          position: "bottom-left",
          duration: 4000,
        }
      );
    }
    const isCorrect = await registerEmailVerify({ email, emailVerifyCode });
    if (isCorrect)
      push(`/valuer/register/page-2?email=${encodeURIComponent(email)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full flex flex-col justify-between gap-2"
    >
      {/* Input: emailVerifyCode */}
      <Input
        placeholder="Verification code"
        minLength={6}
        maxLength={6}
        value={emailVerifyCode}
        onChange={(e) => setemailVerifyCode(e.target.value)}
        disabled={!isSent}
        className={`w-full ${
          !isSent ? "opacity-25" : "opacity-100"
        } duration-200`}
      />

      {/* Agreement & Button */}
      <div className="flex flex-col gap-4">
        {/* Agreement */}
        <Agreement isAgree={isAgree} setIsAgree={setIsAgree}>
          By checking this box, you agree to the terms of service and privacy
          policy, and may continue using the service.
        </Agreement>

        {/* Button: submit */}
        <Button type="submit" isDisabled={!isAgree} isLoading={isLoading}>
          <span className="flex gap-2">
            Next <ArrowNext />
          </span>
        </Button>
      </div>
    </form>
  );
};
export default FormEmailVerify;

interface FormEmailVerifyProps {
  email: string;
  isSent: boolean;
}
