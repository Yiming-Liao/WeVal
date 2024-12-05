// [r: Valuer]

"use client";

import Email from "@/components/valuer/dashboard/profile/email/Email";
import FormUsername from "@/components/valuer/dashboard/profile/username/FormUsername";
import FormPassword from "@/components/valuer/dashboard/profile/password/FormPassword";
import Field from "@/components/ui/Field";
import { useValuerStore } from "@/stores/valuerStore";

const ProfileFieldsContainer = () => {
  const { valuer } = useValuerStore();

  return (
    <>
      <div className="flex">
        <div className="flex-1 flex flex-col gap-12">
          {/* Field: Email */}
          <Field label={"Email"} data={<Email valuer={valuer} />} />

          {/* Field: Username */}
          <Field label={"Username"} data={<FormUsername valuer={valuer} />} />
        </div>
        <div className="flex-1">
          <Field label={"Phone"} data={"Phone"} />
        </div>
      </div>

      {/* Divider */}
      <div className="h-[0.25px] bg-primary" />

      {/* Field: Password */}
      <Field label={"Password"} data={<FormPassword />} />
    </>
  );
};
export default ProfileFieldsContainer;
