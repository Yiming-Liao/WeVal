import { FC } from "react";
import LayoutContainer from "./LayoutContainer";

const BackgroundDecoration: FC<BackgroundDecorationProps> = ({
  className = "",
  noBorder = false,
}) => {
  return (
    <div
      className={`${className} fixed top-24 left-0 size-full flex justify-center -z-50 bg-snow`}
    >
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

interface BackgroundDecorationProps {
  className?: string;
  noBorder?: boolean;
}
