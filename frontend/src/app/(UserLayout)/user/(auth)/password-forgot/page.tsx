// [r: User]

import { FC } from "react";
import { Header } from "@/components/ui";
import FormPasswordForgot from "@/components/UserLayout/auth/passwordForgot/FormPasswordForgot";

const PasswordForgotPage: FC = () => {
  return (
    <>
      <Header title={"Forgot password"} />

      {/* Forgot password form */}
      <section className="flex flex-col items-center">
        <FormPasswordForgot />
      </section>
    </>
  );
};
export default PasswordForgotPage;
