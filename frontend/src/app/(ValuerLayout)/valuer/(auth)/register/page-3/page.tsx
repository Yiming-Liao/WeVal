// [r: Valuer]

import { FC } from "react";
import { Header } from "@/components/ui";
import { Steps3of3 } from "@/components/svg";
import RegisterQualificationContainer from "@/components/ValuerLayout/auth/register/page-3/RegisterQualificationContainer";

// RegisterQualifyPage
const RegisterPage3: FC = () => {
  return (
    <>
      <Header title={"Qualification Verification"} />

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
