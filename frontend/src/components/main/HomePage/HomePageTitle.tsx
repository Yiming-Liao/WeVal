import { FC } from "react";

const HomePageTitle: FC<{ title: string }> = ({ title = "" }) => {
  return (
    <h2 className="typography-title-lg text-deep relative top-[-12px] ">
      {title}
    </h2>
  );
};
export default HomePageTitle;
