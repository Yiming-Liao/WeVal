// [r: User]

import Email from "@/components/user/dashboard/profile/email/Email";
import FormUsername from "@/components/user/dashboard/profile/username/FormUsername";
import FormPassword from "@/components/user/dashboard/profile/password/FormPassword";
import LayoutContainer from "@/components/common/LayoutContainer";
import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import PageHeader from "@/components/common/PageHeader";
import { Order, Profile } from "@/components/svg";

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
            tabs={[
              {
                text: "Profile",
                href: "/user/dashboard/profile",
                isActive: true,
                icon: <Profile />,
              },
              {
                text: "Orders",
                href: "/user/dashboard/orders",
                isActive: false,
                icon: <Order />,
              },
            ]}
          />

          {/* Main */}
          <LayoutContainer>
            <div className="pt-16 pb-28 lg:px-40 px-8 flex flex-col gap-12">
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
          </LayoutContainer>
        </section>
      </div>

      {/* Background decoration */}
      <BackgroundDecoration />
    </>
  );
};
export default ProfilePage;
