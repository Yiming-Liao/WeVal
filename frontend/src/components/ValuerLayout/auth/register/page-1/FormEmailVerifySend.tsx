// [r: Valuer]

import { ButtonOutline, Input } from "@/components/ui";
import { useRegisterEmailVerifySend } from "@/hooks/valuer/auth/register/useRegisterEmailVerifySend";
import { useCountdown } from "@/hooks/utils/useCountDown";
import { Dispatch, FormEventHandler, SetStateAction } from "react";

const FormEmailVerifySend = ({
  email,
  setEmail,
  setIsSent,
}: FormEmailVerifySendProps) => {
  const { registerEmailVerifySend, isLoading } = useRegisterEmailVerifySend();
  const { timeLeft, isCounting, startCountdown } = useCountdown(30); // 30 seconds count down

  // ⚡ Send verify email
  const handleSendVerifyEmail: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const isSent = await registerEmailVerifySend({ email });
    if (isSent) {
      setIsSent(true);
      startCountdown();
    }
  };

  // Button text (Send | Counting)
  const buttonText = !isCounting ? (
    "Send verification email"
  ) : (
    <span>
      Please wait
      <span className="inline-block w-5 ml-1 text-end">{timeLeft}</span>s to
      resend
    </span>
  );

  return (
    <form onSubmit={handleSendVerifyEmail} className="flex flex-col gap-4">
      {/* Input: email */}
      <Input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Button: submit */}
      <ButtonOutline
        type="submit"
        isDisabled={isCounting}
        isLoading={isLoading}
      >
        {buttonText}
      </ButtonOutline>
    </form>
  );
};
export default FormEmailVerifySend;

interface FormEmailVerifySendProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setIsSent: Dispatch<SetStateAction<boolean>>;
}
