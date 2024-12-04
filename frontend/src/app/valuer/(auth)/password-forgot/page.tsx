// [r: Valuer]

import { FC } from "react";
import FormPasswordForgot from "@/components/valuer/auth/passwordForgot/FormPasswordForgot";
import AuthHeader from "@/components/common/auth/AuthHeader";

const PasswordForgotPage: FC = () => {
  return (
    <>
      <AuthHeader title={"Forgot password"} />

      {/* Forgot password form */}
      <section className="flex flex-col items-center">
        <FormPasswordForgot />
      </section>
    </>
  );
};
export default PasswordForgotPage;
