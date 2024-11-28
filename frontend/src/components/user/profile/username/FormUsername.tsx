"use client";

import { FormEventHandler, useEffect, useState } from "react";
import { useUserStore } from "@/stores/userStore";
import { Button, Input } from "@/components/ui";
import { useUsernameChange } from "@/hooks/user/profile/useUsernameChange";

const FormUsername = () => {
  const { user } = useUserStore();
  const { usernameChange } = useUsernameChange();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  // Set user
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
    <form onSubmit={handleSubmit} className="flex gap-3">
      {/* Input: username */}
      <Input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        isLoading={!user}
        disabled={!isEditing}
        className="max-w-80"
      />

      {!isEditing ? (
        <>
          {/* Button: Edit */}
          <Button
            type="button"
            onClick={() => setIsEditing(true)}
            className="max-w-32"
            disabled={!user}
          >
            Edit
          </Button>
        </>
      ) : (
        <div className="flex gap-2">
          {/* Butons: Cancel & Confirm */}
          <Button
            type="button"
            onClick={() => {
              setIsEditing(false);
              setUsername(user!.username);
            }}
            className="w-32 !bg-gray-400"
          >
            Cancel
          </Button>
          <Button className="w-32">Confirm</Button>
        </div>
      )}
    </form>
  );
};
export default FormUsername;
