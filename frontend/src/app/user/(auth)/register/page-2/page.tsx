// [r: User]

import { FC } from "react";
import AuthHeader from "@/components/common/auth/AuthHeader";
import { Steps2of2 } from "@/components/svg";
import FormRegister from "@/components/user/auth/register/page-2/FormRegister";

// RegisterEmailVerifyPage
const RegisterPage2: FC = () => {
  return (
    <>
      <AuthHeader title={"Sign up"} />

      <section className="size-full flex flex-col items-center gap-6">
        {/* <SVG> Steps */}
        <Steps2of2 />

        {/* Form: Register */}
        <FormRegister />
      </section>
    </>
  );
};
export default RegisterPage2;
