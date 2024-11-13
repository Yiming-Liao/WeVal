import { FC, HTMLAttributes, ReactNode } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  className?: string;
};

const Title: FC<TitleProps> = ({ children, className = "", ...props }) => {
  return (
    <h1 className={`${className} typography-title-md text-deep`} {...props}>
      {children}
    </h1>
  );
};
export default Title;
