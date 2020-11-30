import React from "react";

interface IMonthHeaderProps {
  month: Date;
}

const MonthHeader: React.FC<IMonthHeaderProps> = ({ month }) => {
  const monthString = month.toLocaleString(undefined, { month: "long" });

  return (
    <div className="flex h-8 border-l border-r p-1">
      <span className="mt-auto capitalize">{monthString}</span>
    </div>
  );
};

export default MonthHeader;
