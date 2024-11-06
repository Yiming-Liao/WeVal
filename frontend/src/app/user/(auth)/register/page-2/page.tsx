import FormRegister from "@/components/user/auth/register/page-2/FormRegister";

// RegisterEmailVerifyPage
const RegisterPage2 = () => {
  return (
    <div className="flex flex-col items-center gap-16 p-16">
      <h1 className="text-4xl">RegisterPage2</h1>

      {/* form */}
      <FormRegister />
    </div>
  );
};
export default RegisterPage2;
