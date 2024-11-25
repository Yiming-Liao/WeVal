// [r: Admin]

import { Header } from "@/components/ui";
import FormPasswordResetWrapper from "@/components/admin/auth/passwordReset/FormPasswordReset";

const PasswordResetPage = () => {
  return (
    <>
      <Header title={"Reset password"} />

      {/* Forgot password form */}
      <section className="flex flex-col items-center">
        <FormPasswordResetWrapper />
      </section>
    </>
  );
};
export default PasswordResetPage;
