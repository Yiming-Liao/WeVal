// [r: Admin]

import AuthHeader from "@/components/common/auth/AuthHeader";
import FormPasswordResetWrapper from "@/components/admin/auth/passwordReset/FormPasswordReset";

const PasswordResetPage = () => {
  return (
    <>
      <AuthHeader title={"Reset password"} />

      {/* Forgot password form */}
      <section className="flex flex-col items-center">
        <FormPasswordResetWrapper />
      </section>
    </>
  );
};
export default PasswordResetPage;
