import { FC } from "react";
import LayoutContainer from "./LayoutContainer";

const BackgroundDecoration: FC<{ partial?: boolean }> = ({
  partial = false,
}) => {
  return (
    <div className="absolute top-0 left-0 size-full flex justify-center -z-50 bg-[#FAFAFA]">
      <LayoutContainer>
        <div
          className={`w-full ${
            !partial ? "h-full" : "h-[337px]"
          } border-l border-r border-light`}
        />
      </LayoutContainer>
    </div>
  );
};
export default BackgroundDecoration;
