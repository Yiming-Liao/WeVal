import { FC } from "react";
import LayoutContainer from "./LayoutContainer";

const BackgroundDecoration: FC<{ noBorder?: boolean }> = ({
  noBorder = false,
}) => {
  return (
    <div className="fixed top-24 left-0 size-full flex justify-center -z-50 bg-[#FAFAFA]">
      <LayoutContainer>
        <div
          className={`size-full ${
            !noBorder ? "border-l border-r border-light" : "border-0"
          } `}
        />
      </LayoutContainer>
    </div>
  );
};
export default BackgroundDecoration;
