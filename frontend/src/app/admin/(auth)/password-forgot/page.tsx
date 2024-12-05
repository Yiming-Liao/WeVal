// [r: Admin]

import { FC } from "react";
import AuthHeader from "@/components/common/auth/AuthHeader";
import FormPasswordForgot from "@/components/admin/auth/passwordForgot/FormPasswordForgot";

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
