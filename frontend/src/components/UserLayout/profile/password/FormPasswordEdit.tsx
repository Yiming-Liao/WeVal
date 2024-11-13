import { usePasswordChange } from "@/hooks/user/profile/usePasswordChange";
import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";

const FormPasswordEdit: FC<FormPasswordProps> = ({ setIsEditing }) => {
  const { passwordChange } = usePasswordChange();
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isChanged = await passwordChange({
      password,
      newPassword,
      newPasswordConfirm,
    });
    if (isChanged) {
      console.log("isChanged!");
      setIsEditing(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Password"
          className="border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="New Password"
          className="border"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Password Confirm"
          className="border"
          value={newPasswordConfirm}
          onChange={(e) => setNewPasswordConfirm(e.target.value)}
        />

        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
        <button>Confirm</button>
      </form>
    </>
  );
};
export default FormPasswordEdit;

interface FormPasswordProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
