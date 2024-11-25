// [r: Valuer]

import Password from "@/components/valuer/profile/password/Password";
import Phone from "@/components/valuer/profile/phone/Phone";
import Username from "@/components/valuer/profile/username/Username";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center gap-16 p-4">
      <h1>ProfilePage</h1>

      <Username />
      <Password />
      <Phone />
    </div>
  );
};
export default ProfilePage;
