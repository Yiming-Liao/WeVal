// [r: Valuer]

import { useRegisterPhoneVerifySend } from "@/hooks/valuer/auth/register/useRegisterPhoneVerifySend";
import { Dispatch, FC, FormEventHandler, SetStateAction } from "react";

const FormPhoneVerifySend: FC<Props> = ({ email, phone, setPhone }) => {
  const { registerPhoneVerifySend } = useRegisterPhoneVerifySend();

  // Send phone verification code
  const handlePhoneVerifySend: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const isRegistered = await registerPhoneVerifySend({
      email: email || "",
      phone,
    });
    if (isRegistered) {
      console.log("SMS sent!");
    }
  };
  return (
    <>
      {/* form */}
      <form onSubmit={handlePhoneVerifySend}>
        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">Phone</label>
          <input
            type="text"
            placeholder="+61000000000"
            className="border"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button>Send</button>
      </form>
    </>
  );
};
export default FormPhoneVerifySend;

interface Props {
  email: string | null;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
}
