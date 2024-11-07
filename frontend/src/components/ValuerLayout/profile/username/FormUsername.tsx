import { useUserAuth } from "@/contexts/UserAuthContext";
import { Dispatch, FC, SetStateAction } from "react";

const FormUsername: FC<FormUsernameProps> = ({ setIsEditing }) => {
  const { user } = useUserAuth();
  return (
    <div className="flex gap-8">
      {user && <p className="border">{user.username}</p>}

      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
};
export default FormUsername;

interface FormUsernameProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
