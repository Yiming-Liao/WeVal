"use client";

import { useState } from "react";
import FormUsername from "./FormUsername";
import FormUsernameEdit from "./FormUsernameEdit";

const Username = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <div>
      {!isEditing ? (
        <FormUsername setIsEditing={setIsEditing} />
      ) : (
        <FormUsernameEdit setIsEditing={setIsEditing} />
      )}
    </div>
  );
};
export default Username;
