// [r: Valuer]

"use client";

import Email from "@/components/valuer/dashboard/profile/Email";
import FormUsername from "@/components/valuer/dashboard/profile/Username";
import FormPassword from "@/components/valuer/dashboard/profile/Password";
import Field from "@/components/ui/Field";
import { useValuerStore } from "@/stores/valuerStore";
import Phone from "./Phone";

const ProfileFieldsContainer = () => {
  const { valuer } = useValuerStore();

  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={"https://placehold.co/80"} alt="" width={80} height={80} />

        {/* Button: Edit */}
        <button
          type="button"
          className="h-10 typography-label-md text-silver bg-white rounded-lg py-2 px-6 border border-black/25"
        >
          Change photo
        </button>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 flex flex-col gap-12">
          {/* Field: Email */}
          <Field label={"Email"} data={<Email valuer={valuer} />} />

          {/* Field: Username */}
          <Field label={"Username"} data={<FormUsername valuer={valuer} />} />
        </div>
        <div className="flex-1">
          <Field label={"Phone"} data={<Phone valuer={valuer} />} />
        </div>
      </div>

      {/* Divider */}
      <div className="h-[0.25px] bg-primary" />

      {/* Field: Password */}
      <Field label={"Password"} data={<FormPassword />} />
    </div>
  );
};
export default ProfileFieldsContainer;
