import React from "react";
import { formatCurrency } from "../../utilites/number_utilites";

interface ISummaryProps {
  totalDocuments: number;
  totalRevenue: number;
}

const Summary: React.FC<ISummaryProps> = ({ totalDocuments, totalRevenue }) => {
  return (
    <div className="flex flex-col">
      <span className="text-lg font-bold">Totali</span>
      <div className="flex flex-row mt-2">
        <span>Documenti:</span>
        <span className="font-bold ml-2">{totalDocuments}</span>
      </div>
      <div className="flex flex-row">
        <span>Totale:</span>
        <span className="font-bold ml-2">{formatCurrency(totalRevenue)}</span>
      </div>
    </div>
  );
};

export default Summary;
