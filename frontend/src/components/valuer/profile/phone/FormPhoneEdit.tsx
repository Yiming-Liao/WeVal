import { usePhoneVerify } from "@/hooks/user/profile/usePhoneVerify";
import { usePhoneVerifySend } from "@/hooks/user/profile/usePhoneVerifySend";
import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";

const FormPhoneEdit: FC<FormPasswordProps> = ({ setIsEditing }) => {
  const { phoneVerifySend } = usePhoneVerifySend();
  const { phoneVerify } = usePhoneVerify();

  const [phone, setPhone] = useState<string>("");
  const [phoneVerifyCode, setPhoneVerifyCode] = useState<string>("");

  const handleSend: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isSent = await phoneVerifySend({ phone });
    if (isSent) {
      console.log("isSent!");
    }
  };

  const handleVerify: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isVerified = await phoneVerify({ phone, phoneVerifyCode });
    if (isVerified) {
      console.log("isVerified!");
      setIsEditing(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSend}>
        <input
          type="text"
          placeholder="+61000000000"
          className="border"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
        <button>Send</button>
      </form>

      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="phoneVerifyCode"
          className="border"
          value={phoneVerifyCode}
          onChange={(e) => setPhoneVerifyCode(e.target.value)}
        />
        <button>Verify and change</button>
      </form>
    </>
  );
};
export default FormPhoneEdit;

interface FormPasswordProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
