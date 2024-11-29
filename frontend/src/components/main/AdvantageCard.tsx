import { FC } from "react";

const AdvantageCard: FC<AdvantageCardProps> = ({ title, description }) => {
  return (
    <div className="flex-1 py-6 px-5 bg-[#F0F3FA] rounded-[20px] flex flex-col gap-6">
      <h3 className="typography-body-md font-medium text-primary">{title}</h3>
      <p className="typography-body-sm font-light text-primary">
        {description}
      </p>
    </div>
  );
};

export default AdvantageCard;

interface AdvantageCardProps {
  title: string;
  description: string;
}
