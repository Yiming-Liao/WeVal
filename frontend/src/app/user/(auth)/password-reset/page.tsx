// [r: User]

import { FC } from "react";
import { Header } from "@/components/ui";
import FormPasswordResetWrapper from "@/components/user/auth/passwordReset/FormPasswordReset";

const PasswordResetPage: FC = () => {
  return (
    <>
      <Header title={"Reset password"} />

      {/* Forgot password form */}
      <section className="flex flex-col items-center">
        <FormPasswordResetWrapper />
      </section>
    </>
  );
};
export default PasswordResetPage;
