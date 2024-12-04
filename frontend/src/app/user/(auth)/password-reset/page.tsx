// [r: User]

import { FC } from "react";
import FormPasswordResetWrapper from "@/components/user/auth/passwordReset/FormPasswordReset";
import AuthHeader from "@/components/common/auth/AuthHeader";

const PasswordResetPage: FC = () => {
  return (
    <>
      <AuthHeader title={"Reset password"} />

      {/* Forgot password form */}
      <section className="flex flex-col items-center">
        <FormPasswordResetWrapper />
      </section>
    </>
  );
};
export default PasswordResetPage;
