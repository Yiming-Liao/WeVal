import { FC } from "react";

const Skeleton: FC<{ className?: string }> = ({ className = "" }) => {
  return <div className={`${className} skeleton`} />;
};
export default Skeleton;
