import { useAuth } from "@/contexts/AuthContext";
import { Dispatch, FC, SetStateAction } from "react";

const FormPhone: FC<FormPhoneProps> = ({ setIsEditing }) => {
  const { user } = useAuth();
  return (
    <div className="flex gap-8">
      <p className="border">{user?.phone}</p>

      <button onClick={() => setIsEditing(true)}>Change Phone</button>
    </div>
  );
};
export default FormPhone;

interface FormPhoneProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
