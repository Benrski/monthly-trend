import React from "react";

interface IMonthSelectionProps {
  isSelected: boolean;
}

const MonthSelection: React.FC<IMonthSelectionProps> = ({ isSelected }) => {
  return (
    <span
      className={`rounded-full w-full bg-lime h-1 mt-1 ${
        isSelected ? "visible" : "invisible"
      }`}
    />
  );
};

export default MonthSelection;
