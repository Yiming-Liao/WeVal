// [r: Admin]

"use client";

import { usePasswordChange } from "@/hooks/admin/auth/usePasswordChange";
import { FormEventHandler, useState } from "react";

const PassworChangedPage = () => {
  const { passwordChange } = usePasswordChange();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await passwordChange({ password, newPassword, newPasswordConfirm });
  };

  return (
    <div className="flex flex-col items-center gap-16 p-16">
      <h1 className="text-4xl">PassworChangedPage</h1>

      {/* form */}
      <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-4 ">
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
        {/* newPassword */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">newPassword</label>
          <input
            type="password"
            className="border-2"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        {/* passwordConfirm */}
        <div className="flex flex-col gap-1">
          <label htmlFor="">newPasswordConfirm</label>
          <input
            type="password"
            className="border-2"
            value={newPasswordConfirm}
            onChange={(e) => setNewPasswordConfirm(e.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};
export default PassworChangedPage;
