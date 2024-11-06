"use client";

import { useState } from "react";
import FormPassword from "./FormPassword";
import FormPasswordEdit from "./FormPasswordEdit";

const Password = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <div>
      {!isEditing ? (
        <FormPassword setIsEditing={setIsEditing} />
      ) : (
        <FormPasswordEdit setIsEditing={setIsEditing} />
      )}
    </div>
  );
};
export default Password;
