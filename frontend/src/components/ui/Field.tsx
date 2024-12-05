import { FC, ReactNode } from "react";

const Field: FC<FieldProps> = ({ label, data }) => {
  return (
    <div className="w-full flex flex-col gap-6 typography-label-md">
      <label className="text-silver font-medium">{label}</label>
      <div className="text-deep">{data}</div>
    </div>
  );
};

export default Field;

interface FieldProps {
  label: string;
  data: string | ReactNode;
}
