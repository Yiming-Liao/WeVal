// [r: Valuer]

import { FC } from "react";
import { Steps2of3 } from "@/components/svg";
import RegisterContainerWrapper from "@/components/valuer/auth/register/page-2/RegisterContainer";
import AuthHeader from "@/components/common/auth/AuthHeader";

// RegisterPage
const RegisterPage2: FC = () => {
  return (
    <>
      <AuthHeader title={"Sign up"} />

      <section className="size-full flex flex-col items-center gap-6">
        {/* <SVG> Steps */}
        <Steps2of3 />

        {/* Container */}
        <RegisterContainerWrapper />
      </section>
    </>
  );
};
export default RegisterPage2;
