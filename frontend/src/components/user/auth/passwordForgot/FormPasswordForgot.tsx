"use client";

import { usePasswordForgot } from "@/hooks/user/auth/usePasswordForgot";
import { FC, FormEventHandler, useState } from "react";

const FormPasswordForgot: FC = () => {
  const [email, setEmail] = useState("");
  const { passwordForgot } = usePasswordForgot();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const isSent = await passwordForgot({ email });
    if (isSent) {
      console.log("Email sent!");
    }
  };

  return (
    <>
      {/* form */}
      <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-4 ">
        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">email</label>
          <input
            type="email"
            className="border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
};
export default FormPasswordForgot;
