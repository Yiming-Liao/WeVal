// [r: User]

"use client";

import Email from "@/components/user/dashboard/profile/email/Email";
import FormUsername from "@/components/user/dashboard/profile/username/FormUsername";
import FormPassword from "@/components/user/dashboard/profile/password/FormPassword";
import Field from "@/components/ui/Field";
import { useUserStore } from "@/stores/userStore";

const ProfileFieldsContainer = () => {
  const { user } = useUserStore();

  return (
    <>
      {/* Field: Email */}
      <Field label={"Email"} data={<Email user={user} />} />

      {/* Field: Username */}
      <Field label={"Username"} data={<FormUsername user={user} />} />

      {/* Divider */}
      <div className="h-[0.25px] bg-primary" />

      {/* Field: Password */}
      <Field label={"Password"} data={<FormPassword />} />
    </>
  );
};
export default ProfileFieldsContainer;
