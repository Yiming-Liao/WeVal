// [r: Valuer]

import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import { Dispatch, FC, SetStateAction } from "react";

const FormUsername: FC<FormUsernameProps> = ({ setIsEditing }) => {
  const { valuer } = useValuerAuth();
  return (
    <div className="flex gap-8">
      {valuer && <p className="border">{valuer.username}</p>}

      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
};
export default FormUsername;

interface FormUsernameProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
