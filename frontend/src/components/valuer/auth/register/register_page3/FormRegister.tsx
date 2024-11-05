// [r: Valuer]

"use client";

import { useRegister } from "@/hooks/valuer/auth/useRegister";
import { useRegisterPhoneVerifySend } from "@/hooks/valuer/auth/useRegisterPhoneVerifySend";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, useState } from "react";

const FormRegister = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email"); // Get email from URL searchParams

  const { registerPhoneVerifySend } = useRegisterPhoneVerifySend();
  const { register } = useRegister();

  const { push } = useRouter();

  const [phone, setPhone] = useState<string>("");
  const [phoneVerifyCode, setPhoneVerifyCode] = useState<string>("");

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

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

  // Register
  const handleRegister: FormEventHandler<HTMLFormElement> = async (e) => {
    console.log(123);
    e.preventDefault();
    const isRegistered = await register({
      email,
      username,
      phone,
      phoneVerifyCode,
      password,
      passwordConfirm,
    });

    // Push to [Register page 3: register-qualify]
    if (isRegistered) {
      push("/valuer/register-qualify");
    }
  };

  return (
    <>
      <div className="w-96 flex flex-col gap-4 ">
        {/* username */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">username</label>
          <input
            type="text"
            className="border-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Send phone verification code */}
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

        <form onSubmit={handleRegister}>
          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label htmlFor="">Phone verification code</label>
            <input
              type="text"
              placeholder="phoneVerifyCode"
              className="border"
              value={phoneVerifyCode}
              onChange={(e) => setPhoneVerifyCode(e.target.value)}
            />
          </div>
          {/* password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="">password</label>
            <input
              type="password"
              className="border-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* confirm password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="">confirm password</label>
            <input
              type="password"
              className="border-2"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
export default FormRegister;
