import Link from "next/link";

const IsNotLoggedIn = () => {
  return (
    <div className="flex items-center gap-6">
      {/* login */}
      <Link href={"/user/login"} className="p-2">
        Login
      </Link>

      {/* register */}
      <Link href={"/user/register-email-verify"} className="p-2">
        Register
      </Link>
    </div>
  );
};
export default IsNotLoggedIn;
