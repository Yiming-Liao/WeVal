// [r: Valuer]

import { FC } from "react";
import { Header } from "@/components/ui";
import { Steps2of3 } from "@/components/svg";
import RegisterContainerWrapper from "@/components/ValuerLayout/auth/register/page-2/RegisterContainer";

// RegisterPage
const RegisterPage2: FC = () => {
  return (
    <>
      <Header title={"Sign up"} />

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
