import React from "react";
import MonthContent from "./MonthContent";
import MonthHeader from "./MonthHeader";
import MonthSelection from "./MonthSelection";

interface IMonthProps {
  data: {
    documents: number;
    month: Date;
    revenue: number;
  };
  maxRevenue: number;
  isSelected: boolean;
  onMouseDown(month: Date): void;
  onMouseUp(month: Date): void;
}

const Month: React.FC<IMonthProps> = ({
  data,
  maxRevenue,
  isSelected,
  onMouseDown,
  onMouseUp,
}) => {
  return (
    <div
      className="select-none flex flex-1 flex-col text-xs cursor-pointer"
      onMouseDown={() => onMouseDown(data.month)}
      onMouseUp={() => onMouseUp(data.month)}
    >
      <MonthHeader month={data.month} />
      <MonthContent
        documents={data.documents}
        revenue={data.revenue}
        maxRevenue={maxRevenue}
      />
      <MonthSelection isSelected={isSelected} />
    </div>
  );
};

export default Month;
