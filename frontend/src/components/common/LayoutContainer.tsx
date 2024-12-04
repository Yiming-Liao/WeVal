import { FC, HTMLAttributes, ReactNode } from "react";

type LayoutContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

const LayoutContainer: FC<LayoutContainerProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`${className} xl:w-[90%] w-full max-w-[1440px] px-8`}
      {...props}
    >
      {children}
    </div>
  );
};
export default LayoutContainer;
