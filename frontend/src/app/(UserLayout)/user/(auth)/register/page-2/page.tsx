// [r: User]

import { FC } from "react";
import { Header } from "@/components/ui";
import { Steps2of2 } from "@/components/svg";
import FormRegister from "@/components/UserLayout/auth/register/page-2/FormRegister";

// RegisterEmailVerifyPage
const RegisterPage2: FC = () => {
  return (
    <>
      <Header title={"Sign up"} />

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
