// [r: Admin]

import FormPassworChanged from "@/components/admin/auth/passwordChange/FormPasswordChange";
import AuthHeader from "@/components/common/auth/AuthHeader";

const PasswordChangePage = () => {
  return (
    <>
      <AuthHeader title={"Change password"} />

      {/* Change password form */}
      <section className="flex flex-col items-center">
        <FormPassworChanged />
      </section>
    </>
  );
};
export default PasswordChangePage;
