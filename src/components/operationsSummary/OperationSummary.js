import React from 'react';
import SummaryItem from './SummaryItem';

const OperationSummary = ({ data }) => {
  return (
    <div className="summary">
      <p className="summaryListHeading">Сводка</p>
      <ul className="summaryList">
        {data.map((item) => (
          <SummaryItem data={item} />
        ))}
      </ul>
    </div>
  );
};

export default OperationSummary;
