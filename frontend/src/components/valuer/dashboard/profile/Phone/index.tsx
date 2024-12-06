"use client";

import { FC, useState } from "react";
import PhoneDisplay from "./PhoneDisplay";
import PhoneEdit from "./PhoneEdit";
import { Valuer } from "@/types/models/valuer.types";

const Phone: FC<{ valuer: Valuer | null }> = ({ valuer }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <>
      {!isEditing ? (
        <PhoneDisplay setIsEditing={setIsEditing} valuer={valuer} />
      ) : (
        <PhoneEdit setIsEditing={setIsEditing} />
      )}
    </>
  );
};
export default Phone;
