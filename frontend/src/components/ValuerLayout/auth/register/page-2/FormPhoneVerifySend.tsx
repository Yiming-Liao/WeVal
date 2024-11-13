// [r: Valuer]

import { ButtonOutline, Input } from "@/components/ui";
import { useCountdown } from "@/hooks/utils/useCountDown";
import { useRegisterPhoneVerifySend } from "@/hooks/valuer/auth/register/useRegisterPhoneVerifySend";
import { Dispatch, FC, FormEventHandler, SetStateAction } from "react";

const FormPhoneVerifySend: FC<Props> = ({
  email,
  phone,
  setPhone,
  setIsSent,
}) => {
  const { registerPhoneVerifySend, isLoading } = useRegisterPhoneVerifySend();
  const { timeLeft, isCounting, startCountdown } = useCountdown(30); // 30 seconds count down

  // ⚡ Send verification SMS
  const handlePhoneVerifySend: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const isSent = await registerPhoneVerifySend({
      email: email || "",
      phone,
    });
    if (isSent) {
      setIsSent(true);
      startCountdown();
    }
  };

  // Button text (Send | Counting)
  const buttonText = !isCounting ? (
    "Send"
  ) : (
    <span>
      <span className="inline-block w-5">{timeLeft}</span>s
    </span>
  );

  return (
    <form onSubmit={handlePhoneVerifySend} className="flex gap-4">
      {/* Input: phone */}
      <Input
        type="text"
        placeholder="Phone number (e.g. +61000000000)"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-auto"
      />

      {/* Button: submit */}
      <ButtonOutline
        type="submit"
        isDisabled={isCounting}
        isLoading={isLoading}
        className="min-w-20 h-full"
      >
        {buttonText}
      </ButtonOutline>
    </form>
  );
};
export default FormPhoneVerifySend;

interface Props {
  email: string | null;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  setIsSent: Dispatch<SetStateAction<boolean>>;
}
