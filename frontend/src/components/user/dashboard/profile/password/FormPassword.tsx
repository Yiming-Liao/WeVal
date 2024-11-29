"use client";

import { Button, InputPassword } from "@/components/ui";
import { usePasswordChange } from "@/hooks/user/profile/usePasswordChange";
import { FormEventHandler, useState } from "react";

const FormPassword = () => {
  const { passwordChange } = usePasswordChange();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isChanged = await passwordChange({
      password,
      newPassword,
      newPasswordConfirm,
    });
    if (isChanged) {
      console.log("isChanged!");
      setIsEditing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-52 flex justify-between">
      {/* Left */}
      <div className="w-full max-w-80 flex flex-col gap-14">
        <div className="flex justify-between items-center">
          <p className="flex items-center">********</p>

          {/* Button: Change */}
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="typography-label-md text-silver bg-white rounded-lg py-2 px-6 border border-black/25"
          >
            Change Password
          </button>
        </div>

        {/* Input: Old Password */}
        {isEditing && (
          <InputPassword
            placeholder="Old Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
      </div>

      {isEditing && (
        <div className="relative -top-[35px] max-w-80 w-full flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <InputPassword
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <p className="typography-label-sm text-deep font-light">
              Please set a password that is 6 to 12 characters long, includes at
              least one uppercase letter, and must not be the same as your
              username or email.
            </p>

            <InputPassword
              placeholder="Confirm Password"
              value={newPasswordConfirm}
              onChange={(e) => setNewPasswordConfirm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            {/* Butons: Cancel & Confirm */}
            <Button
              type="button"
              onClick={() => setIsEditing(false)}
              className="!bg-gray-400"
            >
              Cancel
            </Button>
            <Button>Confirm</Button>
          </div>
        </div>
      )}
    </form>
  );
};
export default FormPassword;
