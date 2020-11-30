import React from "react";
import { formatCurrency } from "../../../utilites/number_utilites";

interface IMonthContentProps {
  documents: number;
  maxRevenue: number;
  revenue: number;
}

const MonthContent: React.FC<IMonthContentProps> = (
  props: IMonthContentProps
) => {
  const revenuePercentage = (props.revenue * 100) / props.maxRevenue;

  return (
    <div
      className="flex p-1 h-20 border"
      style={{
        background: `linear-gradient(0deg, #E2F7DA ${revenuePercentage}%, #FFFFFF ${revenuePercentage}%)`,
      }}
    >
      <div className="flex flex-col mt-auto">
        <span className="text-gray-400">{`${props.documents} doc.`}</span>
        <span className="mt-1 text-blue-400 font-bold">
          {formatCurrency(props.revenue)}
        </span>
      </div>
    </div>
  );
};

export default MonthContent;
