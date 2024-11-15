// [r: Admin]

"use client";

import { Button, InputPassword } from "@/components/ui";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { usePasswordChange } from "@/hooks/admin/auth/usePasswordChange";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

const FormPassworChanged = () => {
  const { push } = useRouter();
  const { admin } = useAdminAuth();
  const { passwordChange, isLoading } = usePasswordChange();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const handlePasswordChange: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const isChanged = await passwordChange({
      password,
      newPassword,
      newPasswordConfirm,
    });

    if (isChanged) {
      push(`/admin/${admin?.uuid}/dashboard`);
    }
  };

  return (
    <form
      onSubmit={handlePasswordChange}
      className="size-full flex flex-col gap-4"
    >
      {/* Input: password */}
      <InputPassword
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex flex-col gap-4 mt-8">
        {/* Input: newPassword */}
        <InputPassword
          type="password"
          placeholder="New password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <p className="typography-label-sm text-deep">
          Please set a password that is at least 6 characters long, includes at
          least one uppercase letter, and must not be the same as your username
          or email.
        </p>
        {/* Input: newPasswordConfirm */}
        <InputPassword
          type="password"
          placeholder="Confirm new password"
          required
          value={newPasswordConfirm}
          onChange={(e) => setNewPasswordConfirm(e.target.value)}
        />
      </div>
      {/* Button: submit */}
      <Button type="submit" isLoading={isLoading}>
        Change password
      </Button>{" "}
    </form>
  );
};
export default FormPassworChanged;
