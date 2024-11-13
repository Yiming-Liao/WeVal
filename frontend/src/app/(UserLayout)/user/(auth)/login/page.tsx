// [r: User]

import { ButtonOutline, Header } from "@/components/ui";
import FormLogin from "@/components/UserLayout/auth/login/FormLogin";
import Link from "next/link";

const UserLoginPage = () => {
  return (
    <>
      <Header title={"Sign in"} />

      <div className="h-full flex flex-col gap-44">
        <div className="flex flex-col gap-7">
          {/* Role switch */}
          <div className="relative flex flex-col">
            <div className="text-secondary flex gap-9">
              <Link
                href={"/user/login"}
                className="p-2 border-b-2 border-secondary"
              >
                User
              </Link>
              <Link href={"/valuer/login"} className="p-2">
                Valuer
              </Link>
            </div>
            <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[576px] bg-secondary opacity-25 h-px"></div>
          </div>

          {/* Login form */}
          <section className="flex flex-col items-center">
            <FormLogin />
          </section>
        </div>

        {/* Sign up  */}
        <div className="flex flex-col items-center gap-5">
          <p>Don&apos;t you have an account?</p>
          <Link href={"/user/register/page-1"}>
            <ButtonOutline className="w-52 h-12">
              Sign up as a Member
            </ButtonOutline>
          </Link>
        </div>
      </div>
    </>
  );
};
export default UserLoginPage;
