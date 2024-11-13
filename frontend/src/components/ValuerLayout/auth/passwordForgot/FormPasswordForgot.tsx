// [r: Valuer]

"use client";

import { Button, Input } from "@/components/ui";
import { usePasswordForgot } from "@/hooks/valuer/auth/usePasswordForgot";
import { useCountdown } from "@/hooks/utils/useCountDown";
import { FC, FormEventHandler, useState } from "react";

const FormPasswordForgot: FC = () => {
  const { passwordForgot, isLoading } = usePasswordForgot();
  const { timeLeft, isCounting, startCountdown } = useCountdown(30); // 30 seconds count down

  const [email, setEmail] = useState("");

  // ⚡ Send reset email
  const handleSendResetEmail: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const isSent = await passwordForgot({ email });
    if (isSent) {
      startCountdown();
    }
  };

  // Button text (Send | Counting)
  const buttonText = !isCounting ? (
    "Send password reset email"
  ) : (
    <span>
      Please wait
      <span className="inline-block w-5 ml-1 text-end">{timeLeft}</span>s to
      resend
    </span>
  );

  return (
    <form onSubmit={handleSendResetEmail} className="w-96 flex flex-col gap-4">
      {/* Input: email */}
      <Input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Button: submit */}
      <Button type="submit" isDisabled={isCounting} isLoading={isLoading}>
        {buttonText}
      </Button>
    </form>
  );
};
export default FormPasswordForgot;
