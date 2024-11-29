import { FC } from "react";

const Description: FC<{ text: string }> = ({ text = "" }) => {
  return (
    <p className="typography-body-md leading-7 text-secondary font-light">
      {text}
    </p>
  );
};
export default Description;
