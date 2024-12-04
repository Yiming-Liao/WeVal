// [r: Valuer]

import { FC } from "react";
import { Steps3of3 } from "@/components/svg";
import RegisterQualificationContainer from "@/components/valuer/auth/register/page-3/RegisterQualificationContainer";
import AuthHeader from "@/components/common/auth/AuthHeader";

// RegisterQualifyPage
const RegisterPage3: FC = () => {
  return (
    <>
      <AuthHeader title={"Qualification Verification"} />

      <section className="size-full flex flex-col items-center gap-6">
        {/* <SVG> Steps */}
        <Steps3of3 />

        {/* Container */}
        <RegisterQualificationContainer />
      </section>
    </>
  );
};
export default RegisterPage3;
