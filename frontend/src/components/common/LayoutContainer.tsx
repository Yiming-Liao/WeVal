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
      className={`${className} 2xl:w-[80%] xl:w-[90%] w-full max-w-[1380px] px-8`}
      {...props}
    >
      {children}
    </div>
  );
};
export default LayoutContainer;
