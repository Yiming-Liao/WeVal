// [r: User]

import { FC } from "react";
import AuthHeader from "@/components/common/auth/AuthHeader";
import { Steps1of2 } from "@/components/svg";
import EmailVerificationContainer from "@/components/user/auth/register/page-1/EmailVerificationContainer";

// RegisterEmailVerifyPage
const RegisterPage1: FC = () => {
  return (
    <>
      <AuthHeader title={"Sign up"} />

      <section className="size-full flex flex-col items-center gap-6">
        {/* <SVG> Steps */}
        <Steps1of2 />

        {/* Container */}
        <EmailVerificationContainer />
      </section>
    </>
  );
};
export default RegisterPage1;
