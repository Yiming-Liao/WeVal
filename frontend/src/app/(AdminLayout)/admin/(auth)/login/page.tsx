// [r: Admin]

import { FC } from "react";
import { Header } from "@/components/ui";
import FormLogin from "@/components/AdminLayout/auth/login/FormLogin";

const LoginPage: FC = () => {
  return (
    <>
      <Header title={"Sign in"} />

      {/* Login form */}
      <section className="flex flex-col items-center">
        <FormLogin />
      </section>
    </>
  );
};
export default LoginPage;
