"use client";

import { useState } from "react";
import FormPhone from "./FormPhone";
import FormPhoneEdit from "./FormPhoneEdit";

const Phone = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <div>
      {!isEditing ? (
        <FormPhone setIsEditing={setIsEditing} />
      ) : (
        <FormPhoneEdit setIsEditing={setIsEditing} />
      )}
    </div>
  );
};
export default Phone;
