import Link from "next/link";
import { TitleAndBreadcrumbs } from "@/components/ui";
import { Order, Profile } from "@/components/svg";
import Email from "@/components/user/profile/email/Email";
import FormUsername from "@/components/user/profile/username/FormUsername";
import FormPassword from "@/components/user/profile/password/FormPassword";

const ProfilePage = () => {
  return (
    <div className="relative flex flex-col items-center">
      <section className="size-full flex flex-col items-center">
        {/* Header */}
        <header className="w-full flex flex-col items-center">
          {/* Title & Breadcrumbs */}
          <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px]">
            <TitleAndBreadcrumbs
              links={[
                { href: "/", page: "Home" },
                { href: "/user/dashboard", page: "Dashboard" },
              ]}
              currentPage={"Profile"}
              title={"Profile"}
            />
          </div>

          {/* Dashboard links */}
          <div className="w-full border-b-[0.25px] border-secondary flex justify-center pt-10 pl-16">
            <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px]">
              <nav className="flex gap-2">
                <Link
                  href={"/user/dashboard/profile"}
                  className="-ml-2 px-3 typography-label-lg text-secondary flex justify-center"
                >
                  <span className="py-2 border-b border-secondary flex items-center gap-2">
                    <Profile />
                    Profile
                  </span>
                </Link>
                <Link
                  href={"/user/dashboard/orders"}
                  className="px-3 typography-label-lg text-secondary flex justify-center"
                >
                  <span className="py-2 border-b border-black/0 flex items-center gap-2">
                    <Order />
                    Orders
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main */}
        <div className="2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px] pt-16 pb-28 px-40 flex flex-col gap-12">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="typography-label-md text-silver font-medium">
              Email
            </label>
            <Email />
          </div>

          {/* Username */}
          <div className="flex flex-col gap-2">
            <label className="typography-label-md text-silver font-medium">
              Username
            </label>
            <FormUsername />
          </div>

          {/* Divider */}
          <div className="h-[0.25px] bg-primary" />

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="typography-label-md text-silver font-medium">
              Password
            </label>
            <FormPassword />
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProfilePage;
