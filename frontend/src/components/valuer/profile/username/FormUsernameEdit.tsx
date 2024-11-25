// [r: Valuer]

import { useUsernameChange } from "@/hooks/valuer/profile/useUsernameChange";
import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";

const FormUsernameEdit: FC<FormUsernameProps> = ({ setIsEditing }) => {
  const { usernameChange } = useUsernameChange();
  const [username, setUsername] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const isChanged = await usernameChange({ username });
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
          placeholder="username"
          className="border"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
        <button>Confirm</button>
      </form>
    </>
  );
};
export default FormUsernameEdit;

interface FormUsernameProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
