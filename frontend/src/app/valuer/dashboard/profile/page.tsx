// [r: Valuer]

import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import LayoutContainer from "@/components/common/LayoutContainer";
import PageHeader from "@/components/common/PageHeader";
// import { Order, Profile } from "@/components/svg";
// import Password from "@/components/valuer/profile/password/Password";
// import Phone from "@/components/valuer/profile/phone/Phone";
// import Username from "@/components/valuer/profile/username/Username";

const ProfilePage = () => {
  return (
    <>
      <div className="relative flex flex-col items-center">
        <section className="size-full flex flex-col items-center">
          {/* Header */}
          <PageHeader
            breadcrumbsLinks={[
              { href: "/", page: "Home" },
              { href: "/user/dashboard", page: "Dashboard" },
            ]}
            currentPage={"Profile"}
            title={"Profile"}
            tabs={"valuer"}
          />

          {/* Main */}
          <LayoutContainer>
            <div className="pt-16 pb-28 lg:px-40 px-8 flex flex-col gap-12">
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="typography-label-md text-silver font-medium">
                  Email
                </label>
                {/* <Email /> */}
              </div>

              {/* Username */}
              <div className="flex flex-col gap-2">
                <label className="typography-label-md text-silver font-medium">
                  Username
                </label>
                {/* <FormUsername /> */}
              </div>

              {/* Divider */}
              <div className="h-[0.25px] bg-primary" />

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label className="typography-label-md text-silver font-medium">
                  Password
                </label>
                {/* <FormPassword /> */}
              </div>
            </div>
          </LayoutContainer>
        </section>
      </div>

      {/* Background decoration */}
      <BackgroundDecoration />
    </>
  );
};
export default ProfilePage;
