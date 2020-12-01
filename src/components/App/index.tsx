import React, { useState } from "react";
import data from "../../data.json";
import { isDateInRange, parseDate } from "../../utilites/date_utilities";
import Header from "../Header";
import Month from "../Month";
import Summary from "../Summary";
import style from "./index.module.css";

const App: React.FC = () => {
  const [selectionStart, setSelectionStart] = useState<Date | undefined>();
  const [selectionEnd, setSelectionEnd] = useState<Date | undefined>();

  function isSelected(month: Date): boolean {
    if (selectionStart && selectionEnd) {
      return isDateInRange(month, selectionStart, selectionEnd);
    } else {
      return false;
    }
  }

  let totalDocuments = 0;
  let totalRevenue = 0;
  for (let i = 0; i < data.length; i++) {
    const month = parseDate(data[i].month);
    if (!selectionStart || !selectionEnd || isSelected(month)) {
      totalDocuments += data[i].documents;
      totalRevenue += data[i].revenue;
    }
  }

  const maxRevenue = Math.max.apply(
    Math,
    data.map((value) => value.revenue)
  );

  const months = data.map((value) => {
    const month = parseDate(value.month);
    return (
      <Month
        key={value.month}
        data={{
          documents: value.documents,
          month: month,
          revenue: value.revenue,
        }}
        maxRevenue={maxRevenue}
        isSelected={isSelected(month)}
        onMouseDown={(month: Date) => {
          setSelectionStart(month);
          setSelectionEnd(month);
        }}
        onMouseUp={(month: Date) => {
          setSelectionEnd(month);
        }}
      />
    );
  });

  return (
    <div className="flex flex-col m-8">
      <div className="mx-auto ax-w-max">
        <div className={`mx-auto pt-2.5 px-6 ${style.rectangle}`}>
          <Header />
          <div className="flex flex-row mt-4">{months}</div>
        </div>
        <div className="mx-auto mt-8">
          <Summary
            totalDocuments={totalDocuments}
            totalRevenue={totalRevenue}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
