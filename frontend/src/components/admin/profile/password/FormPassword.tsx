import { Dispatch, FC, SetStateAction } from "react";

const FormPassword: FC<FormPasswordProps> = ({ setIsEditing }) => {
  return (
    <div className="flex gap-8">
      <p className="border">******</p>

      <button onClick={() => setIsEditing(true)}>Change Password</button>
    </div>
  );
};
export default FormPassword;

interface FormPasswordProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
