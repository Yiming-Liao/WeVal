// [r: Admin]

import FormLogin from "@/components/AdminLayout/auth/login/FormLogin";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center gap-16 p-16">
      <h1 className="text-4xl">LoginPage</h1>

      <FormLogin />
    </div>
  );
};
export default LoginPage;
