import Link from "next/link";

const UserCard = () => {
  return (
    <div
      id="userCard"
      className="absolute top-[64px] right-0 w-[296px] h-[271px]"
    >
      {/* <div className="size-full rounded-[8px] bg-gradient-to-r from-[#ffffff33] to-[#ffffff4d] backdrop-blur-[14px] [box-shadow:0px_8px_16px_0px_rgba(0,0,0,0.08);]"> */}
      <div className="size-full rounded-[8px] bg-slate-400 backdrop-blur-[14px] [box-shadow:0px_8px_16px_0px_rgba(0,0,0,0.08);]">
        <div className="py-3 px-6 flex flex-col gap-5">
          {/* User Info + Edit button */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="border  size-[60px]"></div>
              {/* Username Email */}
              <div className="flex flex-col items-start">
                <p>Summer</p>
                <p>masou@gmail.com</p>
              </div>
            </div>
            <Link href={"/dashboard"} className="h-8 rounded bg-white">
              <span>Edit Profile</span>
            </Link>
          </div>
          {/* Divider */}
          <div className="h-px bg-white"></div>

          {/* 尚未完成 */}
        </div>
      </div>
    </div>
  );
};
export default UserCard;
