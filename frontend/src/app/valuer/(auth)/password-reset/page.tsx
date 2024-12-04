// [r: Valuer]

import { FC } from "react";
import FormPasswordReset from "@/components/valuer/auth/passwordReset/FormPasswordReset";
import AuthHeader from "@/components/common/auth/AuthHeader";

const PasswordResetPage: FC = () => {
  return (
    <>
      <AuthHeader title={"Reset password"} />

      {/* Forgot password form */}
      <section className="flex flex-col items-center">
        <FormPasswordReset />
      </section>
    </>
  );
};
export default PasswordResetPage;
