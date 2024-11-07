// [r: Admin]

import FormPasswordReset from "@/components/AdminLayout/auth/passwordReset/FormPasswordReset";

const PasswordResetPage = () => {
  return (
    <div className="flex flex-col items-center gap-16 p-16">
      <h1 className="text-4xl">PasswordResetPage</h1>

      <FormPasswordReset />
    </div>
  );
};
export default PasswordResetPage;
