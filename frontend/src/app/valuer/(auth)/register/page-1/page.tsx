// [r: Valuer]

import { FC } from "react";
import { Steps1of3 } from "@/components/svg";
import EmailVerificationContainer from "@/components/valuer/auth/register/page-1/EmailVerificationContainer";
import AuthHeader from "@/components/common/auth/AuthHeader";

// RegisterEmailVerifyPage
const RegisterPage1: FC = () => {
  return (
    <>
      <AuthHeader title={"Sign up"} />

      <section className="size-full flex flex-col items-center gap-6">
        {/* <SVG> Steps */}
        <Steps1of3 />

        {/* Container */}
        <EmailVerificationContainer />
      </section>
    </>
  );
};
export default RegisterPage1;
