// [r: Admin]

import { FC } from "react";
import { AuthHeader } from "@/components/ui";
import FormLogin from "@/components/admin/auth/login/FormLogin";

const LoginPage: FC = () => {
  return (
    <>
      <AuthHeader title={"Sign in"} />

      {/* Login form */}
      <section className="flex flex-col items-center">
        <FormLogin />
      </section>
    </>
  );
};
export default LoginPage;
