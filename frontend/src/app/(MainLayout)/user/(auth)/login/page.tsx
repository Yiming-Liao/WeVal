import FormLogin from "@/components/user/auth/login/FormLogin";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center gap-16 p-16">
      <h1 className="text-4xl">LoginPage</h1>

      <div className="flex gap-4">
        <Link href={"/user/login"}>User</Link>
        <Link href={"/valuer/login"}>Valuer</Link>
      </div>

      <FormLogin />

      <Link href={"/user/register/page-1"}>Register as user</Link>
    </div>
  );
};
export default LoginPage;
