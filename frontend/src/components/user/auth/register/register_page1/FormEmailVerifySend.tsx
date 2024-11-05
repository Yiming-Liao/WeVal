import { useRegisterEmailVerifySend } from "@/hooks/user/auth/useRegisterEmailVerifySend";
import { Dispatch, FC, FormEventHandler, SetStateAction } from "react";

const FormEmailVerifySend: FC<Props> = ({ email, setEmail }) => {
  const { registerEmailVerifySend } = useRegisterEmailVerifySend();

  // 寄送驗證信
  const handleSendVerifyCode: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isSent = await registerEmailVerifySend({ email });
    if (isSent) {
      console.log("email sent");
    }
  };

  return (
    <>
      {/* form */}
      <form onSubmit={handleSendVerifyCode} className="w-96 flex gap-4 ">
        {/* email */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="">email</label>
          <input
            type="email"
            className="border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="border">Send</button>
      </form>
    </>
  );
};
export default FormEmailVerifySend;

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}
