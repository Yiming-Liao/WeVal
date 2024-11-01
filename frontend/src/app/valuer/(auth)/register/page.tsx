import FormRegister from "@/components/user/auth/register/FormRegister";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center gap-16 p-16">
      <h1 className="text-4xl">RegisterPage</h1>

      {/* form 註冊表單 */}
      <FormRegister />
    </div>
  );
};
export default RegisterPage;
