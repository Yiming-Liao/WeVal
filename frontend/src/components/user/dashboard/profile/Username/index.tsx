// [r: User]

"use client";

import { FC, FormEventHandler, useEffect, useState } from "react";
import { Button, Input } from "@/components/ui";
import { useUsernameChange } from "@/hooks/user/profile/useUsernameChange";
import { Loading } from "@/components/svg";
import { User } from "@/types/models/user.types";

const FormUsername: FC<{ user: User | null }> = ({ user }) => {
  const { usernameChange, isLoading } = useUsernameChange();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  // Set username
  useEffect(() => {
    if (!user) return;
    setUsername(user.username);
  }, [user]);

  // ⚡ Change username
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isChanged = await usernameChange({ username });
    if (isChanged) {
      setIsEditing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3">
      {/* Input: username */}
      {!isEditing ? (
        <div className="w-48 h-[52px] flex items-center">
          {!user || isLoading ? (
            <Loading />
          ) : (
            <p className="typography-label-md text-deep">{username}</p>
          )}
        </div>
      ) : (
        <Input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="max-w-64"
        />
      )}

      {!isEditing ? (
        <>
          {/* Button: Edit */}
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="h-10 typography-label-md text-silver bg-white rounded-lg py-2 px-6 border border-black/25"
          >
            Edit
          </button>
        </>
      ) : (
        <div className="w-full flex gap-2">
          {/* Butons: Cancel & Confirm */}
          <Button
            type="button"
            onClick={() => {
              setIsEditing(false);
              setUsername(user!.username);
            }}
            className="max-w-32 !bg-gray-400"
          >
            Cancel
          </Button>

          <Button type="submit" className="max-w-32">
            Confirm
          </Button>
        </div>
      )}
    </form>
  );
};
export default FormUsername;
