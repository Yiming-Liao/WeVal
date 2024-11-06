// [r: Admin]

import FormPasswordForgot from "@/components/admin/auth/passwordForgot/FormPasswordForgot";
import { FC } from "react";

const PasswordForgotPage: FC = () => {
  return (
    <div className="flex flex-col items-center gap-16 p-16">
      <h1 className="text-4xl">PasswordForgotPage</h1>

      <FormPasswordForgot />
    </div>
  );
};
export default PasswordForgotPage;
