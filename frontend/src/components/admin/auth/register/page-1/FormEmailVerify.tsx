import { useRegisterEmailVerify } from "@/hooks/user/auth/register/useRegisterEmailVerify";
import { useRouter } from "next/navigation";
import { FC, FormEventHandler, useState } from "react";

const FormEmailVerify: FC<Props> = ({ email }) => {
  const { push } = useRouter();
  const { registerEmailVerify } = useRegisterEmailVerify();

  const [emailVerifyCode, setemailVerifyCode] = useState("");
  const [isAgree, setIsAgree] = useState<boolean>(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!isAgree) {
      return alert("Please agree");
    }
    const isCorrect = await registerEmailVerify({ email, emailVerifyCode });
    if (isCorrect)
      push(`/user/register/page-2?email=${encodeURIComponent(email)}`);
  };

  return (
    <>
      {/* form 註冊信箱 */}
      <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-4 ">
        {/* emailVerifyCode */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">emailVerifyCode</label>
          <input
            type="emailVerifyCode"
            className="border-2"
            value={emailVerifyCode}
            onChange={(e) => setemailVerifyCode(e.target.value)}
          />
        </div>

        <div>
          <label>Agree?</label>
          <input
            type="checkbox"
            checked={isAgree}
            onChange={() => setIsAgree((prev) => !prev)}
            className="size-8"
          />
        </div>

        <button className="border">Next</button>
      </form>
    </>
  );
};
export default FormEmailVerify;

interface Props {
  email: string;
}
