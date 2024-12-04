// [r: Admin]

import { AuthHeader } from "@/components/ui";
import FormPassworChanged from "@/components/admin/auth/passwordChange/FormPasswordChange";

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
