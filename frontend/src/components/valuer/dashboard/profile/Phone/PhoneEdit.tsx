import { Button, ButtonOutline, Input } from "@/components/ui";
import { useCountdown } from "@/hooks/utils/useCountDown";
import { usePhoneVerifySend } from "@/hooks/valuer/profile/usePhoneVerifySend";
import { usePhoneVerify } from "@/hooks/valuer/profile/usePhoneVerify";
import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";

const PhoneEdit: FC<PhoneEditProps> = ({ setIsEditing }) => {
  const { phoneVerifySend, isLoading } = usePhoneVerifySend();
  const { phoneVerify } = usePhoneVerify();
  const { timeLeft, isCounting, startCountdown } = useCountdown(30); // 30 seconds count down

  const [phone, setPhone] = useState<string>("");
  const [phoneVerifyCode, setPhoneVerifyCode] = useState<string>("");

  // ⚡ Send verification SMS
  const handleSend: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isSent = await phoneVerifySend({ phone });
    if (isSent) {
      startCountdown();
    }
  };

  // Outline Button text (Send | Counting)
  const buttonText = !isCounting ? (
    "Send"
  ) : (
    <span>
      <span className="inline-block w-5">{timeLeft}</span>s
    </span>
  );

  // ⚡ Verify phone
  const handleVerify: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isVerified = await phoneVerify({ phone, phoneVerifyCode });
    if (isVerified) {
      console.log("isVerified!");
      setIsEditing(false);
    }
  };

  return (
    <div className="max-w-96 flex flex-col gap-3">
      {/* Form: Send verification SMS */}
      <form onSubmit={handleSend} className="flex flex-col gap-3">
        <Input
          type="text"
          placeholder="Phone number (e.g. +61000000000)"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Submit button */}
        <ButtonOutline
          type="submit"
          isDisabled={isCounting}
          isLoading={isLoading}
        >
          {buttonText}
        </ButtonOutline>
      </form>

      {/* Form: Verify phone */}
      <form onSubmit={handleVerify} className="flex flex-col gap-3">
        <Input
          type="text"
          placeholder="phoneVerifyCode"
          value={phoneVerifyCode}
          onChange={(e) => setPhoneVerifyCode(e.target.value)}
        />

        {/* Butons: Cancel & Submit */}
        <div className="w-full flex gap-3">
          <Button
            type="button"
            onClick={() => {
              setIsEditing(false);
            }}
            className=" !bg-gray-400"
          >
            Cancel
          </Button>

          <Button type="submit" className="">
            Verify & Change
          </Button>
        </div>
      </form>
    </div>
  );
};
export default PhoneEdit;

interface PhoneEditProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
