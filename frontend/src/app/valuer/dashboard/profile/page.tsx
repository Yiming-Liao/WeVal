// [r: Valuer]

import LayoutContainer from "@/components/common/LayoutContainer";
import BackgroundDecoration from "@/components/common/BackgroundDecoration";
import PageHeader from "@/components/common/PageHeader";
import { TabsSet } from "@/types/tabsSet.types";
import ProfileFieldsContainer from "@/components/valuer/dashboard/profile/ProfileFieldsContainer";

const ProfilePage = () => {
  return (
    <>
      <div className="relative flex flex-col items-center">
        <div className="size-full flex flex-col items-center">
          {/* Header */}
          <PageHeader
            breadcrumbsLinks={[
              { href: "/", page: "Home" },
              { href: "/user/dashboard", page: "Dashboard" },
            ]}
            currentPage={"Profile"}
            title={"Profile"}
            tabs={TabsSet.USER_DASHBOARD}
          />

          {/* <section> Profile info */}
          <LayoutContainer>
            <section className="pt-16 pb-28 lg:px-40 px-8 flex flex-col gap-12">
              <ProfileFieldsContainer />
            </section>
          </LayoutContainer>
        </div>
      </div>

      {/* Background decoration */}
      <BackgroundDecoration />
    </>
  );
};
export default ProfilePage;
