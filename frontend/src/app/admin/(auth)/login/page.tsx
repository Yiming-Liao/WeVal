// [r: Admin]

import { FC } from "react";
import FormLogin from "@/components/admin/auth/login/FormLogin";
import AuthHeader from "@/components/common/auth/AuthHeader";

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
