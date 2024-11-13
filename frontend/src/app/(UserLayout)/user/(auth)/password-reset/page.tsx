// [r: User]

import { FC } from "react";
import { Header } from "@/components/ui";
import FormPasswordReset from "@/components/UserLayout/auth/passwordReset/FormPasswordReset";

const PasswordResetPage: FC = () => {
  return (
    <>
      <Header title={"Reset password"} />

      {/* Forgot password form */}
      <section className="flex flex-col items-center">
        <FormPasswordReset />
      </section>
    </>
  );
};
export default PasswordResetPage;
